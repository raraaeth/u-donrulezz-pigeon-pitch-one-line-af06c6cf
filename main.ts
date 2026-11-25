import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch is a single line, written exactly as-is with no trailing newline.
const LINE =
  "CoopCoin: the only currency backed entirely by breadcrumbs and rooftop real estate.";

function main(): void {
  const outDir: string = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target: string = join(outDir, "entry.txt");
  writeFileSync(target, LINE, { encoding: "utf8" });
}

main();
