# Kishore P Portfolio

Premium product-focused AI engineering portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and React Three Fiber.

## Run Locally

```bash
npm install
npm run dev
```

## Content

Edit `src/data/portfolio.ts` for profile links, projects, achievements, skills, and image replacement paths.

## Assets

**Resume:** Put your PDF at `public/Kishore.p_Resume.pdf` (same filename). The site links to `/Kishore.p_Resume.pdf` — that file is bundled with the app and works locally and after deploy.

**Portrait:** Put your headshot at `public/images/portrait.jpg` for the hero section.

Placeholder image slots are documented in `public/placeholders/IMAGE_MAP.md`.

## Contact Form

1. Create a free access key at [web3forms.com](https://web3forms.com)
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
3. Add the same variable in Vercel → Project → Settings → Environment Variables

## SEO

Open Graph images, sitemap, robots.txt, and JSON-LD structured data are generated automatically from `src/app/`.
