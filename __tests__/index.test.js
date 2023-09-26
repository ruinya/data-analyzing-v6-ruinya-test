// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/stars.js __fixtures__/stars1.csv',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/stars.js __fixtures__/stars2.csv',
  // @ts-ignore
  options,
);
const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Count: 18');
  assert.strictEqual(rows2[0], 'Count: 14');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Galaxies: Андромеда, Журавль, Млечный путь');
  assert.strictEqual(rows2[1], 'Galaxies: Андромеда, Млечный путь');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Farest from Earth: 2500000 light years, closest to Earth: 4.24 light years');
  assert.strictEqual(rows2[2], 'Farest from Earth: 2500000 light years, closest to Earth: 4.37 light years');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'Closest to Earth: Proxima Centauri in Млечный путь galaxy');
  assert.strictEqual(rows2[3], 'Closest to Earth: Alpha Centauri B in Млечный путь galaxy');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Star with largest radius from heaviest galaxy is Andromeda XIX');
  assert.strictEqual(rows2[4], 'Star with largest radius from heaviest galaxy is Betelgeuse');
});
