'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-neutral-gray-light dark:bg-neutral-dark hover:bg-neutral-gray dark:hover:bg-neutral-gray-light transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-dark-navy dark:text-neutral-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0N10 16a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-dark-navy dark:text-neutral-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.456 4.763a.993.993 0 00-1.414 0l-.707.707a1 1 0 01-1.414 0l-.707-.707a.993.993 0 00-1.414 0l-.707.707a1 1 0 01-1.414 0L3.293 13.293A8 8 0 1017.293 2.707a.993.993 0 00-1.414 0l-.707.707a1 1 0 01-1.414 0l-.707-.707a.993.993 0 00-1.414 0l-.707.707a1 1 0 01-1.414 0L6.707 2.707A8 8 0 0017.293 13.293zM10 16a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
