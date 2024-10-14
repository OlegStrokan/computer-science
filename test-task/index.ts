import { promises as fs } from "fs";
import { performance } from "perf_hooks";

async function buildIndex(
  filePath: string,
  indexPath: string
): Promise<number[]> {
  const file = await fs.open(filePath, "r");
  const index: number[] = [];
  let offset = 0;

  const fileStream = file.createReadStream({ encoding: "utf-8" });
  for await (const chunk of fileStream) {
    const lines = chunk.split("\n");
    for (const line of lines) {
      index.push(offset);
      offset += Buffer.byteLength(line, "utf-8") + 1;
    }
  }

  await file.close();
  await fs.writeFile(indexPath, index.join("\n"), "utf-8");
  return index;
}

async function loadIndex(indexPath: string): Promise<number[]> {
  const data = await fs.readFile(indexPath, "utf-8");
  return data.split("\n").map(Number);
}

export async function getLineByOffset(
  filePath: string,
  offset: number
): Promise<string> {
  const file = await fs.open(filePath, "r");
  const buffer = Buffer.alloc(1000);
  await file.read(buffer, 0, buffer.length, offset);
  await file.close();
  return buffer.toString("utf-8").split("\n")[0];
}

async function printRandomLine(filePath: string, lineNumber: number) {
  const indexPath = `${filePath}.idx`;

  let index: number[];
  try {
    index = await loadIndex(indexPath);
  } catch (e) {
    console.log("Building index...");
    index = await buildIndex(filePath, indexPath);
    console.log("Index built successfully.");
  }

  if (lineNumber >= index.length || lineNumber < 0) {
    console.error("Line number out of range.");
    return;
  }

  const offset = index[lineNumber];
  const line = await getLineByOffset(filePath, offset);
  console.log(line);
}

const [, , filePath, lineStr] = process.argv;
const lineNumber = parseInt(lineStr, 10);

if (!filePath || isNaN(lineNumber)) {
  console.error("Usage: bun run index.ts <filePath> <lineNumber>");
  process.exit(1);
}

// Benchmark (for displaying data only). I left it intentionally
async function main() {
  const start = performance.now();

  await printRandomLine(filePath, lineNumber);

  const end = performance.now();
  console.log(`Execution time: ${(end - start).toFixed(2)} milliseconds`);
}

main().catch((err) => {
  console.error("Error:", err);
});
