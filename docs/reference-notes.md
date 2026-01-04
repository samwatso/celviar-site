# Celviar.com — reference-notes.md (for Claude)
> Build notes + implementation guidance for a **static web site** built with **React Native + TypeScript** (via `react-native-web`).  
> Project: **Celviar** — unisex luxury skincare with “drop culture” + members-club indulgence.  
> Commerce: **Shopify** powers catalogue + checkout.

This file is developer/design guidance (not consumer copy). For consumer-facing copy + structure, use `content.md`.

---

## 1) Build approach
### 1.1 Stack (recommended)
**Expo + Expo Router + Static export**
- Expo (TypeScript)
- `expo-router` for file-based routing
- `react-native-web` for web rendering
- Static export for hosting (Cloudflare Pages, Netlify, Vercel static)

### 1.2 Commands (reference)
- Create: `npx create-expo-app celviar --template`
- Install router: `npx expo install expo-router react-native-safe-area-context react-native-screens`
- Export web: `npx expo export -p web`

### 1.3 Non-negotiables
- TypeScript everywhere (prefer strict)
- Must export to static assets
- Premium “drop” aesthetic (black lacquer + gold foil + berry accents)
- Content driven by typed objects derived from `content.md`
- Commerce powered by Shopify (MVP: link-out checkout; optional: live data via Storefront API)

---

## 2) Shopify integration (must support)
### 2.1 Recommended MVP (simple + robust)
- **All “Buy / Pre‑order” CTAs link to Shopify**:
  - Product page URL or direct checkout URL
- The Celviar site does **not** need a full cart for MVP.

### 2.2 Optional enhancement (recommended even for MVP)
- Use Shopify Storefront API to fetch:
  - price
  - availability (in stock / sold out / preorder messaging)
  - variant IDs (if needed later)
This keeps product info accurate without building a cart.

### 2.3 Headless upgrade path (future)
If later you want cart-on-site:
- Create Shopify cart via Storefront API
- Store `cartId` in local storage (web) / AsyncStorage (native)
- Use a Cart Drawer / Basket page
- Redirect to Shopify checkout URL

### 2.4 Shopify config (centralised)
Create `src/config/shopify.ts`:
- `SHOPIFY_STORE_DOMAIN` (e.g. `celviar.myshopify.com`)
- `SHOPIFY_API_VERSION` (e.g. `2025-01` or whichever is current)
- `SHOPIFY_STOREFRONT_TOKEN` (**public** token; still keep in env)
- Handles:
  - `PRODUCT_HANDLE_RICH_SALVE`
  - `COLLECTION_HANDLE_DROP001` (optional)

### 2.5 Environment variables (Expo)
Use Expo public env vars:
- `EXPO_PUBLIC_SHOPIFY_DOMAIN`
- `EXPO_PUBLIC_SHOPIFY_STOREFRONT_TOKEN`
- `EXPO_PUBLIC_SHOPIFY_API_VERSION`

(These are shipped to the client; only use the **public Storefront token**, never Admin tokens.)

### 2.6 Storefront API (GraphQL) — minimal operations
Create `src/lib/shopify/client.ts` with:
- `shopifyFetch(query, variables)` helper
- `getProductByHandle(handle)` returning:
  - title
  - description (optional)
  - images
  - priceRange
  - variants (id, title, availableForSale, price)
  - onlineStoreUrl

Suggested query (reference, adapt as needed):
```graphql
query ProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    title
    handle
    onlineStoreUrl
    availableForSale
    featuredImage { url altText }
    images(first: 10) { nodes { url altText } }
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    variants(first: 20) {
      nodes {
        id
        title
        availableForSale
        price { amount currencyCode }
      }
    }
  }
}
```

Implementation notes:
- Fetch client-side on Product page with skeleton state.
- If the fetch fails, show fallback price copy from `content.md` placeholders.
- For “Pre‑order” behaviour, prefer linking to `onlineStoreUrl` unless you maintain a direct checkout URL.

---

