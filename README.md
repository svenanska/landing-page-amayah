# amayah.chat landing page

A mobile-first, high-converting teaser landing page built with **Next.js + Tailwind CSS** for social traffic from Instagram/TikTok.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set your GA4 tracking ID:
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## Edit content quickly

- Main copy/sections: `app/page.tsx`
- Placeholder model image: `app/page.tsx` (`next/image` URL)
- Colors/visual style tokens: `tailwind.config.ts`
- GA tracking helpers and events: `lib/gtag.ts`, `components/analytics.tsx`, `components/cta-button.tsx`

## GA4 details

- Uses `gtag.js` loaded in `components/analytics.tsx`
- Tracking ID comes from `NEXT_PUBLIC_GA_ID`
- Automatic page view tracking on route/query changes
- CTA click events tracked on all CTA buttons via shared `CTAButton` component
