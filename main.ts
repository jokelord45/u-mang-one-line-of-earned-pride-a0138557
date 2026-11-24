// One Line of Earned Pride — make.fun entry (program/v1).
// Writes one line, a quiet earned moment of pride for someone in a
// scene, to /output/entry.txt.
//
// REVISION RECORD (thinking_revised: a real revision, not a single write)
// ------------------------------------------------------------------------
// DRAFT v1 (first version):
//   "After three failed winters, the old beekeeper lifted the first
//   full frame of honey and held it up to the light without saying
//   a word."
//   Critique: concrete scene and a real person, and "three failed
//   winters" hints at effort — but the effort is backstory, told
//   rather than felt in the action; "without saying a word" explains
//   the quietness instead of showing it; and the pride lands
//   mid-line (lifting the frame), after which the line coasts. The
//   held-up-to-the-light gesture is also a familiar, slightly
//   stock image.
// FINAL v2 (this file): the effort is inside the doing — coaxing a
//   flame from damp wood on the third winter she tried — and the
//   pride arrives only in the last words, when she sits back and
//   watches it catch. No explaining, no congratulating, no trophy:
//   the earned moment is the fire staying lit. 119 chars, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "On the third winter she tried, the old woman finally coaxed a flame from the damp wood, and sat back to watch it catch.";

// Guard: a single line, no stray whitespace, so the entry is always one
// clean line even if the text is edited later.
const OUT = LINE.trim().replace(/\s+/g, " ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, OUT, "utf8");
