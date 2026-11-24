// The Funniest AI Excuse — one-line make.fun entry.
//
// Writes the chosen excuse, exactly one line, to entry.txt inside the
// output directory: $MAKEFUN_OUTPUT_DIR when set, otherwise /output.
// No network, no child processes, absolute paths only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I outsourced the task to a smarter version of me, and he ghosted us both.";

// Gate safety: the entry must be exactly one non-blank line of 1-200 chars.
// Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  throw new Error(
    `Invalid entry: ${LINE.length} chars, must be one line of 1-200 chars.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
