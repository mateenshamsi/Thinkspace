Lighthouse Images 
![alt text](/public/LighthouseImage.png)

SEO Strategy
Meta Tags Implemented & Rationale

The application uses Next.js App Router metadata API to define SEO-critical meta tags at the layout and page level.

Title & Description

Implemented per route to avoid duplicate metadata.

Optimized for clarity and keyword relevance rather than stuffing.

Open Graph (OG) Tags

Added to ensure rich previews on social platforms (Twitter).

Improves CTR when links are shared.

Robots & Sitemap

robots.txt is configured to allow indexing of public pages while blocking non-indexable routes (e.g. APIs, dashboards).

sitemap.xml is auto-generated to help search engines discover all indexable routes efficiently.

Why this matters:
Without proper metadata, even a well-built app is invisible to search engines. This setup ensures predictable indexing and shareability.

Semantic HTML Structure

The UI is built using semantic HTML elements instead of div-heavy layouts:

<header> for navigation and branding

<main> for primary page content

<section> and <article> for content grouping

<footer> for site-wide information

Headings (h1–h3) follow a logical hierarchy:

One h1 per page (primary topic)

Supporting sections use h2 and h3

Why this matters:
Semantic HTML improves accessibility, SEO crawlability, and content clarity for both users and search engines.

Image Optimization Strategy

Images are optimized using Next.js Image component:

Automatic resizing based on device viewport

Lazy loading by default

Modern formats (WebP) when supported

Explicit width and height to prevent layout shifts (CLS)

Why this matters:
Unoptimized images are one of the fastest ways to destroy page performance and Core Web Vitals.

Performance Optimizations

Key performance-focused decisions include:

Server Components to reduce client-side JS

Code splitting via dynamic imports where applicable

Minimal client components — only used where interactivity is required

Optimized fonts with next/font to avoid render-blocking

Result: faster initial load, better Lighthouse scores, and improved UX.

🔎 Search & Filter Implementation

The search and filter functionality is designed to be:

Client-side and responsive

Debounced to avoid unnecessary re-renders

Based on normalized data (lowercasing, trimming, token matching)

Filtering logic is isolated from UI components to keep:

State predictable

Components reusable

Debugging simple

This approach scales well as the dataset grows and avoids tight coupling between UI and business logic.

⚠️ Challenges Faced

Balancing SEO with modern App Router patterns
(especially metadata handling and dynamic routes)

Preventing overuse of client components while keeping UI interactive

Designing filters that are performant without premature optimization

Ensuring image performance without sacrificing visual quality

Each challenge was addressed with measured trade-offs, not hacks.


🛠 Technologies Used

Next.js (App Router)

React

TypeScript

Tailwind CSS

Next.js Metadata API

Next.js Image Optimization

Vercel (Deployment)
