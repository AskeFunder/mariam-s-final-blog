// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        custom: ['var(--font-custom)'],
        futura: ['Futura', 'Arial', 'Helvetica', 'sans-serif'],
        persona: ['var(--font-persona-non-grata)', 'Arial', 'Helvetica', 'sans-serif'],
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-headings': 'var(--foreground)',
            '--tw-prose-links': 'var(--foreground)',
            '--tw-prose-bold': 'var(--foreground)',
            '--tw-prose-quotes': 'var(--foreground)',
            '--tw-prose-code': 'var(--foreground)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
