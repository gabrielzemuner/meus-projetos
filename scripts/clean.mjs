// scripts/clean.mjs
import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ROOT_GIT = path.resolve(path.join(ROOT, ".git"));
const ROOT_NODE_MODULES = path.resolve(path.join(ROOT, "node_modules"));
const ROOT_VENDOR = path.resolve(path.join(ROOT, "vendor"));

const includeGit = process.argv.includes("--git");

async function removePaths(patterns, { ignore = [] } = {}) {
  const matches = await glob(patterns, {
    dot: true,
    windowsPathsNoEscape: true,
    ignore,
  });

  let removed = 0;

  for (const p of matches) {
    const full = path.resolve(p);

    // Nunca apaga o .git do monorepo (raiz)
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

console.log(`📍 Limpeza em: ${ROOT}`);

const removedDeps = await removePaths(["**/node_modules", "**/vendor"], {
  ignore: ["**/.git/**"],
});

if (includeGit) {
  const removedGit = await removePaths(["**/.git"], {
    ignore: ["**/node_modules/**", "**/vendor/**"],
  });
  console.log(`✅ Removidos .git internos: ${removedGit} (exceto o da raiz)`);
}

console.log(`✅ Removidas deps: ${removedDeps}`);
console.log("✅ Finalizado.");
