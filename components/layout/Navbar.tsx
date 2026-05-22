'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
    { name: 'Cases', href: '/#portfolio' },
    { name: 'BarakahLaunch', href: '/barakahlaunch' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ]

  const isHome = pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-[#0a1a14]/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Simple White SVG Logo */}
            <svg 
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42 74L42 42L33 48L50 25L59 34L54 39L54 52L42 74Z" fill="#f0f5f2" />
              <path d="M43 73L54 51L64 37L53 59L43 73Z" fill="#f0f5f2" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#f0f5f2]">
              BarakahBoost
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.includes('#') && isHome)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-[#f0f5f2]' : 'text-[#8aab96] hover:text-[#4aad73]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link 
              href={isHome ? '#contact' : '/#contact'}
              className="inline-block bg-[#2d7a4f] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[#4aad73] transition-colors"
            >
              Plan een kennismaking
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#f0f5f2] hover:text-[#4aad73] transition-colors p-1"
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
            className="fixed inset-0 z-30 flex flex-col justify-center px-6 pt-20"
            style={{
              backgroundColor: 'rgba(10, 26, 20, 0.98)',
              backdropFilter: 'blur(20px)'
            }}
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
                    className="text-2xl font-bold text-[#f0f5f2] hover:text-[#4aad73] transition-colors"
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
                <Link 
                  href={isHome ? '#contact' : '/#contact'} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full max-w-[280px] bg-[#2d7a4f] text-white py-4 rounded-md font-bold hover:bg-[#4aad73] transition-colors"
                >
                  Plan een kennismaking
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
