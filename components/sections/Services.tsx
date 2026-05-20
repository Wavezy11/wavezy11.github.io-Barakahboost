'use client'

import React from 'react'
import Link from 'next/link'
import { Layout, Code, Share2, Sparkles, Camera, Users, TrendingUp, Search, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import { GlassCard } from '@/components/ui/GlassCard'
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
    <section id="services" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
            Onze <GradientText>diensten</GradientText>
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            Met 8 specialistische disciplines bouwen we aan het succes en de meetbare groei van jouw merk.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout
            return (
              <GlassCard
                key={service.id}
                variants={fadeUp}
                className="p-5 sm:p-6 flex flex-col gap-3 items-center text-center sm:items-start sm:text-left justify-between h-[280px] w-full motion-mobile-static"
              >
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 glow-glow">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                <Link
                  href={`/diensten/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:gap-2 transition-all mt-6 justify-center sm:justify-start"
                >
                  <span>Meer info</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
