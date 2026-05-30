import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Idlewild Coffee + Culture | Austin, Texas',
  description:
    'Idlewild Coffee redesigned as an Austin creative culture hub with coffee, tea, locations, merch, and skate-shop community roots.',
  openGraph: {
    title: 'Idlewild Coffee + Culture',
    description: 'Austin coffee, skate culture, local art, and independent merch.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
