import { NextResponse } from "next/server";
import { getDocumentMarkdown, getPortfolioContent } from "@/lib/google-drive";
import { parsePoemsMarkdown } from "@/lib/helper";

export async function GET() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || "";
  const poemFileId = process.env.GOOGLE_DRIVE_POEMS_FILEID || "";

  const portfolioContent = await getPortfolioContent(folderId);
  const poemsRaw = await getDocumentMarkdown(poemFileId);
  const poems = parsePoemsMarkdown(poemsRaw || "").reverse();

  const quotesRaw = portfolioContent.filter((item) => item.title == "QUOTES")[0].content;
  const quotes = quotesRaw.split("\r\n").filter((q) => q !== "");

  return NextResponse.json({ poems, quotes, quotesRaw });
}
