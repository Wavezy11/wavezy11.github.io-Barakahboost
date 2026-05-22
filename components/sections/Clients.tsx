'use client'

import React from 'react'
import Image from 'next/image'

export function Clients() {
  // We use the local partners folder for logos
  const partners = [
    { name: "Partner 1", logoPath: "/partners/1.png" },
    { name: "Partner 2", logoPath: "/partners/2.png" },
    { name: "Partner 3", logoPath: "/partners/3.png" },
    { name: "Partner 4", logoPath: "/partners/4.png" },
    { name: "Partner 5", logoPath: "/partners/5.png" }
  ]

  // Duplicate items a few times for smooth infinite scroll
  const marqueeItems = [...partners, ...partners, ...partners, ...partners, ...partners]

  return (
    <section className="relative py-20 bg-[#071412] border-y border-white/5 overflow-hidden z-10 section-animate">
      <div className="max-w-[1160px] mx-auto px-6 mb-12 text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8aab96]">
          Vertrouwd door de nieuwste generatie merken
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex items-center overflow-hidden py-4 select-none group">
        {/* Left & Right Shadow Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#071412] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#071412] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Inner Container */}
        <div className="flex gap-16 min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused]">
          {marqueeItems.map((client, idx) => (
            <div 
              key={`${client.name}-${idx}`} 
              className="relative w-32 h-16 shrink-0 transition-all duration-300 opacity-40 hover:opacity-100 flex items-center justify-center grayscale hover:grayscale-0"
            >
              <Image
                src={client.logoPath}
                alt={client.name}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
