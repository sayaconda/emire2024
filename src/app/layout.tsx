import { Cormorant_Garamond, Zen_Old_Mincho } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const ZenOldMincho = Zen_Old_Mincho({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const CormorantGaramond = Cormorant_Garamond({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${ZenOldMincho.className} bg-base text-text-primary`}>
        {children}
      </body>
    </html>
  );
}