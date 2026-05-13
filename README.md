# My Blog - Physics STEM Portfolio

![App Preview](https://imgix.cosmicjs.com/3ae91d00-4ee1-11f1-8004-49554e815733-autopilot-photo-1511671782779-c97d3d27a1d4-1778686468807.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive portfolio blog for Physics STEM teaching content, built with Next.js 16 and Cosmic CMS.

## Features

- 📝 Blog posts with rich content and activity photos
- 👤 Author profiles with bios and expertise
- 🏷️ Category-organized content
- 🔬 Teaching materials library
- 🖼️ Photo galleries for activities
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a04998fb4bc78a77bbd9ddb&clone_repository=6a049a8eb4bc78a77bbd9e17)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: อัพเดทเนื้อหาการสอนฟิสิกส์ STEM กิจกรรม ภาพกิจกรรม และสื่อการสอน"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, teaching-materials, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: อัพเดทเนื้อหาการสอนฟิสิกส์ STEM กิจกรรม ภาพกิจกรรม และสื่อการสอน

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Content management
- **React 19** - UI library

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- A Cosmic account with the required content models

### Installation

```bash
bun install
```

Create a `.env.local` file:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all posts with related data
const posts = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single post by slug
const post = await cosmic.objects
  .findOne({ type: 'posts', slug: 'post-slug' })
  .depth(1)
```

## Cosmic CMS Integration

The application uses these content types:
- **Posts**: Blog articles with featured images and activity photos
- **Authors**: Author profiles with expertise
- **Categories**: Content organization
- **Teaching Materials**: Downloadable resources

## Deployment Options

Deploy to Vercel, Netlify, or any platform supporting Next.js. Set environment variables in your hosting platform's dashboard.

<!-- README_END -->