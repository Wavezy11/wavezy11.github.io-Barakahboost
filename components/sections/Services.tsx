'use client'

import React from 'react'
import Link from 'next/link'
import { Layout, Code, Share2, Sparkles, Camera, Users, TrendingUp, Search, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp, staggerContainer } from '@/lib/animations'

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
  return (
    <section id="services" className="relative py-[80px] lg:py-[120px] z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 lg:mb-24 w-full">
          <span className="section-label mb-6">✦ DIENSTEN</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-display font-bold leading-[1.1] tracking-tight mb-6">
            Onze <GradientText>expertise</GradientText>
          </h2>
          <p className="text-brand-muted text-[15px] sm:text-base leading-relaxed max-w-xl">
            Wij werken niet met standaard pakketjes. We zetten de exacte specialismen in die nodig zijn voor jouw specifieke groeidoelstelling.
          </p>
        </div>

        {/* 4x2 Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layout
            
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group flex flex-col justify-between"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '28px 24px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,200,130,0.35)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,200,130,0.08)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex flex-col items-start w-full">
                  <IconComponent className="w-[20px] h-[20px] text-[#00c882] mb-5" />
                  <h3 className="text-[16px] font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-brand-muted leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                <Link
                  href={`/diensten/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-[#00c882] hover:opacity-80 transition-all mt-6 w-fit"
                >
                  <span>Meer info</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
