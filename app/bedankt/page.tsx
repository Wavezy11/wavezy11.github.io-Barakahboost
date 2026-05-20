'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'

export default function BedanktPage() {
  return (
    <>
      <Navbar />
      <AmbientBackground />

      <main className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 w-full text-center">
          <GlassCard className="p-8 sm:p-12 border-brand-accent/20 bg-brand-surface2/10 rounded-[30px] shadow-2xl relative overflow-hidden">
            {/* Success icon glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-brand-accent/10 rounded-full blur-[60px] pointer-events-none -z-10" />

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent glow-glow animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-bold leading-tight mb-4">
              Bedankt voor je <GradientText>aanvraag!</GradientText>
            </h1>
            
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10">
              We hebben je bericht in goede orde ontvangen. Ons team gaat direct voor je aan de slag en we nemen binnen 24 uur contact met je op.
            </p>

            <div className="flex justify-center">
              <Link href="/">
                <Button className="px-8 py-3.5 uppercase text-xs tracking-wider font-bold text-brand-dark flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Terug naar home</span>
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
    </>
  )
}
