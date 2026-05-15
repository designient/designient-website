import type { Metadata } from 'next'
import React from 'react'
import { instrumentSerif, outfit, jetbrainsMono } from '../styles/fonts'
import { CurrencyProvider } from '../contexts/CurrencyContext'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { SkipLink } from '../components/SkipLink'
import { Analytics } from '../components/Analytics'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Designient — School of Masterminds | UI/UX Design Courses',
    template: '%s | Designient',
  },
  description:
    "Design careers built by masters, not machines. Small-batch mentorship, AI-integrated curriculum, 95% placement rate. Adobe certified UI/UX courses in Bangalore, Hyderabad & Pune.",
  keywords: [
    'UI/UX design course',
    'design training Bangalore',
    'design institute Hyderabad',
    'Adobe certified',
    'design bootcamp',
    'UX design course India',
    'AI design course',
  ],
  authors: [{ name: 'Designient' }],
  creator: 'Designient',
  publisher: 'Designient',
  metadataBase: new URL('https://designient.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://designient.com',
    siteName: 'Designient — School of Masterminds',
    title: 'Designient — Design careers built by masters, not machines.',
    description:
      "Small-batch mentorship. AI-integrated curriculum. 95% placement rate. Adobe certified.",
    images: [
      {
        url: '/favicon-designient.png',
        width: 512,
        height: 512,
        alt: 'Designient — School of Masterminds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designient — School of Masterminds',
    description:
      "Design careers built by masters, not machines. Small batches, real mentors, 95% placed.",
    images: ['/favicon-designient.png'],
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
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className="font-sans antialiased bg-void text-cloud" suppressHydrationWarning>
        <SkipLink />
        <CurrencyProvider>
          {children}
          <WhatsAppButton />
        </CurrencyProvider>
        <Analytics />
      </body>
    </html>
  )
}
