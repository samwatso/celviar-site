# Celviar.com

A premium launch site for Celviar — unisex luxury skincare with "drop culture" + members-club indulgence.

Built with **Vite + React + TypeScript** for static deployment.

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool with fast dev server
- **React Router** — Client-side routing
- **CSS Modules** — Scoped styling
- **Shopify** — Commerce backend (link-out checkout)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
celviar/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── config/          # Configuration (Shopify, links, etc.)
│   ├── content/         # Typed content objects from content.md
│   ├── lib/             # Utility libraries
│   │   └── shopify/     # Shopify API helpers (optional)
│   ├── pages/           # Route pages
│   ├── theme/           # Design tokens (colors, typography, spacing)
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Key variables:
- `VITE_SHOPIFY_PRODUCT_URL_RICH_SALVE` — Product page URL for checkout
- `VITE_WAITLIST_FORM_ACTION` — Waitlist form submission endpoint
- Social media URLs
- Contact emails

### Shopify Integration

The MVP uses link-out checkout:
- All "Pre-order / Buy" CTAs link directly to Shopify
- No cart is implemented on the Celviar site

To add live price/availability from Shopify Storefront API, implement the helper in `src/lib/shopify/client.ts`.

## Design System

The site follows a "quiet luxury" aesthetic based on:

**Colors:**
- Carbon Black (#1D1D1D) — Primary base
- Gold (#FFD700) — Foil accent (2-5% usage)
- Dark Amaranth (#800035) — Signature berry accent

**Typography:**
- Display: Cormorant Garamond (headlines)
- Body: Montserrat (UI, body text)

**Spacing:** xs(6), sm(10), md(16), lg(24), xl(32), 2xl(48), 3xl(72)

See `src/theme/` for all design tokens.

## Pages

### Implemented
- `/` — Home (full implementation)

### Placeholder (coming soon)
- `/product/rich-salve` — Product page
- `/waitlist` — Waitlist signup
- `/science` — The Science (PDRN)
- `/rituals` — How to use
- `/journal` — Editorial content
- `/about` — About Celviar
- `/stockists` — Retail partners
- `/contact` — Contact form
- `/faq` — FAQ
- `/shipping-returns` — Shipping & Returns
- `/privacy` — Privacy Policy
- `/terms` — Terms & Conditions
- `/cookies` — Cookie Policy

## Deployment

The site builds to static files and can be deployed to:
- **Cloudflare Pages**
- **Netlify**
- **Vercel**
- **GitHub Pages**

```bash
# Build
npm run build

# Output in ./dist
```

For SPA routing, ensure your host redirects all routes to `index.html`.

## License

Private — Celviar © 2025
