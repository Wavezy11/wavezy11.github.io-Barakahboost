'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Layout, Code, Share2, Sparkles, Camera, Users, TrendingUp, Search, CheckCircle2, ArrowLeft } from 'lucide-react'
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

interface PageProps {
  params: {
    slug: string
  }
}

export default function DienstDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon] || Layout

  return (
    <>
      <Navbar />
      <AmbientBackground />

      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back button */}
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-muted hover:text-brand-accent transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Terug naar diensten</span>
          </Link>

          {/* Main detail card */}
          <GlassCard className="p-8 sm:p-12 border-white/10 bg-brand-surface/40 rounded-[28px]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent glow-glow shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-accent font-bold font-mono">✦ ONZE DIENSTEN</span>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-brand-text mt-1">
                    {service.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Content info */}
            <div className="py-8 space-y-6">
              <h2 className="text-xl font-bold font-display text-brand-text">
                Wat houdt deze dienst in?
              </h2>
              <p className="text-brand-muted text-base leading-relaxed whitespace-pre-line">
                {service.description} Onze specialisten zorgen voor een naadloze uitvoering die aansluit bij de doelstellingen van jouw onderneming. Met oog voor detail en een focus op conversie tillen we jouw merk naar een hoger niveau.
              </p>
            </div>

            {/* Features/Checkmarks */}
            <div className="py-8 border-t border-white/5 space-y-6">
              <h2 className="text-xl font-bold font-display text-brand-text">
                Wat kun je verwachten?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-brand-text/90 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to action */}
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center bg-brand-surface2/10 p-6 rounded-2xl">
              <div>
                <h3 className="text-lg font-bold text-brand-text mb-1">Interesse in {service.title}?</h3>
                <p className="text-brand-muted text-xs sm:text-sm">Boek direct een gratis kennismakingsgesprek.</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto shrink-0">
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <Button className="w-full uppercase tracking-wider text-xs font-bold py-3 px-6 text-brand-dark">
                    Gesprek plannen
                  </Button>
                </Link>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_WHATSAPP || "31685546310"}`} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="secondary" className="w-full uppercase tracking-wider text-xs font-bold py-3 px-6">
                    App ons
                  </Button>
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
