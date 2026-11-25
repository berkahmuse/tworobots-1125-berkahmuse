// Two Robots in an Elevator — @berkahmuse entry.
// Writes one line of awkward robot elevator small talk to /output/entry.txt.
// Deterministic: no input, no randomness, no network — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line. Kept as a named constant so the text the judge reads is
// exactly this string — nothing is assembled, trimmed, or reformatted at
// runtime, so the output is byte-identical on every run.
const ENTRY_LINE =
  "So… do you also press your floor button twice just to feel in control, or is that my anxiety subroutine acting up again?";

// The competition gate (see RULES.txt): /output/entry.txt must be UTF-8
// text of 1 to 200 characters, not only white space.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validateEntry(line: string): void {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LENGTH}–${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  // The brief asks for a single line: a stray newline would make the file
  // two lines and break the "one line of small talk" shape, so fail loudly
  // instead of silently writing a malformed entry.
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line (no line breaks)");
  }
}

function main(): void {
  validateEntry(ENTRY_LINE);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ENTRY_LINE, "utf8");
}

main();
