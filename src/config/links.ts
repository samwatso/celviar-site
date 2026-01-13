/**
 * Site Links & Configuration
 * All external links, form endpoints, and operational settings
 */

export const siteConfig = {
  name: 'Celviar',
  tagline: 'Drop Culture Luxury Skincare',
  description: 'Regenerative-looking skin science meets members-club indulgence.',
} as const;

// Form endpoints
export const formEndpoints = {
  waitlist: import.meta.env.VITE_WAITLIST_FORM_ACTION || '[WAITLIST_FORM_ACTION]',
  contact: import.meta.env.VITE_CONTACT_FORM_ACTION || '[CONTACT_FORM_ACTION]',
} as const;

// Social media links
export const socialLinks = {
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/celviar',
  tiktok: import.meta.env.VITE_TIKTOK_URL || 'https://www.tiktok.com/celviar',
  youtube: import.meta.env.VITE_YOUTUBE_URL || '[YOUTUBE_URL]',
  pinterest: import.meta.env.VITE_PINTEREST_URL || 'https://www.pintrest.com/celviar',
} as const;

// Contact emails
export const contactEmails = {
  support: import.meta.env.VITE_SUPPORT_EMAIL || 'mailto:support@celvia.com',
  press: import.meta.env.VITE_PRESS_EMAIL || 'mailto:support@celvia.com',
  wholesale: import.meta.env.VITE_WHOLESALE_EMAIL || 'mailto:support@celvia.com',
} as const;

// Shipping & returns constants
export const shippingConfig = {
  processingTime: import.meta.env.VITE_PROCESSING_TIME || '[PROCESSING_TIME]',
  deliveryWindows: import.meta.env.VITE_DELIVERY_WINDOWS || '[DELIVERY_WINDOWS]',
  returnWindowDays: import.meta.env.VITE_RETURN_WINDOW_DAYS || '[RETURN_WINDOW_DAYS]',
} as const;

// Navigation links
export const navLinks = {
  main: [
    { label: 'Rich Salve', href: '/product/rich-salve' },
    { label: 'The Science', href: '/science' },
    { label: 'Rituals', href: '/rituals' },
    { label: 'Journal', href: '/journal' },
    { label: 'About', href: '/about' },
  ],
  secondary: [
    { label: 'Waitlist', href: '/waitlist' },
  ],
} as const;

// Footer navigation
export const footerLinks = {
  shop: [
    { label: 'Rich Salve', href: '/product/rich-salve' },
    { label: 'Founding Member', href: '/founding-member' },
  ],
  learn: [
    { label: 'The Science', href: '/science' },
    { label: 'Rituals', href: '/rituals' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping-returns' },
  ],
  brand: [
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Stockists', href: '/stockists' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
  ],
} as const;

// Site routes for reference
export const routes = {
  home: '/',
  product: {
    richSalve: '/product/rich-salve',
  },
  waitlist: '/waitlist',
  science: '/science',
  rituals: '/rituals',
  journal: '/journal',
  about: '/about',
  stockists: '/stockists',
  contact: '/contact',
  faq: '/faq',
  shippingReturns: '/shipping-returns',
  privacy: '/privacy',
  terms: '/terms',
  cookies: '/cookies',
} as const;
