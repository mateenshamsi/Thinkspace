'use client';

import React, { useState } from 'react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing with:', email);
    // Here you would typically send the email to your backend or a newsletter service
    setEmail(''); // Clear the input after submission
  };

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-pink-purple rounded-2xl shadow-medium p-8 md:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-white mb-4">
          Stay in the Know
        </h2>
        <p className="text-lg text-neutral-white text-opacity-90 mb-8 max-w-2xl mx-auto">
          Get the latest product and management insights every week. Straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-grow rounded-full px-5 py-3 text-neutral-dark-navy bg-neutral-white border border-transparent focus:border-primary-purple focus:ring-2 focus:ring-primary-purple focus:outline-none dark:bg-neutral-dark dark:text-neutral-white dark:border-neutral-gray-light"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-dark-navy text-neutral-white font-semibold shadow-lg hover:bg-neutral-dark transition-colors duration-200 dark:bg-neutral-white dark:text-neutral-dark-navy dark:hover:bg-neutral-gray-light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
