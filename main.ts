import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const joke = "The office printer only ever jams when there's a deadline — clearly it has better time management than I do.";

const outDir = "/output";
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
writeFileSync("/output/entry.txt", joke, "utf-8");
console.log(joke);