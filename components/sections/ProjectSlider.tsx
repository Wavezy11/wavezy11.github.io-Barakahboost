'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Aftermovie Abu Tayyimah Event",
    category: "Event Videografie",
    tags: ["Videografie", "Social Media Content"],
    image: "/portfolio/abu-taymiyyah/hero-edit.jpg",
    stat: "2.5M+",
    statLabel: "weergaven",
    color: "#2d7d6f"
  },
  {
    id: 2,
    title: "Nuurfades — Fotografie & Editwerk",
    category: "Fotografie",
    tags: ["Portretfotografie", "Fotobewerking", "Content Creatie"],
    image: "/portfolio/nuurfades/nuurfades-main.jpg",
    stat: "Complete",
    statLabel: "rebrand",
    color: "#1a5c52"
  },
  {
    id: 3,
    title: "Livzorg — Zorgfotografie",
    category: "Portretfotografie",
    tags: ["Portretfotografie", "Branding"],
    image: "/portfolio/liv-zorg/main-foto.jpg",
    stat: "300%",
    statLabel: "meer sales",
    color: "#0a3d35"
  },
]

export function ProjectSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goTo = useCallback((index: number, dir = 1) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % projects.length, 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + projects.length) % projects.length, -1)
  }, [current, goTo])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }),
  }

  const project = projects[current]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        <div className="text-center mb-12">
          <span className="glass-badge mb-4 inline-block">✦ OUR WORK</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text">
            Ons <span className="gradient-text">Werk</span>
          </h2>
          <p className="text-brand-muted mt-3 max-w-xl mx-auto">
            Een selectie van onze meest impactful projecten.
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden glass"
          style={{ minHeight: '480px' }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col lg:flex-row"
            >
              <div className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={current === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-dark/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent lg:hidden" />

                <div className="absolute top-4 left-4 glass rounded-xl px-4 py-2">
                  <span className="font-mono font-bold text-xl text-brand-accent">
                    {project.stat}
                  </span>
                  <span className="text-brand-muted text-sm ml-2">
                    {project.statLabel}
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:p-12 lg:w-2/5 bg-brand-dark/90 lg:bg-transparent">
                <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
                  {project.category}
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-text leading-tight mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass text-brand-muted text-xs px-3 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-brand-muted text-sm">
                  <span className="font-mono text-brand-accent font-bold">
                    {String(current + 1).padStart(2, '0')}
                  </span>
                  <span>/</span>
                  <span>{String(projects.length).padStart(2, '0')}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/10 transition-all duration-200 text-brand-text min-h-[44px] min-w-[44px]"
            aria-label="Vorig project"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/10 transition-all duration-200 text-brand-text min-h-[44px] min-w-[44px]"
            aria-label="Volgend project"
          >
            →
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`transition-all duration-300 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center`}
              aria-label={`Ga naar project ${i + 1}`}
            >
              <div className={`${i === current ? 'w-8 h-2 bg-brand-accent' : 'w-2 h-2 bg-white/20 hover:bg-white/40'} rounded-full`} />
            </button>
          ))}
        </div>

        <div className="hidden sm:flex gap-3 mt-6 overflow-x-auto pb-2">
          {projects.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden transition-all duration-300 border-2 ${i === current ? 'border-brand-accent scale-105' : 'border-white/10 opacity-50 hover:opacity-80'}`}
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
