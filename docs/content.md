# Celviar.com — content.md
> Website content source-of-truth for Claude / site build  
> Brand: **Celviar** — unisex luxury skincare with “members club / drop culture” energy (Kith / Aimé Leon Dore / Drôle de Monsieur / Château Orlando… but skincare).

---

## 0) Commerce: Shopify (must-read)
Celviar.com is a **static site** (React Native Web), but **catalogue + checkout are powered by Shopify**.

**MVP checkout approach (recommended):**
- “Pre‑order / Buy” buttons **link out to Shopify** (product page or checkout URL).
- Optional enhancement: pull **live price/availability** via Shopify Storefront API for accuracy.

**Shopify placeholders**
- Store domain: `[SHOPIFY_STORE_DOMAIN]` (e.g. `celviar.myshopify.com`)
- Public Storefront token: `[SHOPIFY_STOREFRONT_TOKEN]`
- Drop 001 collection handle (optional): `[SHOPIFY_COLLECTION_HANDLE_DROP001]`
- Rich Salve product handle: `[SHOPIFY_PRODUCT_HANDLE_RICH_SALVE]`
- Rich Salve product URL: `[SHOPIFY_PRODUCT_URL_RICH_SALVE]`
- (Optional) Direct checkout URL: `[SHOPIFY_CHECKOUT_URL_RICH_SALVE]`

---

## 1) Quick reference
### Primary CTAs
- **Pre‑order Drop 001** → `[SHOPIFY_PRODUCT_URL_RICH_SALVE]` *(Shopify checkout)*
- **Join the Waitlist** (email capture) → `[WAITLIST_FORM_ACTION]`
- **Get Early Access** (members-only link) → `[EARLY_ACCESS_URL]` *(optional)*

### Key pages
- `/` Home
- `/product/rich-salve` Product page
- `/waitlist` Waitlist
- `/science` The Science (PDRN)
- `/rituals` Rituals (how to use)
- `/journal` Editorial / culture
- `/about` About
- `/stockists` Stockists (coming soon)
- `/contact` Contact
- `/faq` FAQ
- `/shipping-returns` Shipping & Returns
- `/privacy` Privacy
- `/terms` Terms
- `/cookies` Cookies

### Socials (placeholders)
- Instagram: `[INSTAGRAM_URL]`
- TikTok: `[TIKTOK_URL]`
- YouTube: `[YOUTUBE_URL]`
- Pinterest: `[PINTEREST_URL]`

---

## 2) Brand language
### 2.1 Brand positioning (internal)
Celviar sits at the intersection of **regenerative-looking skin science** and **opulent lifestyle indulgence** — where lab-grade innovation meets caviar-night decadence.  
Think: *Versailles glow, members-club mood, but clinically credible.*

### 2.2 Voice & tone rules
- Polished, confident, slightly playful.
- Short, punchy lines (drop culture cadence).
- Sensory language (melt, cocoon, gloss, velvet) + science anchors (PDRN, barrier, hydration, stability).
- Avoid medical claims; keep language cosmetic (appearance, feel, hydration, smoothness).

### 2.3 Copy conventions
- Use “Drop”, “Edition”, “Chapter”, “Collection”.
- Use “ritual” instead of “routine”.
- Use “moisturiser” not “moisturizer”.
- Use “members” / “early access” rather than “discount”.

---

## 3) Global site components
### 3.1 Header navigation (recommended)
**Left:** Celviar wordmark  
**Centre:**  
- Drop 001
- The Science
- Rituals
- Journal
- About  
**Right:**  
- Waitlist
- Basket *(optional; can link to Shopify cart or be omitted for MVP)*

### 3.2 Global announcement bar (rotating)
1) **Drop 001: Rich Salve — available now.** `[SHOPIFY_PRODUCT_URL_RICH_SALVE]`  
2) **Members get early access.** Join the waitlist. `/waitlist`  
3) **Limited batch. Batch-coded.**

### 3.3 Footer content
**Columns**
- Shop: Drop 001, Waitlist  
- Learn: The Science, Rituals, FAQ, Shipping & Returns  
- Brand: About, Journal, Stockists, Contact  
- Social: Instagram, TikTok, YouTube, Pinterest

