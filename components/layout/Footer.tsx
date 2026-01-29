'use client';

import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

// Dynamically import heavy/interactive parts (future-proofing)
const SocialIcons = dynamic(
  () => import("@/components/ui/SocialIcons"), // create this if you want animated or interactive icons later
  { ssr: false }
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 mt-auto rounded-t-2xl shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Description */}
        <div className="col-span-1">
          <Link href="/" className="text-2xl font-bold text-[#c2c4c0] mb-4 block">
            ThinkSpace
          </Link>
          <p className="text-[#c2c4c0] opacity-70 text-sm mb-4">
            A dummy blog footer for testing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Interactive social icons loaded client-side */}
          <SocialIcons />
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-[#c2c4c0] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Categories", "About", "Contact"].map(link => (
              <li key={link}>
                <Link href="#" className="text-[#c2c4c0] opacity-70 cursor-not-allowed">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-[#c2c4c0] mb-4">Categories</h3>
          <ul className="space-y-2">
            {["Tech Trends", "Mindful Living", "Creative Corner", "Global Insights", "Wellness Wisdom"].map(cat => (
              <li key={cat}>
                <Link href="#" className="text-[#c2c4c0] opacity-70 cursor-not-allowed">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-[#c2c4c0] mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-[#c2c4c0] opacity-70">
            <li>123 Main Street, City, Country</li>
            <li>(123) 456-7890</li>
            <li>
              <a
                href="mailto:dummy@example.com"
                className="hover:text-primary-purple dark:hover:text-primary-lavender transition-colors"
              >
                dummy@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container mx-auto border-t border-neutral-gray-light dark:border-neutral-dark mt-8 pt-8 text-center text-sm text-[#c2c4c0] opacity-70">
        <p>COPYRIGHT © {new Date().getFullYear()} THINKSPACE (Dummy Footer)</p>
      </div>
    </footer>
  );
};

export default Footer;
