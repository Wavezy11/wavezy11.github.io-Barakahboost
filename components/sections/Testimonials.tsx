'use client'

import React from 'react'
import { testimonials } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const getLogoForCompany = (companyName: string) => {
  const normalized = companyName.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (normalized.includes('spaolivia')) return '/partners/1.png'
  if (normalized.includes('systematex')) return '/partners/2.png'
  if (normalized.includes('ziya')) return '/partners/3.png'
  return '/partners/4.png' // Default logo
}

export function Testimonials() {
  const ref = useScrollAnimation()

  return (
    <section className="relative py-24 lg:py-32 z-10 bg-[#0a1a14]">
      <div className="max-w-[1160px] mx-auto px-6 w-full" ref={ref}>
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20 w-full">
          <span className="text-[#4aad73] font-bold text-xs tracking-widest uppercase mb-4">✦ Klantenverhalen</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#f0f5f2] max-w-2xl">
            Wat onze <span className="text-[#8aab96]">klanten zeggen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => {
            const logoPath = getLogoForCompany(t.company)
            
            return (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="testimonial-quote-mark">"</span>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <img src={logoPath} alt="Logo" className="testimonial-logo" />
                  <div>
                    <div className="testimonial-author-name">{t.author}</div>
                    <div className="testimonial-author-role">{t.company}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
