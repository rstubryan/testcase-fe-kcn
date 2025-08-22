import { API_BLOG_URL } from "@/lib/constant";
import { fetchAPI } from "@/lib/fetcher";
import { slugify } from "@/lib/utils";

export async function getAllBlogs(limit = 100) {
  const url = `${API_BLOG_URL}?_limit=${limit}`;

  const posts = await fetchAPI(url, "Failed to fetch blogs", {
    cache: "force-cache",
  });

  return posts.map((post) => ({
    ...post,
    slug: slugify(post.title),
  }));
}
