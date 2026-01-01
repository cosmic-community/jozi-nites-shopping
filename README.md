# Modern E-Commerce Showcase

![App Preview](https://imgix.cosmicjs.com/9942ce50-e744-11f0-a103-2b7ed0663b96-Headphones.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce website built with Next.js 16 that showcases your products, displays customer testimonials, and captures contact form submissions. Built with TypeScript, Tailwind CSS, and powered by Cosmic CMS.

## ✨ Features

- 🛍️ **Product Showcase** - Display products with image galleries, pricing, and detailed descriptions
- 💬 **Customer Testimonials** - Rotating testimonial cards with images and company information
- 📝 **Contact Form** - Fully functional contact form with email validation and Cosmic CMS integration
- 🎨 **Modern UI/UX** - Clean, contemporary design with smooth animations and transitions
- 📱 **Fully Responsive** - Mobile-first design that works perfectly on all devices
- ⚡ **High Performance** - Server-side rendering with Next.js 16 App Router
- 🔒 **Type-Safe** - Complete TypeScript implementation with strict typing
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML structure

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6956ab746d538c4d2c715a00&clone_repository=6956dd216d538c4d2c715bb1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **React Server Components** - Server-side rendering by default
- **Bun** - Fast package manager and runtime

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with a bucket containing products, testimonials, and form submissions

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials

```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Creating Form Submissions

```typescript
await cosmic.objects.insertOne({
  title: `Contact from ${formData.email}`,
  type: 'form-submissions',
  metadata: {
    email: formData.email,
    company: formData.company,
    message: formData.message
  }
})
```

## 🎨 Cosmic CMS Integration

This application integrates with three Cosmic object types:

### Products
- **Image**: Main product image
- **Gallery**: Additional product images
- **Price**: Product pricing
- **Description**: HTML product description
- **Quantity**: Available stock

### Testimonials
- **Company**: Customer's company name
- **Position**: Customer's job title
- **Image**: Customer photo
- **Quote**: Testimonial text

### Form Submissions
- **Email**: Contact email (validated)
- **Company**: Company name
- **Message**: Contact message

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (for form submissions)

## 📝 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->