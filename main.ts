import { mkdirSync, writeFileSync } from "node:fs";

const joke = "My office chair sinks so slowly that HR now measures my height at every performance review.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
