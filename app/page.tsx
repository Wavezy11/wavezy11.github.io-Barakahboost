'use client'

import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'

// Sections
import { Hero } from '@/components/sections/Hero'
import { Clients } from '@/components/sections/Clients'
import { Portfolio } from '@/components/sections/Portfolio'
import { WhyUs } from '@/components/sections/WhyUs'
import { Services } from '@/components/sections/Services'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { StatsBanner } from '@/components/sections/StatsBanner'
import { Testimonials } from '@/components/sections/Testimonials'
import { Booking } from '@/components/sections/Booking'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <AmbientBackground />

      <main className="relative min-h-screen">
        <Hero />
        <Clients />
        <Portfolio />
        <WhyUs />
        <Services />
        <HowWeWork />
        <StatsBanner />
        <Testimonials />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
