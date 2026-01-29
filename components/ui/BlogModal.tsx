import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Calendar, User } from 'lucide-react';
import { Blog } from '@/lib/api';

interface BlogModalProps {
  blog: Blog | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ blog, isOpen, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Format content_text to match content_html structure
  const formatTextContent = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // Check if line looks like a heading (shorter, no periods at end, capitalized)
      const isHeading = 
        trimmedLine.length > 0 &&
        trimmedLine.length < 80 &&
        !trimmedLine.endsWith('.') &&
        !trimmedLine.endsWith(',') &&
        trimmedLine[0] === trimmedLine[0].toUpperCase() &&
        // Check if next line exists and is a paragraph (contains periods)
        (index < lines.length - 1 && lines[index + 1].includes('.'));
      
      if (isHeading) {
        return (
          <h2 
            key={index} 
            className="text-xl font-semibold mb-3 mt-6 first:mt-0 text-gray-900 dark:text-gray-100"
          >
            {trimmedLine}
          </h2>
        );
      }
      
      return (
        <p 
          key={index} 
          className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          {trimmedLine}
        </p>
      );
    });
  };

  if (!blog || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative z-50 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-dark rounded-lg shadow-2xl overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 dark:bg-neutral-dark/80 hover:bg-white dark:hover:bg-neutral-dark-navy transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header Image */}
          <div className="relative w-full h-64 md:h-80 bg-gray-200 dark:bg-neutral-dark-navy">
            <Image
              src={blog.photo_url}
              alt={blog.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category and Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                {blog.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blog.created_at}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                User {blog.user_id}
              </span>
            </div>

            {/* Title */}
            <h2
              id="modal-title"
              className="text-3xl md:text-4xl font-bold text-neutral-dark-navy dark:text-neutral-white mb-4 leading-tight"
            >
              {blog.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {blog.description}
            </p>

            {/* Blog Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {blog.content_html ? (
                <div
                  dangerouslySetInnerHTML={{ __html: blog.content_html }}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed [&>p]:mb-4 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-6 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-6 [&>h3]:text-lg [&>h3]:font-medium [&>h3]:mb-2 [&>h3]:mt-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-4"
                />
              ) : blog.content_text ? (
                <div className="text-content">
                  {formatTextContent(blog.content_text)}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;