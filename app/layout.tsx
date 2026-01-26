import type { Metadata } from 'next'
import React from 'react'
import { Bebas_Neue, Inter } from 'next/font/google'
import { CurrencyProvider } from '../contexts/CurrencyContext'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Designient - UI/UX Design Training Institute | Bangalore & Hyderabad | 95% Placement Rate',
    template: '%s | Designient'
  },
  description: 'Designient - India\'s leading UI/UX design training institute in Bangalore and Hyderabad. 95% placement rate, Adobe certified courses, personalized mentorship. Transform your design career with hands-on projects and real-world experience.',
  keywords: ['UI/UX design course', 'design training Bangalore', 'design institute Hyderabad', 'Adobe certified', 'design bootcamp', 'UX design course India'],
  authors: [{ name: 'Designient' }],
  creator: 'Designient',
  publisher: 'Designient',
  metadataBase: new URL('https://designient.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://designient.com',
    siteName: 'Designient',
    title: 'Designient - UI/UX Design Training Institute',
    description: 'India\'s leading UI/UX design training institute with 95% placement rate. Adobe certified courses in Bangalore and Hyderabad.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Designient - UI/UX Design Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designient - UI/UX Design Training Institute',
    description: 'India\'s leading UI/UX design training institute with 95% placement rate.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon-designient.png',
    shortcut: '/favicon-designient.png',
    apple: '/favicon-designient.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  )
}
