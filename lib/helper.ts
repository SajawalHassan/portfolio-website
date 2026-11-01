import { poemType as PoemType } from "@/store/store";

const unescapeMd = (s: string) => s.replace(/\\(.)/g, "$1");

export function parsePoemsMarkdown(md: string): PoemType[] {
  const chunks = md
    .replace(/\r\n/g, "\n")
    .split(/^(?=# )/m)
    .filter((c) => c.startsWith("# "));

  return chunks.flatMap((chunk) => {
    const [titleLine, ...rest] = chunk.split("\n");

    const lines = rest.map((l) => l.trim()).filter((l) => !/^(-{3,}|\*{3,}|_{3,})$/.test(l));

    while (lines.length && !lines[lines.length - 1]) lines.pop();
    if (!lines.length) return [];
    const date = lines.pop()!;

    while (lines.length && !lines[lines.length - 1]) lines.pop();
    while (lines.length && !lines[0]) lines.shift();

    const body = unescapeMd(lines.join("\n").replace(/\n{3,}/g, "\n\n"));

    return [
      {
        title: unescapeMd(titleLine.replace(/^#\s+/, "").trim()),
        body,
        date: unescapeMd(date),
      },
    ];
  });
}
