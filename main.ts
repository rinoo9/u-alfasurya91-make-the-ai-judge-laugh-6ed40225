import { mkdirSync, writeFileSync } from "node:fs";

// Entry writes one original one-line joke to /output/entry.txt.
const JOKE = "Our daily standup takes 45 minutes because nobody stands up and nobody is up for it.";
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE + "\n", "utf8");
}

main();
