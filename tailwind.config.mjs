/** Brand tokens from claude/DESIGN-RULINGS-chatsworthpt.md (palette locked 20 Oct 2026). Light theme only.
 *  Class names read bg-brand-navy, text-brand-muted and so on; never raw hex in a class string. */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          navy: '#004F79', // logo navy: dark bands, primary buttons, headings
          'navy-deep': '#003C5C', // hover and pressed only
          blue: '#0096D0', // accents only, never a button fill (white on it is 3.35:1)
          sky: '#E2F6FF', // soft band, hover fill
          text: '#001620',
          muted: '#4B5E6B',
          line: '#D5E3EC',
          star: '#F2B01E', // Google stars only
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', '"Bricolage Grotesque"', '"Trebuchet MS"', '"Segoe UI"', 'sans-serif'],
        body: ['"Inter Variable"', 'Inter', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: { measure: '1180px' },
      borderRadius: { card: '16px', field: '10px' },
      minHeight: { btn: '52px' },
    },
  },
  plugins: [],
};
