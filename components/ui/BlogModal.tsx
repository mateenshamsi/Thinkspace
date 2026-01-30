import React, { useEffect } from "react";
import Image from "next/image";
import { X, Calendar, User } from "lucide-react";
import { Blog } from "@/lib/api";

interface BlogModalProps {
  blog: Blog | null;
  isOpen: boolean;
  onClose: () => void;
}



const formatDate = (date: string) => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "Invalid date";

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getDisplayDate = (createdAt: string, updatedAt?: string | null) => {
  if (!updatedAt) {
    return `Published on ${formatDate(createdAt)}`;
  }

  const created = new Date(createdAt);
  const updated = new Date(updatedAt);

  return updated > created
    ? `Updated on ${formatDate(updatedAt)}`
    : `Published on ${formatDate(createdAt)}`;
};



const BlogModal: React.FC<BlogModalProps> = ({ blog, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!blog || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative z-50 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-dark rounded-lg shadow-2xl overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
     
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 dark:bg-neutral-dark/80 hover:bg-white dark:hover:bg-neutral-dark-navy transition shadow"
        >
          <X className="h-5 w-5 text-gray-700 " />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
        
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={blog.photo_url}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
           
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                {blog.category}
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {getDisplayDate(blog.created_at, blog.updated_at)}
              </span>

              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                User {blog.user_id}
              </span>
            </div>

          
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark-navy  mb-4">
              {blog.title}
            </h1>

          
            <p className="text-lg text-gray-700 mb-8">
              {blog.description}
            </p>
            {blog.content_html && (
              <div
                className="
                  text-gray-700  leading-relaxed

                  [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4
                  [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3
                  [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2

                  [&_p]:mb-4
                  [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4
                  [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4
                  [&_li]:mb-1

                  [&_strong]:font-semibold
                  [&_a]:text-primary-purple [&_a]:underline
                "
                dangerouslySetInnerHTML={{ __html: blog.content_html }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
