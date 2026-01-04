/**
 * Celviar Spacing & Layout System
 * Based on reference-notes.md spacing scale
 * 
 * Luxury UX: generous whitespace, restrained motion
 */

export const spacing = {
  // Base spacing scale
  xs: '0.375rem',    // 6px
  sm: '0.625rem',    // 10px
  md: '1rem',        // 16px
  lg: '1.5rem',      // 24px
  xl: '2rem',        // 32px
  '2xl': '3rem',     // 48px
  '3xl': '4.5rem',   // 72px
  '4xl': '6rem',     // 96px
  '5xl': '8rem',     // 128px
} as const;

export const radii = {
  none: '0',
  sm: '8px',
  md: '14px',        // Buttons
  lg: '18px',        // Cards
  xl: '24px',        // Modals
  pill: '9999px',    // Pill buttons
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const containerWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  full: '100%',
} as const;

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  modal: 300,
  toast: 400,
  tooltip: 500,
} as const;

// Animation durations
export const durations = {
  fast: '150ms',
  normal: '250ms',
  slow: '400ms',
  slower: '600ms',
} as const;

// Easing functions
export const easings = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
} as const;

// Shadows for depth
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  gold: '0 0 20px rgba(255, 215, 0, 0.15)',
} as const;
