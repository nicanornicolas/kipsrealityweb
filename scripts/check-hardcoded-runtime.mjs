#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targetDirs = ['src/app/api', 'src/lib', 'scripts'];
const allowedExtensions = new Set(['.ts', '.tsx', '.js', '.mjs', '.cjs']);

const forbiddenPatterns = [
  { name: 'localhost URL', regex: /http:\/\/localhost(?::\d+)?/i },
  { name: 'loopback host', regex: /127\.0\.0\.1/ },
  { name: 'private LAN host check', regex: /\b192\.168\./ },
  { name: 'placeholder storage domain', regex: /storage\.example\.com/i },
  { name: 'hardcoded test API key', regex: /=\s*["'](?:sk_test|pk_test|test_[\w]{4,})/i },
];

function isCommentLine(line) {
  const t = line.trim();
  return t.startsWith('//') || t.startsWith('*') || t.startsWith('/*') || t.startsWith('*/');
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(abs, out);
      continue;
    }

    if (allowedExtensions.has(path.extname(entry.name))) {
      out.push(abs);
    }
  }
  return out;
}

const violations = [];
for (const relDir of targetDirs) {
  const absDir = path.join(root, relDir);
  for (const file of walk(absDir)) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (isCommentLine(line)) return;
      for (const pattern of forbiddenPatterns) {
        if (pattern.regex.test(line)) {
          violations.push({
            file: path.relative(root, file).replace(/\\/g, '/'),
            line: index + 1,
            pattern: pattern.name,
            text: line.trim(),
          });
        }
      }
    });
  }
}

if (violations.length) {
  console.error('[hardcoded-runtime] Found forbidden hardcoded runtime values:');
  for (const v of violations) {
    console.error(`- ${v.file}:${v.line} [${v.pattern}] ${v.text}`);
  }
  process.exit(1);
}

console.log('[hardcoded-runtime] No forbidden runtime hardcoded values found.');
