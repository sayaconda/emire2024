import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#ffffff',
        // sub: '#F3E2CE',
        sub: '#F2F0F0',
        accent: '#CDAF7B',
        overlay: 'rgba(0,0,0,0.8)',
        text: {
          primary: '#625851',
        },
        decoration: {
          primary: '#FFBD59',
          accent1: '#ffeb80', // 背景色：頭
          accent2: '#CDA67E', // 背景色：肩・首
          accent3: '#CDAF7B', // 背景色：デコルテ
          accent4: '#FF914D', // 背景色：耳
          accent5: '#DABD8D', // 背景色：手・足
          accent6: '#FFDE59', // 背景色：肩甲骨
        },
        box: {
          blue: '#C1D0DB',
          pink: '#e3bdd0',
          green: '#D9E4BC',
          purple: '#DBBCE4',
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(to right, #D0A900, #FFF9E6)',
        'white-gradient':
          'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
