import { NextResponse } from "next/server";
import { getPortfolioContent } from "@/lib/google-drive";
import { getParagraphTexts, parsePoems } from "@/lib/helper";

export async function GET() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || "";
  const items = await getPortfolioContent(folderId);

  const quotesRaw = items.filter((item) => item.title == "QUOTES")[0].content;
  const poemsRaw = items.filter((item) => item.title == "POEMS")[0].content;

  const poems = parsePoems(poemsRaw);
  const quotes = getParagraphTexts(quotesRaw);

  return NextResponse.json({ poems, quotes, quotesRaw });
}
