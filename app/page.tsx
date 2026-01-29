'use client';

import React, { useState } from 'react';
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import LatestArticles from "../components/sections/LatestArticles";
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
        <LatestArticles />
        
      </main>
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

