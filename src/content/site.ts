/**
 * Site Content
 * Updated with new brand messaging - focus on quality, craft, and membership
 */

export const siteContent = {
  // SEO defaults
  seo: {
    title: 'Celviar — Luxury Skincare',
    description: 'Regenerative skin science meets indulgence. Drop 001: Rich Salve — a dual-phase swirled balm for face, body and hair.',
  },

  // Announcement bar messages (rotating)
  announcements: [
    {
      text: 'Rich Salve.',
      link: '/product/rich-salve',
      linkText: 'Pre-Order',
    },
    {
      text: 'Become a founding member for early access.',
      link: '/founding-member',
      linkText: 'Learn more',
    }
  ],

  // Footer microcopy
  footer: {
    tagline: 'Join as a founding member for early access, updates and launch notes.',
    copyright: `© ${new Date().getFullYear()} Celviar. All rights reserved.`,
    newsletterPlaceholder: 'Enter your email',
    newsletterButton: 'Join',
  },
};

export const homeContent = {
  // Hero section - Updated with Celviar wordmark as title
  hero: {
    // Note: headline is now the brand wordmark "Celviar" - rendered with special fonts
    headline: 'Celviar',
    subhead: 'A dual-phase, swirled balm powered by salmon-derived sodium PDRN and organic oils. Made for face, body, and hair.',
    primaryCta: {
      text: 'Pre-order',
      href: '[SHOPIFY_PRODUCT_URL_RICH_SALVE]',
    }
  },

  // The Promise block - removed "swirl stays photogenic"
  promise: {
    headline: 'Indulgence you can measure.',
    bullets: [
      'Long-wear hydration',
      'Barrier comfort, dewy finish',
      'Multi-use versatility',
      'Crafted with intention',
    ],
  },

  // Craft & Quality block (replaces Drop Culture - no scarcity language)
  craftQuality: {
    headline: 'Crafted with intention.',
    body: 'One balm, multiple moments. Rich Salve melts into skin for deep comfort and a soft, dewy finish; then doubles as a targeted salve for dry areas and a gloss for hair ends. Founding Members receive early access, complimentary extras with select orders, and first look at future drops.',
    cta: {
      text: 'Become a founding member',
      href: '/founding-member',
    },
  },

  // The Ritual block (replaces Swirl)
  ritual: {
    headline: 'Two phases. One ritual.',
    body: 'A pearlescent cream phase meets a rich berry oil phase — folded together for performance and sensory delight.',
  },

  // Science x Sensory split
  scienceSensory: {
    science: {
      title: 'PDRN, decoded.',
      copy: 'A polynucleotide ingredient loved in modern K-beauty for skin that looks smoother, more hydrated and refreshed.',
      link: {
        text: 'Learn more',
        href: '/science',
      },
    },
    sensory: {
      title: 'Velvet-gloss texture.',
      copy: 'A cocooning balm that melts to a light sheen — made for day, night, and everything in between.',
      link: {
        text: 'Rituals',
        href: '/rituals',
      },
    },
  },

  // Journal teaser
  journalTeaser: {
    headline: 'The Celviar Edit',
    body: "Product rituals, ingredient lore, and the culture of looking after yourself like it's an art form.",
    cta: {
      text: 'Visit Journal',
      href: '/journal',
    },
  },

  // Social media section (replaces "Seen in the wild")
  socialMedia: {
    headline: 'Social media',
  },

  // Editorial images for collage/gallery
  editorial: {
    images: [
      { src: '/assets/img/berries-jar.jpg', alt: 'Rich Salve jar with berries' },
      { src: '/assets/img/champagne-caviar.jpg', alt: 'Champagne and caviar lifestyle' },
      { src: '/assets/img/berries-bottle.jpg', alt: 'Berry-inspired skincare' },
      { src: '/assets/img/berry-handbag.jpg', alt: 'Luxury lifestyle' },
      { src: '/assets/img/female-cream.jpg', alt: 'Woman applying cream' },
      { src: '/assets/img/male-berry-suit.jpg', alt: 'Man in berry suit' },
    ],
  },
};

export const waitlistContent = {
  seo: {
    title: 'Founding Member — Celviar',
    description: 'Become a founding member of Celviar for early access, exclusive updates, and launch notes.',
  },
  headline: 'Become a Founding Member',
  subhead: 'Join our community for early access to drops and exclusive updates.',
  form: {
    emailPlaceholder: 'Email address',
    namePlaceholder: 'First name (optional)',
    cityPlaceholder: 'City (optional)',
    interestOptions: ['Face', 'Body', 'Hair', 'Gifting'],
    consentText: 'Email me about new products and launches.',
    submitButton: 'Join Celviar',
  },
  success: {
    headline: 'Welcome to Celviar.',
    body: "You're now a founding member. Watch your inbox for updates.",
  },
  error: {
    invalidEmail: "That email doesn't look right — try again.",
    generic: 'Something went wrong. Please try again in a moment.',
  },
  incentives: [
    'Early access to new drops',
    'Founding member updates',
    'Ritual guides and notes from our team',
  ],
};
