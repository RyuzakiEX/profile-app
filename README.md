# Professional Portfolio

A modern, responsive portfolio website built with Nuxt 3, showcasing professional profile, experience, and projects. Features an integrated contact form powered by Resend email service.

## Features

- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Profile Section** - Display professional information with social links
- **Experience Section** - Showcase work experience and skills
- **Projects Section** - Highlight portfolio projects
- **Contact Form** - Email integration with Resend service
- **Internationalization** - Multi-language support via Nuxt i18n
- **Image Optimization** - Optimized image delivery with Nuxt Image
- **UI Components** - Nuxt UI for consistent and accessible components

## Tech Stack

- **Framework**: Nuxt 4 - Vue 3 framework
- **Styling**: Nuxt UI components with Tailwind CSS
- **Email Service**: Resend - Email delivery API
- **i18n**: @nuxtjs/i18n - Multi-language support (WIP)
- **Image Optimization**: @nuxt/image
- **Hosting**: Vercel

## Setup

Install dependencies:

```bash
npm install
# or
pnpm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_EMAIL_FROM=noreply@yourdomain.com
RESEND_EMAIL_TO=your_email@example.com
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
# or
pnpm dev
```

## Build

Build the application for production:

```bash
npm run build
# or
pnpm build
```

Preview the production build:

```bash
npm run preview
# or
pnorm preview
```

## Deployment

This project is configured for automatic deployment on Vercel. Simply push your commits to the repository and Vercel will automatically build and deploy your changes.

For manual deployment:

```bash
npx vercel deploy
```

To set up automatic deployments, connect your repository to Vercel in the [Vercel dashboard](https://vercel.com).

For more information, see the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).
