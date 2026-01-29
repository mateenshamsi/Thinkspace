'use client';

import Link from "next/link";

import SearchInput from "../ui/SearchInput";
import { useSearch } from "@/contexts/SearchContext";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-gray-light bg-neutral-white/80 backdrop-blur-sm dark:border-neutral-dark dark:bg-neutral-dark-navy/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center text-2xl font-bold text-neutral-dark-navy dark:text-neutral-off-white">
          ThinkSpace
        </Link>

        <div className="flex items-center space-x-4">
          <SearchInput 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search articles..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;