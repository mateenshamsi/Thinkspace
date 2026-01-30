Lighthouse Images 
![alt text](/public/LighthouseImage.png)

📘 Technical Overview
🔍 SEO Strategy
Meta Tags Implementation

The application uses Next.js App Router Metadata API to manage SEO-relevant meta tags at both layout and page levels.

Title & Meta Description

Defined per route to prevent duplication.

Written to reflect page intent and improve search relevance.

Open Graph Metadata

Enables rich previews on social platforms such as LinkedIn and Twitter.

Robots & Sitemap

robots.txt is configured to allow indexing of public routes while blocking internal and non-public paths.

sitemap.xml is auto-generated to improve crawl efficiency and indexing accuracy.

Semantic HTML Structure

The UI follows semantic HTML best practices to improve accessibility and SEO.

<header> for global navigation

<main> for core page content

<section> and <article> for content grouping

<footer> for shared site information

Heading hierarchy is strictly enforced:

Single <h1> per page

Logical use of <h2> and <h3> for subsections

Image Optimization

Images are optimized using the Next.js Image component.

Automatic responsive sizing

Lazy loading by default

WebP format where supported

Explicit width and height to avoid layout shifts

This ensures better Core Web Vitals and faster load times.

Performance Optimizations

Several performance-focused techniques were applied:

Use of React Server Components to reduce client-side JavaScript

Dynamic imports for code splitting

Minimal client-side hydration

Optimized font loading using next/font

🔎 Search and Filter Implementation

The search and filtering system is designed to be scalable and performant.

Client-side search with debounced input handling

Normalized data comparison for consistent results

Decoupled filtering logic to improve maintainability

This approach ensures responsiveness even as data size grows.

⚠️ Challenges Faced

Managing SEO effectively within the App Router architecture

Balancing interactivity with minimal client-side JavaScript

Designing performant filtering logic without overengineering

Optimizing images while maintaining visual quality

Each challenge was addressed through deliberate architectural decisions rather than quick fixes.

🛠 Technologies Used

Next.js (App Router)

React

TypeScript

Tailwind CSS

Next.js Metadata API

Next.js Image Optimization

Vercel