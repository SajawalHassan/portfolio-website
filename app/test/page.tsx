import { parseSections } from "@/lib/helper";
import { getPortfolioContent } from "@/lib/google-drive";

// Revalidate cache every hour (Incremental Static Regeneration)
export const revalidate = 3600;

export default async function BlogsPage() {
  const posts = await getPortfolioContent(process?.env?.GOOGLE_DRIVE_FOLDER_ID || "");
  const poems = parseSections(posts.filter((post) => post.title == "POEMS")[0].content);
  const quotes = posts.filter((post) => post.title == "QUOTES")[0].content.split("\n");

  if (!posts) return <div>loading..</div>;

  return (
    <main className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Writings & Poems</h1>

      <div className="space-y-8">
        {quotes.map((quote) => (
          <div className="google-doc-content" dangerouslySetInnerHTML={{ __html: quote }} />
        ))}
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