## 3) Information architecture (routes)
Implement (even if some are “coming soon”):
- `/` Home
- `/product/rich-salve`
- `/waitlist`
- `/science`
- `/rituals`
- `/journal`
- `/journal/[slug]` (optional static posts)
- `/about`
- `/stockists`
- `/contact`
- `/faq`
- `/shipping-returns`
- `/privacy`
- `/terms`
- `/cookies`

---

## 4) Data model & content source
### 4.1 Source of truth
- `content.md` is canonical for copy and page structure.
- Convert into typed objects under `src/content/*`.

### 4.2 Typed content objects
Create:
- `src/content/site.ts` (nav, footer, homepage sections)
- `src/content/product.ts` (Rich Salve static content + Shopify handle)
- `src/content/journal.ts` (post list)
- `src/content/legal.ts` (templates)

Add `src/config/links.ts` for:
- waitlist endpoint
- socials
- emails
- shipping/returns constants
- Shopify product URL fallback

---

## 5) Brand design system (RN-friendly)
Use “quiet luxury” tokens; do not free-style styling in components.

### 5.1 Colour tokens (`src/theme/colors.ts`)
Celviar’s colour system is built around **black lacquer + gold foil**, punctuated by a **signature berry-plum** and deeper editorial tones. Use accents sparingly to keep the brand feeling premium.

### Core palette (primary roles)
- **Carbon Black — `#1D1D1D`**  
  **Role:** Primary base (“ink lacquer”).  
  **Use:** Main backgrounds, header/footer, primary text on light surfaces, primary CTA backgrounds, key UI outlines.

- **Gold — `#FFD700`**  
  **Role:** Foil accent (high value, low usage).  
  **Use:** Hairline borders, microtype labels (e.g., “DROP 001”), small icons, premium dividers, subtle highlights, focus rings on dark.  
  **Rule:** Avoid gold body text on light backgrounds (contrast). Gold is best on Carbon Black / deep tones.

- **Dark Amaranth — `#800035`**  
  **Role:** Signature berry-plum accent (the swirl energy).  
  **Use:** Tags, key highlights, secondary CTA states, editorial accents, subtle gradients, hover/press moments.  
  **Rule:** Use in short, deliberate moments — not large blocks everywhere.

### Secondary palette (support tones)
- **Regal Navy — `#003580`**  
  **Role:** Credibility / “science-led” tone.  
  **Use:** Links on light backgrounds, info callouts, subtle UI states, occasional section accents.

- **Indigo — `#4A0080`**  
  **Role:** Night-lux editorial depth.  
  **Use:** Hero overlays, premium section backgrounds, gradients, interactive highlights on dark UI.

- **Blue Spruce — `#008075`**  
  **Role:** Clean freshness / modern apothecary.  
  **Use:** Success states, subtle UI accents, occasional decorative lines.  
  **Rule:** Keep it refined—never “teal everywhere”.

### Hierarchy + proportions (to keep it luxury)
- **70–85%** Carbon Black + light neutrals (backgrounds/surfaces)
- **10–20%** Amaranth / Indigo / Navy (editorial accents)
- **2–5%** Gold (foil details only)
- **0–3%** Blue Spruce (sparingly, mostly UI state)

### Practical UI mapping
**Backgrounds**
- Default dark: Carbon Black `#1D1D1D`
- Deep editorial sections: Indigo `#4A0080` (best as a gradient/overlay, not constant)

**Text**
- On light: Carbon Black `#1D1D1D`
- On dark: white/ivory for body text (avoid gold for paragraphs)
- Micro labels on dark: Gold `#FFD700`
- Links on light: Regal Navy `#003580` or Indigo `#4A0080`

**Buttons**
- Primary CTA (“Pre-order”): Carbon Black background + white/ivory text; optional hairline Gold border/detail  
  Press/hover: subtle Amaranth cue (border/underline/glow), not a full recolour
- Secondary CTA (“Waitlist”): outline style (Gold hairline on dark; Carbon Black text + Gold hairline on light)

**Tags / pills**
- “DROP 001” / “LIMITED BATCH”: transparent bg + Gold hairline; Gold text on dark, Carbon Black text on light
- Occasional signature tag: Dark Amaranth bg + light text (small only)

**Dividers**
- Hairline dividers: Gold at low emphasis (or a neutral divider if you introduce one)

