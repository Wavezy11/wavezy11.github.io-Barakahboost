'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'BarakahLaunch', href: '/barakahlaunch' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ]

  const isHome = pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'bg-transparent py-6'
        }`}
        style={isScrolled ? {
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(10,10,10,0.8)'
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <svg 
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 animate-glow-pulse" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42 74L42 42L33 48L50 25L59 34L54 39L54 52L42 74Z" fill="white" />
              <path d="M43 73L54 51L64 37L53 59L43 73Z" fill="white" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-brand-gradient bg-brand-gradient bg-clip-text text-transparent">
              BarakahBoost
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-bold transition-colors duration-300 uppercase tracking-widest overflow-hidden group ${
                    isActive ? 'text-brand-accent' : 'text-brand-text hover:text-brand-accent'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-brand-accent transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href={isHome ? '#boek-gesprek' : '/#boek-gesprek'}>
              <Button className="px-8 py-3.5 text-xs text-brand-dark uppercase tracking-wider font-bold">
                Gratis gesprek boeken
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-brand-text hover:text-brand-accent transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-brand-dark/95 backdrop-blur-20 flex flex-col justify-center px-6 pt-20"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex justify-center"
              >
                <Link href={isHome ? '#boek-gesprek' : '/#boek-gesprek'} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full max-w-[280px] text-brand-dark uppercase tracking-wider text-sm py-4">
                    Gratis gesprek boeken
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
