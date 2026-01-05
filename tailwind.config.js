/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Celviar brand colors - matches CSS variables
        'carbon-black': '#1D1D1D',
        'dark-amaranth': '#800035',
        'gold': '#FFD700',
        'regal-navy': '#003580',
        'indigo': '#4A0080',
        'blue-spruce': '#008075',
        'ivory': '#FFFEF5',
        'cream': '#FAF8F5',
        'warm-gray': '#9A9A9A',
        'light-gray': '#E8E8E8',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        'body': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'xl': '24px',
        'pill': '9999px',
      },
      backdropBlur: {
        'glass': '20px',
      },
      zIndex: {
        'sticky': '200',
        'modal': '300',
      },
    },
  },
  plugins: [],
  // Prevent Tailwind from conflicting with existing CSS
  corePlugins: {
    preflight: false, // Don't reset - we have our own
  },
}
