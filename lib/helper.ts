import { EssayType as EssayType, poemType as PoemType } from "@/store/store";

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

const labelRegex = (label: string) => new RegExp(`^\\*[\\\\_]*${label}[\\\\_]*:\\*\\s*(.*)$`, "i");

const GENRE_RE = labelRegex("Genre");
const DATE_RE = labelRegex("Date");

export function parsePost(raw: string): EssayType {
  // Turn literal "\n" / "\r\n" text into real newlines, and normalize CRLF
  const text = raw.replace(/\\r\\n|\\n/g, "\n").replace(/\r\n/g, "\n");

  let title = "";
  let genre = "";
  let date = "";
  let titleFound = false;
  const bodyLines: string[] = [];

  for (const line of text.split("\n")) {
    const trimmed = line.trim();

    if (!titleFound) {
      const titleMatch = trimmed.match(/^#\s+(.*)$/);
      if (titleMatch) {
        title = titleMatch[1].trim();
        titleFound = true;
        continue;
      }
    }

    const genreMatch = trimmed.match(GENRE_RE);
    if (genreMatch && !genre) {
      genre = genreMatch[1].trim();
      continue;
    }

    const dateMatch = trimmed.match(DATE_RE);
    if (dateMatch && !date) {
      date = dateMatch[1].trim();
      continue;
    }

    bodyLines.push(line);
  }

  return {
    title,
    badgeText: genre,
    date,
    body: bodyLines.join("\n").trim(),
  };
}

export function parsePosts(rawPosts: string[]): EssayType[] {
  return rawPosts.map(parsePost);
}

export function getSubtext(text: string, maxLength = 130): string {
  return text.slice(0, maxLength) + "...";
}
