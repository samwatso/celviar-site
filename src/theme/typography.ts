/**
 * Celviar Typography System
 * Two-font system: Display for headlines, Sans for UI/body
 * 
 * Using:
 * - Cormorant Garamond: Elegant serif for display/headlines (luxury editorial feel)
 * - Montserrat: Clean sans-serif for body/UI (modern, readable)
 * 
 * Wordmark: Ballet 'C' + Snell Roundhand 'elvia' (prefer SVG asset)
 */

export const typography = {
  // Font families
  fontFamily: {
    display: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
    body: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    // Wordmark fonts (fallbacks for when SVG not available)
    wordmarkC: '"Ballet", cursive, serif',
    wordmarkElvia: '"Snell Roundhand", cursive',
  },

  // Font sizes (rem-based for accessibility)
  fontSize: {
    micro: '0.6875rem',     // 11px - uppercase labels
    small: '0.8125rem',     // 13px - captions, meta
    body: '1rem',           // 16px - body text
    bodyLarge: '1.125rem',  // 18px - lead paragraphs
    h3: '1.5rem',           // 24px - section headings
    h2: '2rem',             // 32px - page section titles
    displayL: '2.5rem',     // 40px - large display
    displayXL: '3.5rem',    // 56px - hero headlines
    displayHero: '4.5rem',  // 72px - massive hero (desktop)
  },

  // Font weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  // Line heights
  lineHeight: {
    tight: 1.1,       // Headlines
    snug: 1.25,       // Subheadings
    normal: 1.5,      // Body text
    relaxed: 1.75,    // Long-form reading
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.02em',   // Headlines
    normal: '0',        // Body
    wide: '0.05em',     // Subheadings
    wider: '0.1em',     // Micro labels, uppercase text
    widest: '0.2em',    // Super tracked labels
  },
} as const;

// Typography presets for common use cases
export const textStyles = {
  displayXL: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.displayXL,
    fontWeight: typography.fontWeight.light,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  displayL: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.displayL,
    fontWeight: typography.fontWeight.light,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  h2: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.h2,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
  h3: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.h3,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
  body: {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal,
  },
  bodyLarge: {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.bodyLarge,
    fontWeight: typography.fontWeight.light,
    lineHeight: typography.lineHeight.relaxed,
    letterSpacing: typography.letterSpacing.normal,
  },
  small: {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal,
  },
  micro: {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.micro,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.widest,
    textTransform: 'uppercase' as const,
  },
} as const;
