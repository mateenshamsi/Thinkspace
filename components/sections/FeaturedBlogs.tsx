import Link from "next/link";
import ArticleCard from "../ui/ArticleCard";
import { getBlogPosts, Blog } from "../../lib/api";

interface FeaturedBlogsProps {
  onArticleClick: (article: Blog) => void;
}

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = async ({ onArticleClick }) => {
  let featuredArticles: Blog[] = [];
  try {
    // Fetching 3 featured articles, starting from offset 6 to get different ones
    featuredArticles = await getBlogPosts(6, 3);
  } catch (error) {
    console.error("Failed to fetch featured articles:", error);
    // Handle error state
  }

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-neutral-dark-navy dark:text-neutral-white">
          Featured Blogs
        </h2>
        <Link href="/featured" className="text-primary-purple hover:text-primary-pink dark:text-primary-lavender dark:hover:text-primary-pink transition-colors font-medium">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {featuredArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={{
              id: String(article.id),
              title: article.title,
              description: article.description,
              image: article.photo_url,
              category: article.category,
              author: `User ${article.user_id}`,
              date: article.created_at,
            }}
            onClick={() => onArticleClick(article)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
