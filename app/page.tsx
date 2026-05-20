'use client'

import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'

// Sections
import { Hero } from '@/components/sections/Hero'
import { StatsBanner } from '@/components/sections/StatsBanner'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { BarakahLaunchTeaser } from '@/components/sections/BarakahLaunchTeaser'
import { Portfolio } from '@/components/sections/Portfolio'
import { Clients } from '@/components/sections/Clients'
import { Testimonials } from '@/components/sections/Testimonials'
import { Booking } from '@/components/sections/Booking'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* Dynamic Nav and Glow Overlays */}
      <Navbar />
      <AmbientBackground />

      <main className="relative min-h-screen">
        {/* Sections */}
        <Hero />
        <StatsBanner />
        <Services />
        <WhyUs />
        <HowWeWork />
        <BarakahLaunchTeaser />
        <Portfolio />
        <Clients />
        <Testimonials />
        <Booking />
        <Contact />
      </main>

      {/* Footer and Chat Shortcuts */}
      <Footer />
      <WhatsAppButton />
    </>
  )
}
