'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, Play, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cases, CaseStudy, GalleryItem } from '@/lib/data'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useIsMobile } from '@/lib/hooks'

export function Portfolio() {
  const isMobile = useIsMobile()
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null)
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0)

  const openModal = (c: CaseStudy) => {
    setActiveCase(c)
    setActiveMediaIndex(0)
  }

  const closeModal = () => {
    setActiveCase(null)
  }

  return (
    <section id="portfolio" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
            Ons <GradientText>werk</GradientText>
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            Ontdek een selectie van onze recente cases en bekijk hoe we impact maken.
          </p>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={isMobile ? {} : staggerContainer}
          initial={isMobile ? "animate" : "initial"}
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {cases.map((item) => (
            <motion.div
              key={item.id}
              variants={isMobile ? {} : fadeUp}
              onClick={() => openModal(item)}
              className="group cursor-pointer"
            >
              <GlassCard className="p-0 overflow-hidden border border-white/5 bg-white/[0.01] flex flex-col h-full rounded-[24px]">
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-brand-surface2 rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: item.imagePosition || 'center' }}
                  />
                  {/* Subtle Accent Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                  
                  {/* Hover visual cue */}
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-brand-accent/25 border border-brand-accent/40 flex items-center justify-center text-brand-accent shadow-[0_0_20px_rgba(62,207,178,0.3)]">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-brand-dark/75 border-white/10 text-brand-accent">
                      {item.stat}
                    </Badge>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-brand-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold font-display text-brand-text mb-2 group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">
                      {item.shortDescription}
                    </p>
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent mt-6">
                    Case bekijken &rarr;
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-dark/90 backdrop-blur-20 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="glass border border-white/10 rounded-[30px] w-full max-w-5xl overflow-hidden bg-brand-surface/90 shadow-2xl relative grid grid-cols-1 lg:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 z-20 text-brand-muted hover:text-brand-accent transition-colors bg-brand-dark/50 p-2.5 rounded-full border border-white/10"
                aria-label="Sluit modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Media Player */}
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[650px] bg-black flex items-center justify-center overflow-hidden">
                {activeCase.gallery[activeMediaIndex] && (
                  typeof activeCase.gallery[activeMediaIndex] === 'string' ? (
                    <Image
                      src={activeCase.gallery[activeMediaIndex] as string}
                      alt={activeCase.title}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  ) : (
                    (activeCase.gallery[activeMediaIndex] as GalleryItem).type === 'video' ? (
                      <video
                        src={(activeCase.gallery[activeMediaIndex] as GalleryItem).src}
                        poster={(activeCase.gallery[activeMediaIndex] as GalleryItem).thumbnail}
                        controls
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Image
                        src={(activeCase.gallery[activeMediaIndex] as GalleryItem).src}
                        alt={activeCase.title}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    )
                  )
                )}

                {/* Media Selector (if multiple items) */}
                {activeCase.gallery.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {activeCase.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveMediaIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeMediaIndex === idx
                            ? 'bg-brand-accent w-6'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Case Info */}
              <div className="p-8 sm:p-10 flex flex-col justify-between h-full max-h-[650px] overflow-y-auto">
                <div className="space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-brand-accent/15 border-brand-accent/30 text-brand-accent">
                      {activeCase.stat}
                    </Badge>
                    {activeCase.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-brand-muted bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-brand-text">
                    {activeCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-muted text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {activeCase.description}
                  </p>
                </div>

                {/* Footer buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/5">
                  {activeCase.projectLink && (
                    <a
                      href={activeCase.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full text-brand-dark uppercase tracking-wider text-xs py-3.5">
                        <span className="flex items-center justify-center gap-1.5 font-bold">
                          Bekijk live project <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </Button>
                    </a>
                  )}
                  <Button variant="secondary" onClick={closeModal} className="flex-1 uppercase tracking-wider text-xs py-3.5 font-bold">
                    Sluiten
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
