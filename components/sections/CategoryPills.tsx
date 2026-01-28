'use client';

import React, { useState } from 'react';

const categories = [
  'Web Development',
  'Artificial Intelligence',
  'Cloud Computing',
  'DevOps',
  'Cybersecurity',
  'Data Science',
  'Mobile Development',
  'Blockchain',
  'UI/UX Design',
];

const CategoryPills = () => {
  const [activeCategory, setActiveCategory] = useState('All'); // 'All' as a default or initial active state

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {/* 'All' category pill */}
        <button
          onClick={() => setActiveCategory('All')}
          className={`
            flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${activeCategory === 'All'
              ? 'bg-primary-purple text-neutral-white shadow-medium'
              : 'bg-neutral-off-white text-neutral-gray hover:bg-neutral-gray-light dark:bg-neutral-dark dark:text-neutral-gray-light dark:hover:bg-neutral-gray'}
          `}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeCategory === category
                ? 'bg-primary-purple text-neutral-white shadow-medium'
                : 'bg-neutral-off-white text-neutral-gray hover:bg-neutral-gray-light dark:bg-neutral-dark dark:text-neutral-gray-light dark:hover:bg-neutral-gray'}
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryPills;
