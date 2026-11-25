import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Our daily standup takes 45 minutes because nobody stands up and nobody is up for it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
