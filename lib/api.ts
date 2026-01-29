export interface Blog {
  id: number;
  title: string;
  description: string;
  content_text: string;
  photo_url: string;
  category: string;
  content_html?: string;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export async function getBlogPosts(offset: number = 0, limit: number = 10): Promise<Blog[]> {
  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=${limit}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch blog posts: ${res.statusText}`);
  }
  const data = await res.json();
  return data.blogs.map((blog: any) => ({
    id: blog.id,
    title: blog.title,
    description: blog.description,
    content_text: blog.content_text,
    content_html: blog.content_html,
    photo_url: blog.photo_url,
    category: blog.category,
    created_at: new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    updated_at: blog.updated_at,
    user_id: blog.user_id,
  }));
}
