'use client';

import React, { useState } from 'react';
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import CategoryPills from "../components/sections/CategoryPills";
import LatestArticles from "../components/sections/LatestArticles";
import FeaturedBlogs from "../components/sections/FeaturedBlogs";
import TopicsTags from "../components/sections/TopicsTags";
import NewsletterCTA from "../components/sections/NewsletterCTA";
import ArticleModal from "../components/ui/ArticleModal";
import { Blog } from "../lib/api";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);

  const handleArticleClick = (article: Blog) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* <CategoryPills /> */}
        <LatestArticles onArticleClick={handleArticleClick} />
        {/* <FeaturedBlogs onArticleClick={handleArticleClick} />
        <TopicsTags /> */}
        {/* <NewsletterCTA /> */}
      </main>
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

