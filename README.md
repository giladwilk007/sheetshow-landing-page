# SheetShow Landing Page

A modern, responsive landing page for the SheetShow Chrome extension built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive and mobile-friendly
- ⚡ Optimized for performance with Next.js
- 🚀 Ready for Vercel deployment
- ♿ Accessible design patterns
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Manual Build

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Customization

### Add Your Chrome Extension URL

1. Copy `env.example` to `.env.local`:
```bash
cp env.example .env.local
```

2. Update the Chrome Web Store URL:
```bash
NEXT_PUBLIC_CHROME_STORE_URL=https://chrome.google.com/webstore/detail/your-extension-id
```

### Other Customizations

- Update colors in `tailwind.config.js`
- Modify content in `app/page.tsx`
- Update metadata in `app/layout.tsx`
- Replace testimonials with real user feedback
- Add screenshots of your extension

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Lucide React Icons
