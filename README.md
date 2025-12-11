# SNX Labs - Waitlist / Coming Soon Page

A modern, beautiful waitlist/coming soon page built with Next.js 16.0.8, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful gradient backgrounds and animations
- 📱 Mobile-first responsive layout
- 🎯 Email waitlist form with validation
- 🌙 Dark mode support (via shadcn/ui)
- ⚡ Built with Next.js 16.0.8 App Router
- 🎨 Styled with Tailwind CSS v4
- 🧩 Uses shadcn/ui components

## Tech Stack

- **Next.js** 16.0.8
- **React** 19.2.1
- **TypeScript** 5.x
- **Tailwind CSS** v4
- **shadcn/ui** components

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

## Project Structure

```
snxlabs-waitlist/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main waitlist page
│   └── globals.css      # Global styles and Tailwind config
├── components/
│   └── ui/              # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── public/              # Static assets
```

## Customization

### Update Branding

Edit `app/page.tsx` to change:
- Company name (currently "SNX Labs")
- Tagline and description
- Colors and styling

### Connect to Backend

The form submission currently simulates an API call. To connect to your backend:

1. Update the `handleSubmit` function in `app/page.tsx`
2. Replace the simulated API call with your actual endpoint:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
    }
  } catch (error) {
    // Handle error
  } finally {
    setIsLoading(false);
  }
};
```

### Add Social Links

Update the social media links in `app/page.tsx` by replacing the `href="#"` attributes with your actual social media URLs.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.
