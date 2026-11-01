import { poemType as PoemType } from "@/store/store";
import sanitizeHtml from "sanitize-html";

const isEmptyTag = (html: string) => html.replace(/<[^>]*>/g, "").trim() === "";

export function parsePoems(html: string): PoemType[] {
  // Split right before each <h1>, keeping the <h1> in its chunk
  const chunks = html.split(/(?=<h1[\s>])/).filter((c) => c.startsWith("<h1"));

  return chunks.flatMap((chunk) => {
    const title = chunk.match(/<h1[\s>][\s\S]*?<\/h1>/)?.[0];
    if (!title) return [];

    const rest = chunk.slice(chunk.indexOf(title) + title.length);
    const paragraphs = rest.match(/<p[\s>][\s\S]*?<\/p>/g) ?? [];

    // Drop trailing empty <p>s
    while (paragraphs.length && isEmptyTag(paragraphs[paragraphs.length - 1])) {
      paragraphs.pop();
    }
    if (!paragraphs.length) return [];

    const date = paragraphs.pop()!;

    // Drop the empty spacer <p> between the last stanza and the date
    while (paragraphs.length && isEmptyTag(paragraphs[paragraphs.length - 1])) {
      paragraphs.pop();
    }

    return [{ title, body: paragraphs.join(""), date }];
  });
}

export function cleanGoogleDocHtml(rawHtml: string) {
  return sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: false,
  });
}

const decodeEntities = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&"); // keep &amp; last

export function getParagraphTexts(html: string, keepEmpty = false): string[] {
  const texts: string[] = [];
  const pRe = /<p[\s>][\s\S]*?<\/p>/g;
  const spanRe = /<span[^>]*>([\s\S]*?)<\/span>/g;

  const paragraphs = html.match(pRe) ?? [];

  for (const p of paragraphs) {
    // Collect every span's text in this <p> and join into one string
    const text = Array.from(p.matchAll(spanRe))
      .map((m) => decodeEntities(m[1].replace(/<[^>]*>/g, "")))
      .join("");

    if (keepEmpty || text.trim() !== "") {
      texts.push(text);
    }
  }

  return texts;
}
