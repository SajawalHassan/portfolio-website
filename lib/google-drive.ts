"server only";

import { parsePoemsMarkdown } from "@/lib/helper";
import { google } from "googleapis";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  // Replace escaped newlines
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const drive = google.drive({ version: "v3", auth });

export async function getFolder(folderId: string, type: "plain" | "markdown") {
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: "files(id, name, mimeType, modifiedTime)",
    });

    const files = response.data.files || [];

    const contentPromises = files.map(async (file) => {
      let textContent = "";

      if (file.mimeType === "application/vnd.google-apps.document") {
        const docExport = await drive.files.export({
          fileId: file.id!,
          mimeType: "text/" + type,
        });

        textContent = docExport.data as string;
      }

      return {
        id: file.id,
        title: file.name,
        lastModified: file.modifiedTime,
        content: textContent,
      };
    });

    const portfolioItems = await Promise.all(contentPromises);
    return portfolioItems;
  } catch (error) {
    console.error("Error fetching Google Drive content:", error);
    return [];
  }
}

export async function getDocumentMarkdown(fileId: string): Promise<string | null> {
  try {
    const response = await drive.files.export({ fileId, mimeType: "text/markdown" }, { responseType: "text" });

    return response.data as string;
  } catch (error) {
    console.error(`Error exporting document ${fileId} as markdown:`, error);
    return null;
  }
}
