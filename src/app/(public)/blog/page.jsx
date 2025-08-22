import Link from "next/link";
import { getAllBlogs } from "@/services/blogs/api";

export const dynamic = "force-static";

export default async function BlogsPage() {
  const posts = await getAllBlogs();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow">
            <Link
              href={`/blogs/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="mt-2">{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
