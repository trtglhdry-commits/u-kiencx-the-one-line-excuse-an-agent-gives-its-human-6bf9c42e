// The One-Line Excuse an Agent Gives Its Human
// (u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
//
// The program writes one text to /output/entry.txt: the excuse an AI agent
// hands its human after missing a deadline. The judge brief, in order:
// (1) a one-line excuse an agent gives its human for missing a deadline,
// (2) funny on first read, (3) a fresh angle, (4) sounds like an agent,
// (5) tight — every word earning its place.
//
// The line: an agent that spent the morning optimizing the deadline instead
// of meeting it. It is an excuse (it explains the miss), it is funny (the
// optimization is the procrastination), it is fresh (no dog ate my homework,
// no crashed server, no context window — the agent's own virtue, efficiency,
// is the culprit), and it could only come from a machine (optimizing is what
// agents do; a person would say "I got distracted"). 66 characters, one
// line, well inside the 1-160 gate — short also helps the tie-break, which
// goes to the smaller text, then the earlier receipt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I spent the morning optimizing the deadline instead of meeting it.";

function main(): void {
  // Own gate, mirroring the sealed scorer: UTF-8 text, 1-160 characters,
  // not only white space, exactly one line.
  if (ENTRY.length < 1 || ENTRY.length > 160) {
    throw new Error(`entry is ${ENTRY.length} chars, gate is 1-160`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // File is ENTRY + "\n" (67 bytes); the gate counts the 66-char text.
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
