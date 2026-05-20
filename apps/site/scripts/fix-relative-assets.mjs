import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_DIR = process.cwd();
const ROOTS = [
  path.join(SITE_DIR, 'dist'),
  path.resolve(SITE_DIR, '..', '..', 'public-demo'),
];

const LOCAL_ATTRS = /(?:href|src|poster|action|data-src|data-href|srcset)=(["'])([^"']*)\1/gi;

function isExternalUrl(value) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|\?|\.\/|\.\.\/|data:|mailto:|tel:|javascript:)/i.test(value);
}

function depthPrefix(depth) {
  return depth > 0 ? '../'.repeat(depth) : './';
}

function rewriteLocalUrl(value, prefix) {
  const trimmed = value.trim();
  if (!trimmed || isExternalUrl(trimmed)) return value;

  const normalized = trimmed.replace(/^\.\//, '').replace(/^\/+/, '');
  if (!normalized) return prefix;

  return `${prefix}${normalized}`;
}

function rewriteSrcset(value, prefix) {
  return value
    .split(',')
    .map((entry) => {
      const trimmed = entry.trim();
      if (!trimmed) return trimmed;

      const parts = trimmed.split(/\s+/);
      const url = parts.shift();
      if (!url) return trimmed;

      parts.unshift(rewriteLocalUrl(url, prefix));
      return parts.join(' ');
    })
    .join(', ');
}

function rewriteHtml(content, depth) {
  const prefix = depthPrefix(depth);

  return content.replace(LOCAL_ATTRS, (full, quote, value) => {
    const attrName = (full.match(/^([a-z-]+)/i) || [])[1]?.toLowerCase() ?? '';
    const rewritten = attrName === 'srcset'
      ? rewriteSrcset(value, prefix)
      : rewriteLocalUrl(value, prefix);

    return `${attrName || 'href'}=${quote}${rewritten}${quote}`;
  });
}

async function walk(directory, files = []) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath, files);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const rewritten = [];

  for (const root of ROOTS) {
    try {
      const rootStat = await stat(root);
      if (!rootStat.isDirectory()) continue;
    } catch {
      continue;
    }

    for (const filePath of await walk(root)) {
      const raw = await readFile(filePath, 'utf8');
      const depth = path.relative(root, filePath).split(path.sep).slice(0, -1).length;
      const updated = rewriteHtml(raw, depth);

      if (updated !== raw) {
        await writeFile(filePath, updated, 'utf8');
        rewritten.push(path.relative(process.cwd(), filePath));
      }
    }
  }

  if (rewritten.length > 0) {
    console.log(`Fixed relative asset links in ${rewritten.length} HTML file(s).`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack || error.message : String(error));
  process.exitCode = 1;
});
