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
        primary: "var(--sand1)",
        secondary: "var(--sand4)",
        tertiary: "var(--sand3)",
        blur: "var(--blurBackground)",
        header: "var(--headerBackground)",
        linkHover: "var(--link-hover)",
      },
      fontSize: {
        sm: '10pt',
        base: '11pt',
        md: '13pt',
      },
      textColor: {
        primary: "var(--color-text-primary)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '105': '1.01',
      }
    }
  },
  plugins: [],
}
export default config
