# Claude Context — Celviar.com

## Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # Build for production (tsc + vite build)
npm run lint     # Lint TypeScript files (ESLint)
npm run preview  # Preview production build
# No test script configured
```

## Tech Stack

- **React 18** + **TypeScript** (strict)
- **Vite** (build tool, fast dev server)
- **React Router** (client-side routing)
- **Tailwind CSS** + CSS Modules (styling)
- **Shopify** (commerce backend, link-out checkout)

## Repo Map

```
/docs/                    # Source of truth for content & brand
  site-brief.md           # Project goals, requirements, features
  content.md              # Page copy, CTAs, IA (CANONICAL for content)
  reference-notes.md      # Design tokens, component guidance

/src/
  /components/            # Reusable UI (Header, Footer, Button, Modal, etc.)
  /config/                # Shopify config, links, emails
  /content/               # Typed content objects (site.ts, product.ts)
  /lib/shopify/           # Shopify API helpers (client.ts)
  /pages/                 # Route pages (Home, PlaceholderPage)
  /theme/                 # Design tokens (colors, typography, spacing)
  /ui/                    # UI primitives & reactbits (GlassSurface, etc.)
  App.tsx                 # Main app with routing
  main.tsx                # Entry point
  index.css               # Global styles

/assets/                  # Images, fonts, static assets
/public/                  # Static files (favicon, etc.)
/app/                     # Directory-based routing (future structure)

dist/                     # Build output (generated)
```

## Key Brand & Content Rules

### Brand Positioning
- Unisex luxury skincare with "drop culture" + members-club indulgence
- Regenerative-looking skin science meets opulent lifestyle
- Think: Versailles glow, members-club mood, clinically credible

### Voice & Tone
- Polished, confident, slightly playful
- Short, punchy lines (drop culture cadence)
- Sensory language (melt, cocoon, gloss, velvet) + science anchors (PDRN, barrier, hydration)
- **Avoid medical claims** — cosmetic language only (appearance, feel, hydration, smoothness)

### Copy Conventions
- Use "Drop", "Edition", "Chapter", "Collection"
- Use "ritual" not "routine"
- Use "moisturiser" not "moisturizer" (British spelling)
- Use "members" / "early access" rather than "discount"

### Design System (Quiet Luxury)
**Colors** (hierarchical proportions):
- **Carbon Black** `#1D1D1D` — 70-85% (primary base, "ink lacquer")
- **Gold** `#FFD700` — 2-5% (foil accent, hairline borders, microtype labels)
- **Dark Amaranth** `#800035` — 10-20% (signature berry-plum accent, "the swirl energy")
- **Regal Navy** `#003580` — support (links on light, credibility tone)
- **Indigo** `#4A0080` — support (night-lux editorial depth)
- **Blue Spruce** `#008075` — 0-3% (success states, clean freshness)

**Typography**:
- Display: Cormorant Garamond (headlines)
- Body: Montserrat (UI, body text)
- CTAs/subtitles: Montserrat Italic
- **Wordmark:** "C" in Ballet, "elviar" in Snell Roundhand (prefer SVG asset)

**Spacing**: xs(6), sm(10), md(16), lg(24), xl(32), 2xl(48), 3xl(72)

**Interaction**:
- Quiet microinteractions only (subtle press state, soft fades)
- Respect reduced motion preferences
- Primary CTA: "Pre-order Drop 001" → Shopify link
- Secondary CTA: "Join Waitlist" → modal or route

### Product Truth (Drop 001 — Rich Salve)
- Name: **Celviar Rich Salve: All Purpose Balm**
- Size: **100 ml**
- Signature: **dual-phase swirl** (rich berry + cream/ivory)
- Hero ingredient: **salmon-derived sodium PDRN (1,200 ppm)**
- Base: organic butters/oils (shea, coconut, jojoba, sweet almond), burdock root extract, vitamin E
- Texture: rich balm that melts, spreads evenly, dewy glow without excessive greasiness
- Packaging: thick dark violet/amber glass, airtight lid, batch code + PAO symbol
- **Do not publish numerical efficacy metrics** unless approved

### Commerce (Shopify)
- MVP: All "Pre-order / Buy" CTAs **link out to Shopify** (no cart on Celviar.com)
- Optional: fetch live price/availability via Shopify Storefront API for accuracy
- Placeholders in `.env.local`:
  - `VITE_SHOPIFY_PRODUCT_URL_RICH_SALVE`
  - `VITE_WAITLIST_FORM_ACTION`
  - Social URLs, contact emails

### Pages to Implement
- `/` Home (DONE)
- `/product/rich-salve` Product page
- `/waitlist` Waitlist signup
- `/science` The Science (PDRN)
- `/rituals` How to use
- `/journal` Editorial content
- `/about` About Celviar
- `/stockists` Retail partners (coming soon)
- `/contact` Contact form
- `/faq` FAQ
- `/shipping-returns` Shipping & Returns
- Legal: `/privacy`, `/terms`, `/cookies`

## Definition of Done (MVP)
- All routes render without errors
- Pages look premium on mobile and desktop
- Pre-order links correctly to Shopify
- Waitlist capture works end-to-end
- Static export succeeds (`npm run build` → `dist/`)
- Accessibility basics (focus states, keyboard nav, contrast)
- No medical claims in copy

## Content Source of Truth
**Always defer to `/docs/content.md`** for:
- Page copy and structure
- CTAs and links
- Microcopy and messaging

**Build content into typed objects** in `src/content/*` — never hardcode copy in components.

## Important Notes
- **Use tokens from `src/theme/`** — no ad-hoc styling
- **ALWAYS prefer editing existing files** — never create new files unless required
- **Keep it simple** — no over-engineering, no unnecessary abstractions
- **Shopify is the commerce backend** — no cart needed on site for MVP
