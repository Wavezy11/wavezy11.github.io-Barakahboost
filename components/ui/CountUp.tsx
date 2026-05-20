'use client'

import React, { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function CountUp({ end, duration = 1500, suffix = '', prefix = '' }: CountUpProps) {
  const [value, setValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)
            const currentValue = percentage * end

            setValue(currentValue)

            if (percentage < 1) {
              requestAnimationFrame(animate)
            } else {
              setValue(end)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [end, duration, hasAnimated])

  const formatNumber = (num: number) => {
    return Math.round(num).toLocaleString('nl-NL')
  }

  return (
    <span ref={elementRef} className="font-mono">
      {prefix}{formatNumber(value)}{suffix}
    </span>
  )
}
