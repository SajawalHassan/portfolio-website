import { NextResponse } from "next/server";
import { getDocumentMarkdown, getFolder } from "@/lib/google-drive";
import { parsePoemsMarkdown, parsePosts } from "@/lib/helper";

export async function GET() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || "";
  const essaysFolderId = process.env.GOOGLE_DRIVE_ESSAYS_FOLDER_ID || "";
  const poemFileId = process.env.GOOGLE_DRIVE_POEMS_FILEID || "";

  const poemsQuotes = await getFolder(folderId, "plain");
  const essaysRaw = await getFolder(essaysFolderId, "markdown");
  const essays = parsePosts(essaysRaw.flatMap((e) => e.content));

  const poemsRaw = await getDocumentMarkdown(poemFileId);
  const poems = parsePoemsMarkdown(poemsRaw || "").reverse();

  const quotesRaw = poemsQuotes.filter((item) => item.title == "QUOTES")[0].content;
  const quotes = quotesRaw.split("\r\n").filter((q) => q !== "");

  return NextResponse.json({ poems, quotes, quotesRaw, essays });
}
