import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--bg-main)",
        maint: "var(--bg-maint)",
        soft100: "var(--bg-soft100)",
        soft200: "var(--bg-soft200)",
        soft300: "var(--bg-soft300)",
        blur: "var(--blurBackground)",
        header: "var(--headerBackground)",
        linkHover: "var(--link-hover)",
      },
      fontSize: {
        sm: '11pt',
        base: '12pt',
        md: '14pt',
      },
      textColor: {
        prim: "var(--text-prim)",
        soft100: "var(--text-soft100)",
        soft200: "var(--text-soft200)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
        soft100: "var(--bg-soft100)",
      },
      scale: {
        '105': '1.01',
      }
    }
  },
  plugins: [],
}
export default config
