import { getFolder } from "@/lib/google-drive";
import { convertTextToUrl } from "@/lib/helper";
import type { MetadataRoute } from "next";

const baseUrl = "https://sajawalhassan.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/talk-to-me",
    "/computers",
    "/computers/web",
    "/computers/linux",
    "/computers/data-science",
    "/computers/random",
    "/pretentious-gibberish",
    "/pretentious-gibberish/essays",
    "/pretentious-gibberish/poems",
    "/pretentious-gibberish/quotes",
  ];

  const essaysFolderId = process.env.GOOGLE_DRIVE_ESSAYS_FOLDER_ID || "";
  const essays = await getFolder(essaysFolderId, "markdown");

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
    })),
    ...essays.map((essay) => ({
      url: `${baseUrl}/pretentious-gibberish/essays/${convertTextToUrl(essay.title as string)}`,
      lastModified: new Date(essay.lastModified as string),
    })),
  ];
}