**Footer microcopy**
- “Small-batch luxury. Made to be kept on your marble shelf.”
- Newsletter sign-up (same as waitlist): email field + “Join”.

**Footer legal**
- © `[YEAR]` Celviar. All rights reserved.  
- Links: Privacy / Terms / Cookies

---

## 4) Home page (`/`)
### 4.1 SEO
**Title:** Celviar — Drop Culture Luxury Skincare  
**Meta description:** Regenerative-looking skin science meets members‑club indulgence. Drop 001: Rich Salve — a dual‑phase swirled balm for face, body and hair.

### 4.2 Hero (above the fold)
**H1:** Drop 001 — Rich Salve  
**Subhead:** A dual-phase, swirled balm powered by salmon-derived sodium PDRN and organic oils. Made for face, body, and hair.  
**CTAs:**  
- Primary: **Pre‑order** → `[SHOPIFY_PRODUCT_URL_RICH_SALVE]`  
- Secondary: **Join the Waitlist** → opens waitlist modal

**Hero image direction**
- Macro swirl shot: deep berry + ivory, glossy, thick.
- Or: unisex bathroom/lifestyle iPhone shot — premium but candid.

### 4.3 “The Promise” block
**Headline:** Indulgence you can measure.  
**Bullets (short)**
- Long-wear hydration
- Barrier comfort, dewy finish
- Multi‑use, zero fuss
- Swirl stays photogenic

### 4.4 “Drop Culture” block
**Headline:** Small-batch by design.  
**Body:** We release in limited runs, batch-coded for traceability. When it’s gone, it’s gone — until the next pour.  
**CTA:** **Get drop alerts** → `/waitlist`

### 4.5 “The Swirl” block (visual)
**Headline:** Two phases. One ritual.  
**Body:** A pearlescent cream phase meets a rich berry oil phase — folded for performance and satisfaction.

### 4.6 “Science x Sensory” split block
**Left (Science):**  
**Title:** PDRN, decoded.  
**Copy:** A polynucleotide ingredient loved in modern K‑beauty for skin that looks smoother, more hydrated and refreshed.  
**Link:** Learn more → `/science`

**Right (Sensory):**  
**Title:** Velvet-gloss texture.  
**Copy:** A cocooning balm that melts to a light sheen — made for day, night, and everything in between.  
**Link:** Rituals → `/rituals`

### 4.7 Journal teaser
**Headline:** The Celviar Edit  
**Body:** Product rituals, ingredient lore, and the culture of looking after yourself like it’s an art form.  
**CTA:** Visit Journal → `/journal`

### 4.8 Social proof strip (launch-ready placeholders)
- “The swirl is unreal.” — `[Name]`  
- “Like a members club for my skin.” — `[Name]`  
- “Face, elbows, hair ends… it just works.” — `[Name]`

### 4.9 Instagram / TikTok feed embed (optional)
**Heading:** Seen in the wild  
Embed: `[INSTAGRAM_EMBED_CODE]` or curated grid.

---

## 5) Product page — Rich Salve (`/product/rich-salve`)
### 5.1 SEO
**Title:** Rich Salve (Drop 001) — Celviar  
**Meta description:** A dual‑phase swirled balm with salmon-derived sodium PDRN + organic oils. Multi-use luxury for face, body and hair.

### 5.2 Product hero
**Product name:** Rich Salve  
**Tag:** Drop 001  
**One-liner:** The all-purpose balm for glossy hydration, barrier comfort, and a dewy finish.  
**Price:** `[SHOPIFY_PRICE]` *(prefer live from Shopify; fallback: `[PRICE_GBP]`)*  
**Size:** 100 ml  
**Availability:** `[SHOPIFY_AVAILABILITY]` *(prefer live from Shopify)*

**Primary CTA**
- **Pre‑order Drop 001** → `[SHOPIFY_PRODUCT_URL_RICH_SALVE]`

**Secondary CTA**
- **Join Waitlist for restock** → `/waitlist`

**Microcopy under CTA**
- “Limited batch. Batch-coded.”
- “Checkout powered by Shopify.”

### 5.3 Short description (fold)
A dual-phase, swirled balm that melts into skin and hair with a velvet-gloss finish.  
Powered by **salmon-derived sodium PDRN (1,200 ppm)** and a cushion of **organic butters and oils** for deep hydration and a visibly smoother look.

