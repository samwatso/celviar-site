# Celviar.com — site-brief.md (for Claude)
> Single brief to build the **React Native (react-native-web) + TypeScript** **static** site for **Celviar.com**.  
> Brand: unisex luxury skincare with “drop culture” + members‑club indulgence.  
> Commerce: **Shopify** powers catalogue + checkout.
> Logo/wordmark: Celviar with Ballet ‘C’ + Snell Roundhand ‘elviar’ (prefer SVG asset).

Also read:
- `content.md` (page copy + IA + CTAs)
- `reference-notes.md` (stack + tokens + components + Shopify approach)
- `Celviar Rich Salve.xlsx` (product spec direction)
- `PDRN.pdf` (ingredient background)

---

## 1) What we’re building
### 1.1 Goal
A premium launch site that:
1) Converts Drop 001 interest into **Shopify pre‑orders**
2) Captures emails via a **waitlist**
3) Builds credibility and desire (science + ritual + culture)

### 1.2 Non-negotiables
- **Static export** (no server dependency)
- **React Native + TypeScript** (web via `react-native-web`)
- Luxury editorial aesthetic (black lacquer, warm gold foil, berry accents)
- Unisex language and imagery
- No medical claims (cosmetic language only)
- Shopify is the commerce backend

---

## 2) Shopify requirement (must include)
### 2.1 MVP checkout approach (recommended)
- All “Pre‑order / Buy” CTAs **link out to Shopify**:
  - Prefer `product.onlineStoreUrl` (or a configured `[SHOPIFY_PRODUCT_URL_RICH_SALVE]`)
- No cart is required on Celviar.com for MVP.

### 2.2 Accuracy enhancement (recommended)
- Fetch **live price + availability** on the product page using Shopify Storefront API.
- If the fetch fails, use fallback placeholders from `content.md`.

### 2.3 Future enhancement (not MVP)
- Add on-site basket using Storefront API cart + redirect to Shopify checkout.

---

## 3) Product truth (Drop 001 — Rich Salve)
Respect these anchor points from the product spec:
- Name: **Celviar Rich Salve: All Purpose Balm**
- Size: **100 ml**
- Signature: **dual-phase swirl** (rich berry + cream/ivory)
- Hero ingredient mention (marketing-safe): **salmon-derived sodium PDRN (1,200 ppm)**
- Base: organic butters and oils (shea, coconut, jojoba, sweet almond), burdock root extract, vitamin E
- Texture: rich balm that melts, spreads evenly, dewy glow without excessive greasiness
- Packaging: thick dark violet/amber glass, airtight lid, batch code + PAO symbol
- Do not publish numerical efficacy metrics unless approved and substantiated

---

## 4) Site routes (IA)
Implement these routes:
- `/` Home
- `/product/rich-salve`
- `/waitlist`
- `/science`
- `/rituals`
- `/journal`
- `/journal/[slug]` (optional)
- `/about`
- `/stockists` (coming soon)
- `/contact`
- `/faq`
- `/shipping-returns`
- `/privacy`
- `/terms`
- `/cookies`

---

## 5) Core user journeys
1) **Buyer journey:** Home → Product → Shopify checkout  
2) **Member journey:** Home/Product → Waitlist modal/page → success  
3) **Credibility journey:** Home → Science/Rituals → Product → Shopify

---

## 6) Design system & UX principles
- Use tokens from `reference-notes.md` (no ad-hoc styling)
- Quiet luxury: whitespace, microtype, hairline borders, restrained motion
- Sticky header: transparent over hero then solid on scroll
- Announcement bar: subtle, not noisy
- CTAs: always clear; primary is Shopify purchase link

---

## 7) Content implementation rules
- Build page copy from `content.md` into typed objects in `src/content/*`
- All links and operational settings in `src/config/*`:
  - waitlist endpoint, socials, emails
  - Shopify domain/token/handles
  - fallback Shopify product URL

---

## 8) MVP feature checklist
### Must-have
- Home, Product, Waitlist, Science, Rituals, About, FAQ, Shipping & Returns, Contact, Legal templates
- Sticky header + footer with waitlist capture
- Product page:
  - CTA links to Shopify
  - (recommended) live price/availability from Shopify Storefront API
- Waitlist form works (POST to configured endpoint) with clear success state
- Static export works and deploys cleanly to static hosting

### Should-have
- Mobile sticky CTA bar on Product
- Journal index with launch-ready posts
- Subtle motion + reduced-motion support

### Nice-to-have
- Basket/cart (headless Shopify) — future
- Stockists map — future

---

## 9) Definition of done
The build is complete when:
- All routes render without errors
- Pages look premium on mobile and desktop
- Pre‑order links correctly to Shopify
- Waitlist capture works end-to-end
- Static export succeeds and assets are performant
- Accessibility basics (focus states, keyboard nav, contrast) are covered
