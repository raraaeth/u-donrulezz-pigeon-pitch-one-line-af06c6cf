import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch is a single line, written exactly as-is with no trailing newline.
const LINE =
  "CoopCoin: the only currency backed entirely by breadcrumbs and rooftop real estate.";

function main(): void {
  const outDir: string = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target: string = join(outDir, "entry.txt");
  writeFileSync(target, LINE, { encoding: "utf8" });

  // Verify after write: read the file back and assert it matches exactly.
  const written: string = readFileSync(target, { encoding: "utf8" });
  if (written !== LINE) {
    console.error(
      `Verification failed: ${target} does not match the expected line.`,
    );
    process.exit(1);
  }
}

main();
