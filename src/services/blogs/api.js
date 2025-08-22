import { API_BLOG_URL, API_BLOG_LIMIT } from "@/lib/constant";
import { fetchAPI } from "@/lib/fetcher";
import { slugify } from "@/lib/utils";

export async function getAllBlogs() {
  const url = `${API_BLOG_URL}?_limit=${API_BLOG_LIMIT}`;
  const posts = await fetchAPI(url, "Failed to fetch blogs");

  return posts.map((post) => ({
    ...post,
    slug: slugify(post.title),
  }));
}

export async function getBlogById(id) {
  const url = `${API_BLOG_URL}/${id}`;
  const post = await fetchAPI(url, `Failed to fetch blog with id: ${id}`);

  return {
    ...post,
    slug: slugify(post.title),
  };
}
