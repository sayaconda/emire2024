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
        sub: '#F3E2CE',
        accent: '#CDAF7B',
        overlay: 'rgba(0,0,0,0.8)',
        text: {
          primary: '#625851',
        },
        decoration: {
          primary: '#E4DFDC',
          accent1: '#E5D4A9', // 背景色：頭
          accent2: '#E4DFDC', // 背景色：肩・首
          accent3: '#CDAF7B', // 背景色：デコルテ
          accent4: '#F3A467', // 背景色：耳
          accent5: '#D9CEC3', // 背景色：手・足
          accent6: '#D8BB8F', // 背景色：肩甲骨
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(to right, #D0A900, #FFF9E6)',
        // 'accent-gradient':
        //   'linear-gradient(to left top, #CDAF7B, #D8BB8F, #E5D4A9, #E8D4A5)',
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
