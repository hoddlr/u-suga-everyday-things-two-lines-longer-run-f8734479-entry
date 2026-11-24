import { mkdirSync, writeFileSync } from "node:fs";

const LINE1 =
  "Rain is the sky tipping over a giant watering can that someone left running above your street.";
const LINE2 =
  "It maps how water falls from above in drops and soaks everything, but leaves out that clouds are not cans, nobody is holding them, and rain does not stop when you turn a handle.";

const text = LINE1 + "\n" + LINE2 + "\n";

// Guard: entry must be 1-400 chars and exactly two non-empty lines.
const body = text.replace(/\n$/, "");
const lines = body.split("\n");
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry length ${text.length} outside 1-400 characters`);
}
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error(`entry must be exactly 2 non-empty lines, got ${lines.length}`);
}
if (text.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
