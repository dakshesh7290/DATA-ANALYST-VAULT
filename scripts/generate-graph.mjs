import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'docs');
const OUTPUT_DIR = path.join(process.cwd(), 'public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'graph.json');

const nodes = new Map();
const edges = [];
const edgeSet = new Set();

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      processFile(fullPath);
    }
  }
}

function routeFromFile(filePath) {
  const relative = path.relative(CONTENT_DIR, filePath);
  const withoutExtension = relative.replace(/\.mdx$/, '');
  const normalized = withoutExtension.split(path.sep).join('/');

  if (normalized === 'index') {
    return '/docs';
  }

  return `/docs/${normalized}`;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const route = routeFromFile(filePath);

  const titleMatch = content.match(/^title:\s*["'](.+?)["']\s*$/m);
  const title = titleMatch?.[1] ?? path.basename(filePath, '.mdx');

  nodes.set(route, {
    id: route,
    title,
    url: route,
  });

  const linkRegex = /\]\((\/docs\/[^)#?]+)(?:[#?][^)]*)?\)/g;

  for (const match of content.matchAll(linkRegex)) {
    const target = match[1].replace(/\/$/, '');

    if (!nodes.has(target)) {
      nodes.set(target, {
        id: target,
        title: target.split('/').pop()?.replace(/-/g, ' ') ?? target,
        url: target,
      });
    }

    const edgeId = `${route}→${target}`;

    if (!edgeSet.has(edgeId) && route !== target) {
      edgeSet.add(edgeId);
      edges.push({
        source: route,
        target,
      });
    }
  }
}

walk(CONTENT_DIR);

const graph = {
  nodes: Array.from(nodes.values()),
  links: edges,
};

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(graph, null, 2));

console.log(
  `Graph generated: ${graph.nodes.length} nodes, ${graph.links.length} links`
);
console.log(`Output: ${OUTPUT_FILE}`);