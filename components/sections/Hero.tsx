'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Hero() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="relative w-full min-h-[100dvh] flex items-center pt-28 lg:pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-[1160px] mx-auto w-full z-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-start w-full lg:w-[55%]">
          {/* Urgency Badge */}
          <div className="mb-8" style={{ transitionDelay: '0s', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="inline-flex items-center gap-3 bg-[#0f2318] border border-[#2d7a4f]/30 px-4 py-2 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4aad73] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4aad73]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4aad73]">
                3 BOOSTS BESCHIKBAAR
              </span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ transitionDelay: '0.1s', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <h1 
              className="font-bold text-[#f0f5f2] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(48px, 6vw, 84px)', letterSpacing: '-0.02em' }}
            >
              Jouw partner <br/> in groei.
            </h1>
          </div>

          {/* Subtext */}
          <p
            style={{ transitionDelay: '0.2s', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
            className="text-[#8aab96] text-[17px] leading-[1.6] max-w-[480px] mb-10"
          >
            Wij zijn niet zomaar een bureau, wij zijn de motor achter jouw merk. 
            Van killer content tot schaalbare strategieën. Binnen 30 dagen live.
          </p>

          {/* CTAs */}
          <div
            style={{ transitionDelay: '0.3s', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            <Link 
              href="#contact"
              className="bg-[#2d7a4f] text-white px-8 py-4 rounded-md font-bold text-[15px] hover:bg-[#4aad73] transition-colors text-center shadow-[0_0_20px_rgba(45,122,79,0.3)]"
            >
              Plan een gratis gesprek
            </Link>
            <Link 
              href="#portfolio"
              className="bg-[#0f2318] text-[#f0f5f2] border border-white/10 px-8 py-4 rounded-md font-bold text-[15px] hover:bg-white/5 transition-colors text-center"
            >
              Bekijk cases
            </Link>
          </div>

          {/* Social Proof (FIX 2) */}
          <div 
            className="hero-social-proof"
            style={{ transitionDelay: '0.4s', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <div className="hero-social-proof-logos">
              <img src="/partners/1.png" alt="Client 1" />
              <img src="/partners/2.png" alt="Client 2" />
              <img src="/partners/3.png" alt="Client 3" />
              <img src="/partners/4.png" alt="Client 4" />
            </div>
            <div>
              <div className="hero-social-proof-stars">★★★★★</div>
              <div className="hero-social-proof-text">
                Vertrouwd door <strong>25+ merken</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Video/Visual (FIX 1) */}
        <div 
          className="w-full lg:w-[45%] relative"
          style={{ transitionDelay: '0.2s', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
        >
          {/* Ambient Glow */}
          <div className="hero-image-glow"></div>
          
          {/* Container with styling & overlays */}
          <div className="hero-image-container aspect-[4/5] w-full">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
              src="/videos/Recap-Abu%20Taymiyyah%20event.mp4"
            />
            
            {/* Floating label inside video */}
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Abu Tayyimah Event
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
