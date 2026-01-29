'use client';

import SearchInput from "../ui/SearchInput";
import { useSearch } from "@/contexts/SearchContext";

const HeroSection = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 text-center bg-gradient-to-b from-[#d9e6ca] via-[#e6e7e6] to-[#fcfcfc]">
      {/* Gradient Overlay with Blur / Glassmorphism
      <div className="absolute inset-0 z-0 backdrop-blur-md bg-neutral-white/10 dark:bg-neutral-dark-navy/10"></div> */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-medium text-neutral-dark-navy dark:text-neutral-white mb-4 animate-fade-in-up">
          Insights, Ideas & Innovations
        </h1>
        <p className="text-lg sm:text-xl text-neutral-gray dark:text-neutral-gray-light max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
          Explore expert articles, tech trends, and practical tips to keep your business ahead of the curve 
        </p>
        <div className="max-w-md mx-auto animate-fade-in-up delay-200">
          <SearchInput 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search articles..."
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;