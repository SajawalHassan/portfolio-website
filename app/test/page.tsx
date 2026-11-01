import { getDocumentMarkdown } from "@/lib/google-drive";

// Revalidate cache every hour (Incremental Static Regeneration)
export const revalidate = 3600;

export default async function BlogsPage() {
  const posts = await getDocumentMarkdown(process?.env?.GOOGLE_DRIVE_POEMS_FILEID || "");
  console.log(posts);

  return (
    <main className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Writings & Poems</h1>

      <div className="space-y-8 react-markdown">
        {/* {poems.map((post, i) => {
          return (
            <article key={i} className="border-b pb-6">
              <div className="google-doc-content " dangerouslySetInnerHTML={{ __html: poems[i].title }} />
              <div className="google-doc-content " dangerouslySetInnerHTML={{ __html: poems[i].body }} />
              <div className="google-doc-content " dangerouslySetInnerHTML={{ __html: poems[i].date }} />
            </article>
          );
        })} */}
      </div>
    </main>
  );
}