### 5.4 Benefit grid
1) **Deep hydration, long wear**  
Skin feels cushioned, softer, and more comfortable — without heavy residue.

2) **Regenerative-looking finish**  
Supports the look of smoother, plumper skin over time.

3) **Barrier comfort**  
A balm that seals in moisture and calms the look of dryness.

4) **Multi-use**  
Face, body, hair ends. One jar, everywhere.

### 5.5 Signature story
**Headline:** The swirl is the signature.  
**Body:** Two phases folded together for performance and ritual: a pearlescent cream phase + a rich berry oil phase — designed to stay photogenic from first scoop to final swipe.

### 5.6 How to use (ritual)
**Daily moisturiser**  
Warm a pea-sized amount between fingertips. Press into face and neck.

**Targeted salve**  
Pat onto dry areas: lips, cuticles, elbows, knees.

**Overnight mask**  
Apply a thin, glossy veil over moisturiser. Wake up to a visibly rested look.

**Hair gloss**  
Smooth a tiny amount over ends for shine and softness.

**Pro tip:** Start small — it melts fast.

### 5.7 Hero ingredients (marketing-friendly; full INCI later)
- **Sodium PDRN (salmon-derived, 1,200 ppm):** supports the look of renewal, firmness and hydration.  
- **Organic shea butter + organic coconut oil:** deep moisture and barrier feel.  
- **Jojoba + sweet almond oils:** comfort, slip, and softness.  
- **Burdock root extract:** traditionally used for soothing, purifying care.  
- **Vitamin E:** antioxidant support for oil freshness.

*(Full INCI list to be added once final lab formula is locked.)*

### 5.8 Fragrance (if included)
**Headline:** Warm. Woody. Velvet.  
**Copy:** An ambery, woody-oriental profile with bergamot, rose and sandalwood warmth, softened with a gentle sweetness.  
**Note:** Patch test if you’re sensitive to fragrance.

### 5.9 Texture & finish
**Headline:** Balm-to-gloss transformation.  
**Copy:** Scoops like a salve, melts like silk, finishes like a dewy veil.

### 5.10 Packaging & unboxing
- **Primary:** Thick dark violet / amber glass jar, wide-mouth, airtight lid  
- **Secondary:** Rigid outer box with gold foil accents and a premium insert  
- **Details:** Batch code + PAO symbol

**Unboxing microcopy (inside flap)**
- “Welcome to Drop 001.”
- “Made to be used. Made to be kept.”

### 5.11 Product FAQs (on-page)
**Is this for men or women?**  
Unisex — designed for anyone who wants high performance with a luxury finish.

**Is it greasy?**  
It’s a balm, so you’ll get a glossy, cocooned feel. Start with a small amount; it melts and spreads quickly.

**Can I use it on acne-prone skin?**  
Many people enjoy balms, but if you’re prone to congestion, patch test and use as a targeted salve rather than all-over.

**Is it safe around eyes?**  
Avoid direct eye contact. Use carefully around the orbital area.

**Is this vegan?**  
No — Rich Salve uses salmon-derived PDRN.

**How long will one jar last?**  
Depends on use. As a face balm only: typically 6–10 weeks. Multi-use: it disappears faster (in the best way).

---

## 6) Waitlist page (`/waitlist`)
### 6.1 SEO
**Title:** Waitlist — Celviar  
**Meta description:** Join the Celviar waitlist for early access, drop alerts, and first-right-to-buy.

### 6.2 Page content
**H1:** The Waitlist  
**Subhead:** Early access to drops. First-right-to-buy when we restock.

**Form fields**
- Email (required)
- First name (optional)
- City (optional)
- Interest (optional multi-select): Face / Body / Hair / Gifting
- Consent checkbox: “Email me about drops and launches.”

**Button:** Join Celviar  
**Success copy:**  
- “You’re in. Welcome to Celviar.”  
- “Watch your inbox for Drop 001 access.”

**Error copy**
- “That email doesn’t look right — try again.”  
- “Something went wrong. Please try again in a moment.”

### 6.3 Waitlist incentive (no discounts)
- “Members-only early access links”
- “Batch drop alerts”
- “Founders notes + ritual guides”

---

