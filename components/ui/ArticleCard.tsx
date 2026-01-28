import Image from "next/image";
import CategoryBadge from "./CategoryBadge";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    author: string;
    date: string;
  };
  onClick?: (article: ArticleCardProps['article']) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div
      className="group relative block overflow-hidden rounded-xl bg-neutral-white shadow-soft transition-all duration-300 hover:shadow-medium dark:bg-neutral-dark dark:bg-opacity-50 cursor-pointer"
      onClick={() => onClick?.(article)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
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
