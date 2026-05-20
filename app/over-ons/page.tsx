'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function OverOnsPage() {
  const values = [
    'Transparantie boven alles: wekelijkse meetrapportages',
    'Volledig maatwerk: geen templates, altijd uniek',
    'Resultaatgericht: focus op conversies en leads',
    'Proactieve groei-partner: meedenken en optimaliseren',
  ]

  return (
    <>
      <Navbar />
      <AmbientBackground />

      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Right Column: Story & Details (Ordered first on mobile, second on desktop) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-brand-accent font-bold font-mono">✦ OVER ONS</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
                Onze reis naar een <br />
                <GradientText>specialistisch team</GradientText>
              </h1>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                BarakahBoost is opgericht met een duidelijke visie: het leveren van hoogwaardige, snelle en resultaatgerichte marketingoplossingen die écht resultaat opleveren. Wij geloven dat dit anders kan: transparanter, proactiever en met een absolute focus op meetbare groei.
              </p>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                Vandaag de dag werken we met een hecht team van 7 specialisten. Ieder van ons is expert in zijn of haar vakgebied — van branding en webdesign tot high-end videografie en acquisitie. Samen hebben we één duidelijke missie: de groei van jouw onderneming stimuleren.
              </p>

              {/* Core values list */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold font-display text-brand-text mb-2">Waar we voor staan:</h3>
                {values.map((val) => (
                  <div key={val} className="flex items-center gap-3 text-sm text-brand-text/95">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Link href="/contact">
                  <Button className="px-8 py-3.5 uppercase text-xs tracking-wider font-bold text-brand-dark">
                    Laten we kennismaken &rarr;
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="secondary" className="px-8 py-3.5 uppercase text-xs tracking-wider font-bold">
                    Bekijk ons werk
                  </Button>
                </Link>
              </div>
            </div>

            {/* Left Column: Image wrapper (Ordered second on mobile, first on desktop) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              {/* Glow backdrop */}
              <div className="absolute w-[250px] h-[250px] bg-brand-accent/20 rounded-full blur-[80px] -z-10 animate-glow-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              <GlassCard className="p-0 overflow-hidden border-white/10 rounded-[28px] shadow-2xl relative aspect-[3/4]">
                <Image
                  src="/portfolio/Barakahboost over-ons.jpeg"
                  alt="BarakahBoost Team Foto"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: 'center 5%' }}
                />
              </GlassCard>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