## 7) About page (`/about`)
**H1:** Science, indulgence, and the art of renewal.  
**Body:** Celviar was born from a simple desire: skincare that performs like science and feels like lifestyle.  
We take regenerative-inspired ingredients (like salmon-derived PDRN) and pair them with rich botanical nourishment — then wrap it all in a world that feels like velvet booths, champagne nights, and a bathroom shelf worth photographing.

**Values (short)**
- Innovation (biotech-meets-beauty)
- Luxury (ritual, design, experience)
- Efficacy (credible, realistic goals)
- Sustainability-minded packaging (where possible)

---

## 8) The Science (`/science`)
**H1:** PDRN, decoded.  
**Intro:** PDRN (polydeoxyribonucleotide) is a polynucleotide ingredient used in skincare to support the look of smoother, more hydrated, healthier-looking skin.

**Sections**
1) What is PDRN?  
2) Why Celviar uses it  
3) Cosmetic claims only (important)  
4) Formula philosophy (science + sensory base)  
5) Testing & standards (placeholders) `[DETAILS]`

**CTA block:**  
Ready for the ritual? → Pre‑order Drop 001 → `[SHOPIFY_PRODUCT_URL_RICH_SALVE]`

---

## 9) Rituals (`/rituals`)
**H1:** Your ritual, your rules.  
**Intro:** Rich Salve is designed to move with you: bathroom shelf, gym bag, carry-on. One jar, multiple moments.

**Ritual cards**
- Morning glow: tiny amount, press into damp skin  
- Night cocoon: layer for an overnight veil  
- Dry patch rescue: elbows, knees, cuticles, lips  
- Hair ends: micro-dose for gloss and softness  
- Travel edit: one product, fewer decisions  

**CTA:** Get Drop 001 → `[SHOPIFY_PRODUCT_URL_RICH_SALVE]`

---

## 10) Journal (`/journal`)
### Categories
- Drops
- Rituals
- Ingredients
- Culture

### Launch-ready article ideas
1) Drop 001: Why we made a balm first  
2) The swirl: not decoration — design  
3) PDRN: the ingredient everyone whispers about  
4) The bathroom shelf as a moodboard  
5) Scent notes: sandalwood after midnight

---

## 11) Stockists (`/stockists`) — coming soon
**H1:** Stockists  
**Body:** Celviar is currently available online only. Select retail partners coming soon.  
**CTA:** Join the waitlist for stockist announcements.

---

## 12) Contact (`/contact`)
**Email:** `[SUPPORT_EMAIL]`  
**Press:** `[PRESS_EMAIL]`  
**Wholesale / Stockists:** `[WHOLESALE_EMAIL]`

---

## 13) FAQ (`/faq`)
Include sections: Shipping, Orders (incl. Shopify checkout), Product, Sustainability.

---

## 14) Shipping & Returns (`/shipping-returns`)
**Shipping**
- Processing times: `[PROCESSING_TIME]`
- Estimated delivery: `[DELIVERY_WINDOWS]`
- Tracking: Yes, via email.

**Returns**
- Unopened products only within `[RETURN_WINDOW_DAYS]` days.
- Hygiene policy: opened products cannot be returned.

---

## 15) Legal pages
`/privacy`, `/terms`, `/cookies` as templates.

---

## 16) Taglines (pick 1–3)
- “Regeneration, styled.”
- “Science with a velvet finish.”
- “Your skin’s members club.”
- “Drop culture skincare.”
- “Caviar energy. Clinical intent.”

---

## 17) Launch placeholders to fill
- Shopify: `[SHOPIFY_STORE_DOMAIN]` / `[SHOPIFY_STOREFRONT_TOKEN]` / `[SHOPIFY_PRODUCT_HANDLE_RICH_SALVE]`
- `[SHOPIFY_PRODUCT_URL_RICH_SALVE]` / `[SHOPIFY_CHECKOUT_URL_RICH_SALVE]`
- `[SUPPORT_EMAIL]` / `[PRESS_EMAIL]` / `[WHOLESALE_EMAIL]`
- `[PROCESSING_TIME]` / `[DELIVERY_WINDOWS]` / `[RETURN_WINDOW_DAYS]`
- `[INSTAGRAM_URL]` etc.
- `[INCI_LIST]`
