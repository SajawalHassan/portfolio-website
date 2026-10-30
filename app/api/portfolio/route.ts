import { NextResponse } from "next/server";
import { getPortfolioContent } from "@/lib/google-drive";
import { parsePoems } from "@/lib/helper";

export async function GET() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID!;

  const items = await getPortfolioContent(process?.env?.GOOGLE_DRIVE_FOLDER_ID || "");

  const poems = parsePoems(items.filter((item) => item.title == "POEMS")[0].content);
  const quotes = items.filter((item) => item.title == "QUOTES")[0].content.split("\n");

  return NextResponse.json({ poems, quotes });
}
