#!/usr/bin/env node
/**
 * Test script: Verify i18n translations appear correctly
 * Usage: node test-i18n.js
 */

const fs = require('fs');
const path = require('path');

// Translation keys that should exist
const REQUIRED_KEYS = [
  'resultRatioLabel',
  'zoneDefault', 
  'labelCompensationSupp',
  'estimationIntro'
];

console.log('🔍 Testing i18n translations...\n');

// Test 1: Check i18n.js contains all required keys
const i18nPath = path.join(__dirname, 'i18n.js');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

let allKeysPresent = true;
for (const key of REQUIRED_KEYS) {
  // Check for key in object property format (key: or "key":)
  const pattern = new RegExp(`${key}\\s*:`);
  
  if (pattern.test(i18nContent)) {
    console.log(`✅ Key "${key}" present in i18n.js`);
  } else {
    console.log(`❌ Key "${key}" MISSING in i18n.js`);
    allKeysPresent = false;
  }
}

// Test 2: Check index.html has data-i18n attributes
const indexPath = path.join(__dirname, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

let htmlAttrsOk = true;
for (const key of ['labelCompensationSupp', 'estimationIntro']) {
  const pattern = new RegExp(`data-i18n="${key}"`);
  if (pattern.test(indexContent)) {
    console.log(`✅ data-i18n="${key}" found in index.html`);
  } else {
    console.log(`❌ data-i18n="${key}" NOT found in index.html`);
    htmlAttrsOk = false;
  }
}

// Test 3: Check no hardcoded "Zone" fallback
const hardcodedZone = /['"`]Zone['"`]\s*\|\|\s*/g;
if (!hardcodedZone.test(i18nContent)) {
  console.log('✅ No hardcoded "Zone" fallback string');
} else {
  console.log('❌ Found hardcoded "Zone" fallback - use _t("zoneDefault")');
}

console.log('\n' + (allKeysPresent && htmlAttrsOk ? '✅ All i18n tests passed!' : '❌ Some i18n tests failed'));
process.exit(allKeysPresent && htmlAttrsOk ? 0 : 1);