### Luxury-friendly gradients (subtle)
- Ink → Indigo: `#1D1D1D` → `#4A0080`
- Ink → Amaranth: `#1D1D1D` → `#800035`
- Navy → Indigo: `#003580` → `#4A0080`

### Accessibility note
Gold `#FFD700` on white often fails for small text — reserve it for **dark backgrounds** and **larger headings** only.

### 5.2 Typography
Two-font system:
- Display for headlines (e.g. Inter)
- Sans for UI/body (e.g. Inter)
- cta text or subtitles inter-italic

## Wordmark / Logo typography (Celviar)
**Primary wordmark text:** `Celviar`

**Typeface split**
- **“C” (capital only):** *Ballet*
- **“elviar”:** *Snell Roundhand*

**Implementation guidance**
- Prefer a supplied **SVG wordmark asset** for perfect consistency across web export and devices (recommended).
- If implementing as text:
  - Ensure you have the **licensed font files** for Ballet and Snell Roundhand.
  - Load fonts via `expo-font` and apply styling so only the first character uses Ballet and the remainder uses Snell Roundhand.
  - Preserve refined kerning/spacing; do not alter letterforms.
- **Fallbacks (temporary only):**
  - Ballet fallback: `serif`
  - Snell Roundhand fallback: `cursive`


Implement variants:
- `displayXL`, `displayL`, `h2`, `h3`, `body`, `small`, `micro`
Micro labels: uppercase + tracking.

### 5.3 Spacing & radii
Spacing scale:
`xs=6, sm=10, md=16, lg=24, xl=32, 2xl=48, 3xl=72`

Radii:
- cards: 18–24
- buttons: pill or 14
- modals: 24

---

## 6) Components to implement (minimum)
Core:
- `AppShell`, `Header` (sticky), `AnnouncementBar`, `Footer`
- `Container`, `Section`, `Card`, `Divider`
- `Button` (primary/secondary/ghost)
- `Input`, `FormRow`, `Modal`, `Accordion` (FAQ)
- `Tag` (Drop 001, Limited batch)
- `EmailCaptureForm` (re-usable in footer + modal + waitlist page)

Commerce helpers:
- `ShopifyProductBadge` (price/availability from Storefront API)
- `BuyCTA` (links to Shopify; label changes based on availability)

Page modules:
- Home: hero, promise bullets, drop culture, swirl story, science x sensory split, journal teaser
- Product: hero, benefit grid, ritual steps, ingredient roster, packaging block, FAQ, sticky CTA (mobile optional)

---

## 7) Interaction rules (luxury UX)
- Primary CTA: **Pre‑order Drop 001** → Shopify link
- Secondary CTA: **Join Waitlist** → modal or route
- Quiet microinteractions only (subtle press state, soft fades)
- Respect reduced motion preferences

---

## 8) Performance, accessibility, SEO
Performance:
- Use `expo-image`
- Optimise image sizes; lazy load below the fold where possible

Accessibility:
- Visible focus states on web
- Keyboard navigable menus and modals
- Good contrast

SEO (RN Web constraints):
- Set per-route titles and meta descriptions using Expo Router head helpers
- Add OpenGraph tags where supported

---

## 9) Suggested file structure
```
app/
  _layout.tsx
  index.tsx
  about.tsx
  waitlist.tsx
  science.tsx
  rituals.tsx
  journal/
    index.tsx
    [slug].tsx
  product/
    rich-salve.tsx
  faq.tsx
  shipping-returns.tsx
  contact.tsx
  stockists.tsx
  privacy.tsx
  terms.tsx
  cookies.tsx

src/
  components/
  modules/
  content/
  config/
    links.ts
    shopify.ts
  lib/
    shopify/
      client.ts
  theme/
  utils/
assets/
```

---

## 10) Definition of done (MVP)
- Static export succeeds (`expo export -p web`)
- All routes render with consistent tokens
- Product page shows:
  - luxury layout + copy from `content.md`
  - “Pre‑order” CTA links to Shopify
  - (optional) live price/availability from Storefront API
- Waitlist capture works and shows success state
