import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", "vendor", ".git", ".github", ".pnpm-store"]);

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

function run(cmd, args, cwd) {
  return new Promise((resolve) => {
    const p = spawn(cmd, args, { cwd, stdio: "inherit", shell: true });
    p.on("exit", (code) => resolve(code));
  });
}

async function walk(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  // Se tem composer.json aqui, adiciona e não precisa descer em vendor depois
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

console.log(`Encontrados ${projects.length} projetos PHP/Laravel:\n- ${projects.join("\n- ")}\n`);

let failed = 0;
for (const dir of projects) {
  console.log(`\n=== composer install em: ${dir} ===`);
  const code = await run("composer", ["install"], dir);
  if (code !== 0) failed++;
}

process.exit(failed === 0 ? 0 : 1);
