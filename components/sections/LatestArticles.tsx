import Link from "next/link";
import ArticleCard from "../ui/ArticleCard";
import { getBlogPosts, Blog } from "../../lib/api";

interface LatestArticlesProps {
  onArticleClick: (article: Blog) => void;
}

const LatestArticles: React.FC<LatestArticlesProps> = async ({ onArticleClick }) => {
  let articles: Blog[] = [];
  try {
    articles = await getBlogPosts(0, 6); // Fetching 6 latest articles
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    // Handle error state, perhaps display a message to the user
  }

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-neutral-dark-navy dark:text-neutral-white">
          Latest Articles
        </h2>
        <Link href="/articles" className="text-primary-purple hover:text-primary-pink dark:text-primary-lavender dark:hover:text-primary-pink transition-colors font-medium">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
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

export default LatestArticles;
