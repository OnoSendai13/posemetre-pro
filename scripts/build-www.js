#!/usr/bin/env node
/**
 * build-www.js
 * Copie les fichiers sources web vers www/ (webDir Capacitor).
 * À exécuter avant `npx cap sync` quand des fichiers sources ont changé.
 *
 * Usage : npm run build  (ou node scripts/build-www.js)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WWW  = path.join(ROOT, 'www');

// Fichiers à la racine à copier dans www/
const ROOT_FILES = [
  'index.html',
  'app.js',
  'styles.css',
  'sw.js',
  'i18n.js',
  'theme-switcher.js',
  'manifest.json',
  'browserconfig.xml',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'icon-192.png',
  'icon-512.png',
];

// Dossiers entiers à copier dans www/
const ROOT_DIRS = [
  'src',
  'icons',
  'screenshots',
];

// ─── Utilitaires ────────────────────────────────────────────────

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      copyFile(s, d);
    }
  }
}

// ─── Copie ──────────────────────────────────────────────────────

console.log('🔨 Build www/ depuis les sources racine...\n');

let ok = 0, skip = 0;

for (const file of ROOT_FILES) {
  const src  = path.join(ROOT, file);
  const dest = path.join(WWW, file);
  if (fs.existsSync(src)) {
    copyFile(src, dest);
    console.log(`  ✅ ${file}`);
    ok++;
  } else {
    console.log(`  ⚠️  ${file} introuvable — ignoré`);
    skip++;
  }
}

for (const dir of ROOT_DIRS) {
  const src  = path.join(ROOT, dir);
  const dest = path.join(WWW, dir);
  if (fs.existsSync(src)) {
    copyDir(src, dest);
    console.log(`  ✅ ${dir}/`);
    ok++;
  } else {
    console.log(`  ⚠️  ${dir}/ introuvable — ignoré`);
    skip++;
  }
}

console.log(`\n✅ ${ok} éléments copiés${skip ? `, ${skip} ignorés` : ''}`);
console.log('📦 www/ prêt — vous pouvez lancer : npx cap sync android\n');
