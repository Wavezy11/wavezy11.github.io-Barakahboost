import React from 'react'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '@/app/globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'BarakahBoost – Social Media Marketing & Content Creatie | Schiedam',
  description: 'BarakahBoost is een premium creatief marketing bureau in Schiedam. Wij verzorgen social media marketing, high-end webdesign, videografie en branding. Meer dan 20 miljoen weergaven.',
  keywords: ['BarakahBoost', 'social media marketing', 'content creatie', 'Schiedam', 'webdesign', 'branding', 'videografie', 'acquisitie'],
  metadataBase: new URL('https://www.barakahboost.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.barakahboost.nl',
    title: 'BarakahBoost – Social Media Marketing & Content Creatie',
    description: 'Creatief marketing bureau in Schiedam. Wij zorgen voor krachtige social media campagnes, videografie, branding en webdesign die écht resultaat opleveren.',
    siteName: 'BarakahBoost',
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarakahBoost – Social Media Marketing & Content Creatie',
    description: 'Creatief marketing bureau in Schiedam. Meer dan 20 miljoen weergaven voor onze klanten via social media campagnes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BarakahBoost",
    "image": "https://www.barakahboost.nl/public/portfolio/abu-taymiyyah/hero-edit.jpg",
    "@id": "https://www.barakahboost.nl/#organization",
    "url": "https://www.barakahboost.nl",
    "telephone": process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "+31685546310",
    "email": process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": process.env.NEXT_PUBLIC_CONTACT_ADDRESS_STREET || "Parkweg 226 B",
      "addressLocality": "Schiedam",
      "postalCode": "3119 CR",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.9168,
      "longitude": 4.3892
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/barakahboost.nl/",
      "https://www.tiktok.com/@barakahboostnl",
      "https://www.linkedin.com/company/barakahboost/"
    ]
  }

  return (
    <html 
      lang="nl" 
      suppressHydrationWarning
      className={`${outfit.variable} font-sans`}
    >
      <head>
        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <CustomCursor />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
