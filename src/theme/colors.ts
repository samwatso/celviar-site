/**
 * Celviar Color System
 * 
 * Hierarchy:
 * - Carbon Black #1D1D1D is the base
 * - Dark Amaranth #800035 is the PRIMARY brand/hero accent
 * - Regal Navy, Indigo, Blue Spruce, Gold are accent colours only (use sparingly)
 */

export const colors = {
  // Core palette (primary roles)
  carbonBlack: '#1D1D1D',       // Primary base - backgrounds, headers, primary text
  darkAmaranth: '#800035',      // PRIMARY brand accent - CTAs, highlights, hero elements

  // Accent colours (use sparingly)
  gold: '#FFD700',              // Accent only - hairline borders, micro labels
  regalNavy: '#003580',         // Accent only - links, info callouts
  indigo: '#4A0080',            // Accent only - overlays, gradients
  blueSpruce: '#008075',        // Accent only - success states

  // Neutrals
  white: '#FFFFFF',
  ivory: '#FFFEF5',             // Warm white for body text on dark
  cream: '#FAF8F5',             // Background alternative
  warmGray: '#9A9A9A',          // Secondary text
  lightGray: '#E8E8E8',         // Borders on light backgrounds
  
  // Semantic colors
  success: '#008075',           // Blue Spruce
  error: '#800035',             // Dark Amaranth
  
  // Transparent variants
  carbonBlackTransparent: 'rgba(29, 29, 29, 0.95)',
  amaranthTransparent: 'rgba(128, 0, 53, 0.15)',
  amaranthLight: 'rgba(128, 0, 53, 0.08)',
  goldTransparent: 'rgba(255, 215, 0, 0.1)',
} as const;

export type ColorToken = keyof typeof colors;
