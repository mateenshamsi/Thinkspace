import Image from "next/image";
import CategoryBadge from "./CategoryBadge";

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

interface ArticleCardProps {
  article: Article;
  onClick?: (article: Article) => void;
  priority?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onClick,
  priority = false,
}) => {
  return (
    <div
      className="group relative block overflow-hidden rounded-xl bg-neutral-white shadow-soft transition-all duration-300 hover:shadow-medium dark:bg-neutral-dark dark:bg-opacity-50 cursor-pointer"
      onClick={() => onClick?.(article)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={article.image}
          alt={`${article.title} - Article cover image`}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />

        <div className="absolute top-3 left-3 z-10">
          <CategoryBadge category={article.category} />
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-neutral-dark-navy dark:text-neutral-white group-hover:text-primary-purple dark:group-hover:text-primary-lavender transition-colors">
          {article.title}
        </h3>

        <p className="mb-4 text-neutral-gray dark:text-neutral-gray-light line-clamp-2">
          {article.description}
        </p>

        <div className="flex items-center justify-between text-sm text-neutral-gray dark:text-neutral-gray-light">
          <span>By {article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
