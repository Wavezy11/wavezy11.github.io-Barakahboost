'use client'

import React from 'react'
import Link from 'next/link'
import { Rocket, Shield, Clock, Sparkles, Layout, Video, UserPlus, ArrowRight, Check } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function BarakahLaunchPage() {
  const steps = [
    {
      week: 'Week 1',
      title: 'Positionering & Branding',
      icon: Sparkles,
      description: 'We bepalen jouw merkpositionering en ontwerpen een complete, premium huisstijl inclusief logo, typografie en kleurenpalet.',
      items: ['Merkidentiteit sessie', 'Huisstijl & Logo design', 'Social media stijlgids', 'Brandbook oplevering']
    },
    {
      week: 'Week 2',
      title: 'High-End Website Realisatie',
      icon: Layout,
      description: 'We bouwen een custom, razendsnelle en conversiegerichte Next.js website die jouw merk direct cachet geeft.',
      items: ['Custom design (geen templates)', 'Copywriting voor conversie', 'Lighthouse performance 95+', 'Mobiel & SEO geoptimaliseerd']
    },
    {
      week: 'Week 3',
      title: 'Content Creatie Sprint',
      icon: Video,
      description: 'We filmen op locatie en bewerken een complete set shortform (Reels/TikToks) of corporate video\'s met high-end apparatuur.',
      items: ['Contentstrategie & scripts', '1 shootdag op locatie', 'Professioneel editwerk', 'Klaar-voor-gebruik oplevering']
    },
    {
      week: 'Week 4',
      title: 'Acquisitie & Leadgeneratie',
      icon: UserPlus,
      description: 'We richten de lead-trechter in en starten met gerichte outreach of advertenties om direct nieuwe leads binnen te halen.',
      items: ['Outreach automation setup', 'Advertentiecampagne lancering', 'Lead-tracking dashboard', 'Sales script optimalisatie']
    }
  ]

  return (
    <>
      <Navbar />
      <AmbientBackground />

      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="flex justify-center">
              <Badge className="border-brand-accent/30 text-brand-accent font-bold font-mono px-4 py-1.5 text-xs bg-brand-accent/5">
                ✦ EXCLUSIEF 30-DAGEN TRAJECT
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Jouw bedrijf live en <br />
              schaalbaar in <GradientText>30 dagen</GradientText>.
            </h1>
            <p className="text-brand-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-body">
              Geen maandenlange overleggen en vertragingen. Met BarakahLaunch bouwen we jouw complete branding, website, videocontent en acquisitiesysteem in één krachtige 30-dagen sprint.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="#traject-plannen">
                <Button className="px-8 py-4 uppercase text-xs tracking-wider font-bold text-brand-dark">
                  Claim jouw launch &rarr;
                </Button>
              </Link>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_WHATSAPP || "31685546310"}`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="px-8 py-4 uppercase text-xs tracking-wider font-bold">
                  Bespreek de opties
                </Button>
              </a>
            </div>
          </div>

          {/* Quick trust metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
            <GlassCard className="p-6 flex items-center gap-4 bg-white/[0.01] border-white/5" hoverEffect={false}>
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent glow-glow shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-text">Gegarandeerde oplevering</h4>
                <p className="text-xs text-brand-muted">Volledig live binnen 30 dagen.</p>
              </div>
            </GlassCard>
            <GlassCard className="p-6 flex items-center gap-4 bg-white/[0.01] border-white/5" hoverEffect={false}>
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent glow-glow shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-text">100% Maatwerk</h4>
                <p className="text-xs text-brand-muted">Geen generieke templates.</p>
              </div>
            </GlassCard>
            <GlassCard className="p-6 flex items-center gap-4 bg-white/[0.01] border-white/5" hoverEffect={false}>
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent glow-glow shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-text">Directe Acquisitie</h4>
                <p className="text-xs text-brand-muted">Lead generatie trechters geactiveerd.</p>
              </div>
            </GlassCard>
          </div>

          {/* Weekly Process Steps */}
          <div className="space-y-16 max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold">Het 4-weekse programma</h2>
              <p className="text-brand-muted text-sm sm:text-base mt-2">Hoe we jou in 4 weken naar een marktleiders-positie lanceren.</p>
            </div>

            <div className="space-y-8">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <GlassCard
                    key={step.week}
                    className="p-8 sm:p-10 border-white/5 bg-white/[0.01] relative overflow-hidden"
                    hoverEffect={false}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Week marker & Icon */}
                      <div className="lg:col-span-4 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent glow-glow shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">{step.week}</span>
                          <h3 className="text-xl font-bold font-display text-brand-text mt-0.5">{step.title}</h3>
                        </div>
                      </div>

                      {/* Details & checklist */}
                      <div className="lg:col-span-8 space-y-6">
                        <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {step.items.map((item) => (
                            <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-text/90">
                              <span className="w-5 h-5 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                                <Check className="w-3.5 h-3.5" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                )
              })}
            </div>
          </div>

          {/* Form / Booking target */}
          <div id="traject-plannen" className="max-w-4xl mx-auto pt-16">
            <GlassCard className="p-8 sm:p-12 border-brand-accent/25 bg-brand-surface2/10 rounded-[28px] text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                Klaar voor de start?
              </h3>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
                Wij nemen wegens de intensiteit van dit traject maximaal 2 BarakahLaunch trajecten per maand aan. Plan direct een gratis kennismakingsgesprek om jouw project te bespreken.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="px-8 py-3.5 uppercase text-xs tracking-wider font-bold text-brand-dark">
                    Gesprek plannen
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_WHATSAPP || "31685546310"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  <span>WhatsApp contact</span>
                  <span>→</span>
                </a>
              </div>
            </GlassCard>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
