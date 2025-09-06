import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trần Thịnh - Người dẫn chương trình chuyên nghiệp | Professional MC',
  description: 'MC song ngữ chuyên nghiệp cho đám cưới, sự kiện doanh nghiệp và lễ hội văn hóa tại Huế, Việt Nam. Bilingual MC for weddings, corporate events, and cultural celebrations.',
  keywords: 'MC, người dẫn chương trình, đám cưới, sự kiện, Huế, Việt Nam, bilingual, wedding MC, corporate events',
  authors: [{ name: 'Trần Thịnh' }],
  openGraph: {
    title: 'Trần Thịnh - Người dẫn chương trình chuyên nghiệp',
    description: 'MC song ngữ chuyên nghiệp cho đám cưới, sự kiện doanh nghiệp và lễ hội văn hóa tại Huế, Việt Nam.',
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 min-h-screen`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
