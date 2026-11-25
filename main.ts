// Two Robots in an Elevator — @berkahmuse entry.
// Writes one line of awkward robot elevator small talk to /output/entry.txt.
// Deterministic: no input, no randomness, no network — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "So… do you also press your floor button twice just to feel in control, or is that my anxiety subroutine acting up again?";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
