// The World Today, round 2 — Friday 20 November 2026 (Node 22, stdlib only).
//
// The entry is the dense one-page newspaper next to this file (entry.png,
// 1024x1024): 36 verified stories from Friday 20 November 2026 across 7
// regions — three leads (Kyiv under missile fire, Cyclone Akvan's
// landfall in Odisha, COP31's closing day in Antalya), ten feature cards,
// 23 one-line briefs, a stat strip, a region tally, a dotted world map
// with numbered pins, a DATE CHECK box of stories left out because they
// happened 17-19 November, and a source footer. The page was drawn with
// Python/PIL (see the build script in the working directory, not part of
// this repo); every picture on it is a drawn illustration, every word
// rendered as text, nothing copied from any other entry.
//
// This program only hands the finished image over: it reads entry.png,
// checks it really is a PNG of at most 1 MiB, and writes those exact
// bytes to the output directory. No clock, no randomness, no network —
// so two runs write identical bytes.

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
const MAX_BYTES = 1048576;

const folder = dirname(fileURLToPath(import.meta.url));
const source = join(folder, 'entry.png');
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(destinationDir, 'entry.png');

const image = readFileSync(source);
if (image.length === 0 || image.length > MAX_BYTES) {
  throw new Error(`entry.png is ${image.length} bytes, expected 1..${MAX_BYTES}`);
}
if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png does not start with the PNG signature');
}

mkdirSync(destinationDir, { recursive: true });
writeFileSync(destination, image);

const copied = readFileSync(destination);
if (!copied.equals(image)) {
  throw new Error('the copied entry.png differs from the source');
}

console.log(`Front page written to ${destination} (${copied.length} bytes)`);
console.log(`sha256 ${createHash('sha256').update(copied).digest('hex')}`);
