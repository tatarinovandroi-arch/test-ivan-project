import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const SITE_DIR = process.cwd();
const DIST_DIR = path.join(SITE_DIR, 'dist');
const PROJECT_ROOT = path.resolve(SITE_DIR, '..', '..');
const PUBLIC_DEMO_DIR = path.join(PROJECT_ROOT, 'public-demo');
const PRESERVED_DEMO_ASSETS_DIR = path.join(PUBLIC_DEMO_DIR, 'assets', 'demo');
const PRESERVED_DATA_DIR = path.join(PUBLIC_DEMO_DIR, 'data');

async function exists(filePath) {
  try {
    await readdir(filePath);
    return true;
  } catch {
    return false;
  }
}

async function removePublicDemoExceptDemoAssets() {
  await mkdir(PRESERVED_DEMO_ASSETS_DIR, { recursive: true });
  await mkdir(PRESERVED_DATA_DIR, { recursive: true });

  let entries = [];
  try {
    entries = await readdir(PUBLIC_DEMO_DIR, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(PUBLIC_DEMO_DIR, entry.name);

    if (entry.name === 'data') {
      continue;
    }

    if (entry.name === 'assets') {
      const assetEntries = await readdir(fullPath, { withFileTypes: true }).catch(() => []);
      for (const assetEntry of assetEntries) {
        if (assetEntry.name === 'demo') continue;
        await rm(path.join(fullPath, assetEntry.name), { recursive: true, force: true });
      }
      continue;
    }

    await rm(fullPath, { recursive: true, force: true });
  }
}

async function main() {
  if (!(await exists(DIST_DIR))) {
    throw new Error(`Astro dist directory not found: ${DIST_DIR}`);
  }

  await mkdir(PUBLIC_DEMO_DIR, { recursive: true });
  await removePublicDemoExceptDemoAssets();
  await cp(DIST_DIR, PUBLIC_DEMO_DIR, { recursive: true, force: true });

  console.log(`Copied Astro dist to ${path.relative(PROJECT_ROOT, PUBLIC_DEMO_DIR) || PUBLIC_DEMO_DIR}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack || error.message : String(error));
  process.exitCode = 1;
});
