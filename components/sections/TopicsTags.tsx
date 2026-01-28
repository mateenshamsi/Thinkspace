'use client';

import React, { useState } from 'react';

const topics = [
  'Frontend',
  'Backend',
  'DevOps',
  'Cloud',
  'Databases',
  'AI/ML',
  'Mobile',
  'Security',
  'Testing',
  'Architecture',
];

const TopicsTags = () => {
  const [activeTopic, setActiveTopic] = useState('All');

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-neutral-dark-navy dark:text-neutral-white mb-8">
        Topics That Match For You
      </h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTopic('All')}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${activeTopic === 'All'
              ? 'bg-primary-purple text-neutral-white shadow-medium'
              : 'bg-neutral-off-white text-neutral-gray hover:bg-neutral-gray-light dark:bg-neutral-dark dark:text-neutral-gray-light dark:hover:bg-neutral-gray'}
          `}
        >
          All
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeTopic === topic
                ? 'bg-primary-purple text-neutral-white shadow-medium'
                : 'bg-neutral-off-white text-neutral-gray hover:bg-neutral-gray-light dark:bg-neutral-dark dark:text-neutral-gray-light dark:hover:bg-neutral-gray'}
            `}
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TopicsTags;
