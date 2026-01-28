interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-pink px-3 py-1 text-xs font-medium text-neutral-dark-navy shadow-sm dark:bg-primary-purple dark:text-neutral-white">
      {category}
    </span>
  );
};

export default CategoryBadge;
