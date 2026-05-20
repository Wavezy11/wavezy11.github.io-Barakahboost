'use client'

import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Portfolio } from '@/components/sections/Portfolio'

export default function StandalonePortfolioPage() {
  return (
    <>
      <Navbar />
      <AmbientBackground />
      
      <main className="pt-16 pb-12 min-h-screen">
        <Portfolio />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
