# IIS Studio

Sanity Studio for **Iloilo Integrated School Inc.** — a headless CMS for managing school website content.

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v9+

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd iis-studio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file from the example and fill in your Sanity project credentials:

   ```bash
   cp .env.example .env
   ```

   ```env
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   PUBLIC_SANITY_API_VERSION=2025-02-06
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the studio for production |
| `pnpm deploy` | Deploy to Sanity hosting |

## Content Schemas

| Schema | Description |
|--------|-------------|
| **siteSettings** | Global site configuration — metadata, hero images, mission/vision, core values, testimonials |
| **blogPost** | Blog articles with categories, rich text body, and images |
| **event** | School events with dates, locations, and photo gallery integration |
| **leader** | Leadership and faculty profiles |
| **admissions** | Enrollment information, requirements, and steps |
| **faq** | Frequently asked questions organized by category |
| **facebookPost** | Facebook post embeds for social media integration |
| **alumniOfficer** | Alumni organization officers and batch representatives |
| **alumniSpotlight** | Featured alumni profiles and achievements |
| **category** | Blog post categories |

## Features

- **Image Compression** — Custom upload source that automatically compresses images to max 1MB / 1920px before uploading, reducing storage and improving page load times.
- **GROQ Playground** — Sanity Vision plugin for querying content with GROQ.

## Deployment

Pushing to `main` triggers automatic deployment via GitHub Actions. The workflow installs dependencies with pnpm and runs `sanity deploy`.

Required GitHub repository secrets:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_AUTH_TOKEN`
