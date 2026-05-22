'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cases, CaseStudy } from '@/lib/data'
import { ArrowRight, X } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Portfolio() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const ref = useScrollAnimation()

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedCase])

  if (cases.length < 3) return null;

  return (
    <>
      <section id="portfolio" ref={ref} className="relative py-24 lg:py-32 z-10 bg-[#0a1a14]">
        <div className="max-w-[1160px] mx-auto px-6 w-full">
          
          <div className="flex flex-col items-start mb-16 lg:mb-20 w-full">
            <span className="text-[#4aad73] font-bold text-xs tracking-widest uppercase mb-4">✦ Geselecteerd werk</span>
            <h2 
              className="text-[#f0f5f2] font-bold tracking-tight leading-[1.1] max-w-2xl"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
            >
              Cases die spreken, <br/><span className="text-[#8aab96]">resultaten die tellen.</span>
            </h2>
          </div>

          <div className="cases-grid">
            {cases.slice(0, 3).map((caseData, idx) => (
              <div 
                key={idx} 
                className="case-card" 
                onClick={() => setSelectedCase(caseData)}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={caseData.image} 
                  alt={caseData.title} 
                  style={{ objectPosition: caseData.imagePosition || 'center' }} 
                />
                <div className="case-card-overlay" />
                <div className="case-card-content">
                  <div className="case-card-badge">{caseData.stat}</div>
                  <div className="case-card-title">{caseData.title}</div>
                  <div className="case-card-label">{caseData.shortDescription}</div>
                  <div className="case-card-cta">Lees de case →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a1a14] border border-white/10 rounded-2xl shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[40vh] min-h-[300px]">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: selectedCase.imagePosition || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14] to-transparent" />
              </div>

              <div className="px-6 sm:px-10 pb-10 -mt-20 relative z-10">
                <span className="mb-4 inline-block bg-[#2d7a4f] text-[#f0f5f2] text-xs px-4 py-1.5 rounded-full font-bold">
                  {selectedCase.stat}
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                  {selectedCase.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedCase.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-white/50 bg-white/5 px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#8aab96] text-lg leading-relaxed mb-12 max-w-3xl">
                  {selectedCase.description}
                </p>

                {selectedCase.gallery && selectedCase.gallery.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCase.gallery.map((item, idx) => {
                      const isObj = typeof item !== 'string'
                      const type = isObj ? (item as any).type : 'image'
                      const src = isObj ? (item as any).src : item
                      
                      return (
                        <div key={idx} className={`relative rounded-xl overflow-hidden bg-white/5 ${isObj && (item as any).isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
                          {type === 'video' ? (
                            <video 
                              src={src} 
                              autoPlay 
                              muted 
                              loop 
                              playsInline 
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          ) : (
                            <img src={src} alt="Gallery image" className="w-full h-full object-cover" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}

                {selectedCase.projectLink && selectedCase.projectLink !== '#' && (
                  <div className="mt-12">
                    <a href={selectedCase.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#4aad73] text-black px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
                      Bekijk live project <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
