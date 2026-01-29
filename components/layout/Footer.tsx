import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 mt-auto rounded-t-2xl shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div className="col-span-1">
          <Link href="/" className="text-2xl font-bold text-[#c2c4c0] mb-4 block">
            ThinkSpace
          </Link>
          <p className="text-[#c2c4c0] opacity-70 text-sm mb-4">
            ThinkSpace is a vibrant blog website where conversations come alive. Our platform fosters meaningful discussions, sharing ideas, and inspiring stories.
          </p>
          {/* Social Icons (Placeholder) */}
          <div className="flex space-x-4 text-neutral-gray dark:text-neutral-gray-light">
            {/* Replace with actual social icons/links */}
            <span className="opacity-70"><Facebook color="#c2c4c0" /></span>
<span className="opacity-70"><Linkedin color="#c2c4c0" /></span>
<span className="opacity-70"><Instagram color="#c2c4c0" /></span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-[#c2c4c0] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-[#c2c4c0] opacity-70">Home</Link></li>
            <li><Link href="/categories" className="text-[#c2c4c0] opacity-70">Categories</Link></li>
            <li><Link href="/about" className="text-[#c2c4c0] opacity-70">About</Link></li>
            <li><Link href="/contact" className="text-[#c2c4c0] opacity-70">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-[#c2c4c0] mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><Link href="/category/tech-trends" className="text-[#c2c4c0] opacity-70">Tech Trends</Link></li>
            <li><Link href="/category/mindful-living" className="text-[#c2c4c0] opacity-70">Mindful Living</Link></li>
            <li><Link href="/category/creative-corner" className="text-[#c2c4c0] opacity-70">Creative Corner</Link></li>
            <li><Link href="/category/global-insights" className="text-[#c2c4c0] opacity-70">Global Insights</Link></li>
            <li><Link href="/category/wellness-wisdom" className="text-[#c2c4c0] opacity-70">Wellness Wisdom</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-[#c2c4c0] mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-[#c2c4c0] opacity-70">
            <li>970 Ersel Street, Carrollton, TX 75006</li>
            <li>(814) 413-9191</li>
            <li><a href="mailto:eddie_lake@gmail.com" className="hover:text-primary-purple dark:hover:text-primary-lavender transition-colors">eddie_lake@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto border-t border-neutral-gray-light dark:border-neutral-dark mt-8 pt-8 text-center text-sm text-[#c2c4c0] opacity-70">
        <p>COPYRIGHT © {new Date().getFullYear()} WE TALK</p>
      </div>
    </footer>
  );
};

export default Footer;
