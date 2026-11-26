import { mkdirSync, writeFileSync } from "node:fs";

// Entry writes one original one-line joke to /output/entry.txt.
const JOKE = "I automated my job and now I spend all day watching the automation do my job badly.";
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE + "\n", "utf8");
}

main();
