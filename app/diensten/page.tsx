'use client'

import React from 'react'
import Link from 'next/link'
import { Layout, Code, Share2, Sparkles, Camera, Users, TrendingUp, Search, ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '@/lib/data'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const iconMap: Record<string, React.ComponentType<any>> = {
  Layout: Layout,
  Code: Code,
  Share2: Share2,
  Sparkles: Sparkles,
  Camera: Camera,
  Users: Users,
  TrendingUp: TrendingUp,
  Search: Search,
}

export default function DienstenPage() {
  return (
    <>
      <Navbar />
      <AmbientBackground />
      
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-bold font-mono">✦ ONZE EXPERTISE</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mt-3 mb-6">
              Diensten die jouw <GradientText>groei stimuleren</GradientText>
            </h1>
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
              Wij bieden een breed scala aan diensten om jouw merk online op de kaart te zetten. Van high-end webdesign tot doeltreffende advertentiecampagnes en video-productie.
            </p>
          </div>

          {/* Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Layout
              return (
                <GlassCard
                  key={service.id}
                  className="p-8 sm:p-10 flex flex-col justify-between border-white/5 bg-white/[0.01]"
                >
                  <div className="space-y-6">
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent glow-glow">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold font-display text-brand-text">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-text/90">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <span className="text-xs text-brand-muted font-mono font-semibold uppercase tracking-wider">
                      ✦ MAATWERK & RESULTAAT
                    </span>
                    <Link href={`/diensten/${service.slug}`} className="w-full sm:w-auto">
                      <Button variant="secondary" className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-bold">
                        <span className="flex items-center justify-center gap-1.5">
                          Bekijk details <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </GlassCard>
              )
            })}
          </div>

          {/* Bottom call to action banner */}
          <GlassCard className="mt-20 p-8 sm:p-12 text-center max-w-4xl mx-auto border-brand-accent/10 bg-brand-surface2/15 rounded-[24px]">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Direct een complete groei-impuls voor je merk?
            </h3>
            <p className="text-brand-muted text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Kies voor ons exclusieve BarakahLaunch traject waarin we branding, webdesign, content creatie en leadgeneratie combineren in één krachtige 30-dagen sprint.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/barakahlaunch">
                <Button className="px-6 py-3.5 uppercase text-xs tracking-wider font-bold text-brand-dark">
                  Bekijk BarakahLaunch &rarr;
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="px-6 py-3.5 uppercase text-xs tracking-wider font-bold">
                  Neem contact op
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
