import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import LanguageContextProvider from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vitor Fernando da Silva',
  description: 'Vitor Fernando da Silva web portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100 mx-auto max-w-6xl px-6`}>
        <LanguageContextProvider>
          <Header />
          <Toaster
            position="bottom-center"
          />
          {children}
          <Footer />
        </LanguageContextProvider>
      </body>
    </html>
  )
}
