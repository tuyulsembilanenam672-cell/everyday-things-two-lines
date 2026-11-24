// Everyday Things, Two Lines, Longer Run.
// Entry program: writes exactly two lines to /output/entry.txt.
// Line 1 explains a toaster to a 10-year-old through one analogy;
// line 2 says honestly what that analogy maps and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A toaster is a tiny elevator for bread: it rides down pale and soft, and pops back up brown and crunchy.";
const LINE_2 =
  "The elevator fits because the bread really does sink down and pop back up, but it leaves out the heat \u2014 a real elevator carries people, it never cooks them.";

const entry = `${LINE_1}\n${LINE_2}`;

// Runtime gate: the sealed scorer wants UTF-8 text of 1-400
// characters, not only whitespace, in exactly two lines.
const lines = entry.split("\n");
if (lines.length !== 2) throw new Error(`expected 2 lines, got ${lines.length}`);
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry is ${entry.length} characters, must be 1-400`);
}
if (!/\S/.test(entry)) throw new Error("entry is only whitespace");
for (const line of lines) {
  if (!/\S/.test(line)) throw new Error("a line is blank");
  if (line !== line.trim()) throw new Error("a line has leading or trailing space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} characters, 2 lines)`);
