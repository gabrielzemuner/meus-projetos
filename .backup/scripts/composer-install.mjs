import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const ROOT = process.cwd();
const SKIP = new Set([
  "node_modules",
  "vendor",
  ".git",
  ".github",
  ".pnpm-store",
]);

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function run(cmd, args, cwd) {
  return new Promise((resolve) => {
    const p = spawn(cmd, args, { cwd, stdio: "inherit", shell: true });
    p.on("exit", (code) => resolve(code));
  });
}

// ✅ Detecta Laravel de forma simples: tem "artisan"
async function isLaravel(dir) {
  return await exists(path.join(dir, "artisan"));
}

// ✅ Garante pastas essenciais do Laravel (cache + storage) e permissões no mac/linux
async function ensureLaravelDirs(dir) {
  // Pastas que evitam "Invalid cache path"
  await fs.mkdir(path.join(dir, "bootstrap", "cache"), { recursive: true });
  await fs.mkdir(path.join(dir, "storage", "framework", "views"), {
    recursive: true,
  });
  await fs.mkdir(path.join(dir, "storage", "framework", "cache"), {
    recursive: true,
  });
  await fs.mkdir(path.join(dir, "storage", "framework", "sessions"), {
    recursive: true,
  });
  await fs.mkdir(path.join(dir, "storage", "logs"), { recursive: true });

  // No mac/linux, garantir que é gravável
  if (process.platform !== "win32") {
    await run("chmod", ["-R", "775", "bootstrap/cache", "storage"], dir);
  }
}

async function walk(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  if (await exists(path.join(dir, "composer.json"))) out.push(dir);

  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (SKIP.has(e.name)) continue;
    await walk(path.join(dir, e.name), out);
  }
  return out;
}

const projects = Array.from(new Set(await walk(ROOT)));

if (projects.length === 0) {
  console.log("Nenhum composer.json encontrado.");
  process.exit(0);
}

console.log(
  `Encontrados ${projects.length} composer.json:\n- ${projects.join("\n- ")}\n`,
);

let failed = 0;
for (const dir of projects) {
  const laravel = await isLaravel(dir);

  console.log(
    `\n=== composer install em: ${dir}${laravel ? " (Laravel)" : ""} ===`,
  );

  // ✅ Só mexe em bootstrap/cache se for Laravel
  if (laravel) {
    try {
      await ensureLaravelDirs(dir);
    } catch (e) {
      console.warn(
        `⚠️ Não consegui preparar bootstrap/cache em ${dir}:`,
        e?.message ?? e,
      );
    }
  }

  const code = await run("composer", ["install"], dir);
  if (code !== 0) failed++;
}

process.exit(failed === 0 ? 0 : 1);
