'use client'

import React from 'react'
import Link from 'next/link'
import { Layout, Code, Share2, Sparkles, Camera, Users, TrendingUp, Search, ArrowRight, Zap } from 'lucide-react'
import { services } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

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

export function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32 z-10 bg-[#0a1a14]">
      <div className="max-w-[1160px] mx-auto px-6 w-full">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20 w-full">
          <span className="text-[#4aad73] font-bold text-xs tracking-widest uppercase mb-4">✦ Onze Expertise</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 text-[#f0f5f2]">
            Alles voor <span className="text-[#8aab96]">maximale impact.</span>
          </h2>
        </div>

        {/* 1. BarakahLaunch Featured Block (volle breedte) bovenaan */}
        <div className="barakahlaunch-featured">
          <div>
            <div className="barakahlaunch-badge">Populairste Keuze</div>
            <h3 className="barakahlaunch-title">BarakahLaunch</h3>
            <p className="barakahlaunch-desc">
              Ons flagship programma. Binnen 30 dagen een complete, hoog-converterende online aanwezigheid inclusief brand identity, website en content strategie.
            </p>
            <Link href="#contact" className="barakahlaunch-cta">Start je Launch →</Link>
          </div>
          <div className="hidden lg:flex relative h-full min-h-[240px] items-center justify-center">
            <div className="absolute inset-0 bg-[#4aad73]/10 rounded-full blur-3xl mix-blend-screen"></div>
            <Zap className="w-32 h-32 text-[#4aad73] opacity-80" />
          </div>
        </div>

        {/* 2. Overige diensten in een 3-kolom grid */}
        <div className="services-grid mt-12">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Layout
            return (
              <div key={i} className="service-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-card-icon">
                  <IconComponent className="w-full h-full" />
                </div>
                <h4 className="service-card-title">{service.title}</h4>
                <p className="service-card-desc">{service.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
