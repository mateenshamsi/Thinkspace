'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import ArticleCard from "../ui/ArticleCard";
import BlogModal from '@/components/ui/BlogModal';
import { getBlogPosts, Blog } from "../../lib/api";
import { useSearch } from '@/contexts/SearchContext';

const LatestArticles: React.FC = () => {
  const [articles, setArticles] = useState<Blog[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchQuery, selectedCategory, setSelectedCategory,setSearchQuery } = useSearch();

  const handleArticleClick = (article: Blog) => {
    setSelectedBlog(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

 
  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const data = await getBlogPosts(0, 10);
        setArticles(data);
        setFilteredArticles(data);
        
       
        const uniqueCategories = Array.from(
          new Set(data.map((article) => article.category))
        ).sort();
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
        setError("Failed to load articles. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

 
  useEffect(() => {
    let filtered = articles;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((article) => {
        const titleMatch = article.title.toLowerCase().includes(query);
        const descriptionMatch = article.description.toLowerCase().includes(query);
        const contentMatch = article.content_text.toLowerCase().includes(query);
        
        return titleMatch || descriptionMatch || contentMatch;
      });
    }

    setFilteredArticles(filtered);
  }, [searchQuery, selectedCategory, articles]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return (
      <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-purple mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-neutral-dark-navy dark:text-neutral-white">
          Latest Articles
        </h2>
      
      </div>

    
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
    
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#d9e6ca] cursor-pointer shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Categories
          </button>

     
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                selectedCategory === category
                  ? 'bg-[#d9e6ca]  shadow-md cursor-pointer'
                  : 'bg-gray-100 cursor-pointer dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

     
      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        {searchQuery || selectedCategory !== 'all' ? (
          <p>
            Found <strong>{filteredArticles.length}</strong> article{filteredArticles.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        ) : (
          <p>Showing <strong>{filteredArticles.length}</strong> articles</p>
        )}
      </div>
    {filteredArticles.length === 0 && (searchQuery || selectedCategory !== 'all') && (
        <div className="text-center py-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 inline-block mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No results found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We couldn't find any articles
            {selectedCategory !== 'all' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
          <div className="flex gap-3 justify-center">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary-purple hover:text-primary-pink dark:text-primary-lavender dark:hover:text-primary-pink font-medium"
              >
                Clear search
              </button>
            )}
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-primary-purple hover:text-primary-pink dark:text-primary-lavender dark:hover:text-primary-pink font-medium"
              >
                Reset category
              </button>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
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
            onClick={() => handleArticleClick(article)}
          />
        ))}
      </div>

      <BlogModal 
        blog={selectedBlog}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default LatestArticles;