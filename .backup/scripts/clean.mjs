// scripts/clean.mjs
import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const ROOT = process.cwd();
const ROOT_GIT = path.resolve(path.join(ROOT, ".git"));
const ROOT_NODE_MODULES = path.resolve(path.join(ROOT, "node_modules"));
const ROOT_VENDOR = path.resolve(path.join(ROOT, "vendor"));

let includeGit = process.argv.includes("--git");
let includeLocks = process.argv.includes("--locks");

const showHelp = process.argv.includes("--help") || process.argv.includes("-h");
const showOptions = process.argv.includes("--options") || process.argv.includes("-o");

if (showHelp) {
  console.log(`
Uso:
  pnpm clean
    Abre um menu interativo (deps / deps+locks / deps+git / tudo)

Opções (sem menu):
  pnpm clean -- --locks
    Remove node_modules/vendor + lockfiles (package-lock.json, yarn.lock, npm-shrinkwrap.json)

  pnpm clean -- --git
    Remove node_modules/vendor + .git internos (exceto o .git da raiz)

  pnpm clean -- --locks --git
    Remove tudo (deps + lockfiles + .git internos)

Dica:
  Rode fora do VS Code se algum arquivo estiver travado (EPERM no Windows).
`);
  process.exit(0);
}

async function removePaths(patterns, { ignore = [] } = {}) {
  const matches = await glob(patterns, {
    dot: true,
    windowsPathsNoEscape: true,
    ignore,
  });

  let removed = 0;

  for (const p of matches) {
    const full = path.resolve(p);

    // Nunca apaga .git da raiz
    if (full === ROOT_GIT) continue;

    // Nunca apaga deps da raiz
    if (full === ROOT_NODE_MODULES) continue;
    if (full === ROOT_VENDOR) continue;

    console.log("🧹 Removendo:", p);
    await fs.rm(full, { recursive: true, force: true });
    removed++;
  }

  return removed;
}

async function askMenu() {
  const rl = readline.createInterface({ input, output });

  console.log("\nEscolha o modo de limpeza:");
  console.log("1) Só deps (node_modules + vendor)");
  console.log("2) Deps + lockfiles (package-lock/yarn.lock)");
  console.log("3) Deps + .git internos");
  console.log("4) Tudo (deps + lockfiles + .git)");
  console.log("0) Cancelar");

  const ans = await rl.question("\nOpção (0-4): ");
  rl.close();

  const opt = ans.trim();
  if (opt === "1") return { includeLocks: false, includeGit: false };
  if (opt === "2") return { includeLocks: true, includeGit: false };
  if (opt === "3") return { includeLocks: false, includeGit: true };
  if (opt === "4") return { includeLocks: true, includeGit: true };
  return null;
}

console.log(`📍 Limpeza em: ${ROOT}`);

// Só mostra menu se pedir explicitamente
if (showOptions) {
  const choice = await askMenu();
  if (!choice) {
    console.log("Cancelado.");
    process.exit(0);
  }
  includeLocks = choice.includeLocks;
  includeGit = choice.includeGit;
}

// ✅ IGNORE CRÍTICO pra pnpm
const ignoreCommon = [
  "**/.git/**",

  // não mexer na raiz
  "node_modules",
  "vendor",

  // não destruir pnpm internals
  "node_modules/.pnpm/**",
  "**/node_modules/.pnpm/**",

  ".pnpm-store/**",
  "**/.pnpm-store/**",
];

const removedDeps = await removePaths(["**/node_modules", "**/vendor"], {
  ignore: ignoreCommon,
});

if (includeLocks) {
  const removedLocks = await removePaths(
    ["**/package-lock.json", "**/yarn.lock", "**/npm-shrinkwrap.json"],
    {
      ignore: [
        ...ignoreCommon,
        "**/node_modules/**",
        "**/vendor/**",
      ],
    }
  );
  console.log(`✅ Removidos lockfiles: ${removedLocks}`);
}

if (includeGit) {
  const removedGit = await removePaths(["**/.git"], {
    ignore: [
      ".git",
      "**/node_modules/**",
      "**/vendor/**",
      "**/node_modules/.pnpm/**",
    ],
  });
  console.log(`✅ Removidos .git internos: ${removedGit} (exceto o da raiz)`);
}

console.log(`✅ Removidas deps: ${removedDeps}`);
console.log("✅ Finalizado.");
