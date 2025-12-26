# Developer Portfolio

A modern, minimal portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a fully responsive design.

## Features

- ✨ Modern, minimal design (2024/2025 trends)
- 🌙 Dark mode with light mode toggle
- 📱 Fully responsive (mobile-first)
- 🎨 Sophisticated color palette
- ⚡ Smooth animations with Framer Motion
- ♿ Excellent accessibility (ARIA labels, keyboard navigation)
- 🔍 SEO optimized (metadata, structured data)
- 🚀 Fast performance (optimized for Lighthouse 90+)

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   └── globals.css         # Global styles
├── components/
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   ├── FeaturedProjects.tsx # Featured projects section
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar
│   ├── ProjectsGrid.tsx    # Full projects grid
│   ├── ScrollToTop.tsx     # Scroll to top button
│   ├── Skills.tsx          # Skills section
│   ├── StructuredData.tsx  # SEO structured data
│   └── ThemeProvider.tsx   # Theme provider
└── lib/
    └── data.ts             # Project data and skills
```

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Projects
- Skills
- Social links

### Update Contact Information

Edit `components/Contact.tsx` to update:
- Email address
- Social media links
- Resume download link

### Update About Section

Edit `components/About.tsx` to update:
- Bio text
- Metrics (projects, experience, technologies)

### Theme Colors

Edit `tailwind.config.ts` to customize the color scheme.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

The project is also compatible with:
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Performance

The site is optimized for:
- Fast page loads
- Smooth animations
- SEO best practices
- Accessibility standards

## License

MIT

## Contact

David Ginzburg - [GitHub](https://github.com/Dav50505) - [LinkedIn](https://www.linkedin.com/in/david-ginzburg-a453ba295/)
