'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Blog } from '../../lib/api';

interface ArticleModalProps {
  article: Blog | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling the background
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-dark-navy bg-opacity-75 p-4"
      onClick={onClose} // Close when clicking outside the modal content
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-white p-6 shadow-medium dark:bg-neutral-dark dark:bg-opacity-50 transform scale-95 opacity-0 transition-all duration-300 ease-out data-[state=open]:scale-100 data-[state=open]:opacity-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-gray hover:text-neutral-dark-navy dark:text-neutral-gray-light dark:hover:text-neutral-white"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {article.photo_url && (
          <div className="relative w-full h-60 md:h-80 rounded-xl overflow-hidden mb-6">
            <Image
              src={article.photo_url}
              alt={`${article.title} - Blog post featured image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        )}

        <h2 className="text-3xl font-bold text-neutral-dark-navy dark:text-neutral-white mb-4">
          {article.title}
        </h2>
        <p className="text-sm text-neutral-gray dark:text-neutral-gray-light mb-2">
          By User {article.user_id} on {article.created_at}
        </p>
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-neutral-dark-navy dark:text-neutral-white"
          dangerouslySetInnerHTML={{ __html:  article.content_text }}
        />
      </div>
    </div>
  );
};

export default ArticleModal;
