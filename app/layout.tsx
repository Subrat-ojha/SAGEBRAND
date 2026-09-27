import type { Metadata } from 'next';
import { Archivo, Caveat } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ variable: '--font-archivo', subsets: ['latin'] });
const caveat = Caveat({ variable: '--font-caveat', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sage-labs-digital-studio.kiranch99k.chatgpt.site'),
  title: 'Sage Labs — Websites, Apps, Software & AI',
  description: 'Sage Labs builds websites, mobile apps, custom software, and practical AI for growing businesses and startups.',
  openGraph: {
    title: 'Sage Labs — From first sketch to working product.',
    description: 'Websites, mobile apps, custom software, and practical AI for growing businesses and startups.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Sage Labs — From first sketch to working product.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sage Labs — From first sketch to working product.',
    description: 'Websites, mobile apps, custom software, and practical AI for growing businesses and startups.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${archivo.variable} ${caveat.variable}`}>{children}</body></html>;
}
