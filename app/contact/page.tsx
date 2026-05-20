'use client'

import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Contact } from '@/components/sections/Contact'
import { Booking } from '@/components/sections/Booking'

export default function StandaloneContactPage() {
  return (
    <>
      <Navbar />
      <AmbientBackground />
      
      <main className="pt-24 min-h-screen">
        <Contact />
        <Booking />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
