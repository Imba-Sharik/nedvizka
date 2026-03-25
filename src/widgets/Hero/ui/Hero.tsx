'use client'

import { useRef, useEffect } from 'react'
import { Reveal } from '@/shared/ui'

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const sectionRect = useRef<DOMRect | null>(null)

  useEffect(() => {
    const section = wrapperRef.current?.closest('section') as HTMLElement | null
    if (!section) return

    const ease = (v: number, half: number) => {
      const t = Math.min(Math.abs(v) / half, 1)
      const curved = t * t * (3 - 2 * t)
      return Math.sign(v) * curved * half
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      sectionRect.current = rect
      const rawX = e.clientX - rect.left - rect.width / 2
      mouse.current = {
        x: ease(rawX, rect.width / 2),
        y: (e.clientY - rect.top - rect.height / 2) * 0.5,
      }
    }

    section.addEventListener('mousemove', onMouseMove)

    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) {
      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = '1'
        wrapperRef.current.classList.add('gradient-mobile-drift')
      }
      return () => section.removeEventListener('mousemove', onMouseMove)
    }

    const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v))

    let rafId: number
    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.07
      pos.current.y += (mouse.current.y - pos.current.y) * 0.07

      if (wrapperRef.current) {
        const maxX = sectionRect.current ? sectionRect.current.width / 2 - 280 : 440
        const dx = clamp(pos.current.x, maxX)
        const dy = clamp(pos.current.y, 120)
        wrapperRef.current.style.transform = `translateX(calc(-50% + ${dx}px)) translateY(${dy}px)`
        wrapperRef.current.style.opacity = '1'
      }

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      section.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="pb-16 md:pb-0 relative md:h-[clamp(480px,44vw,630px)]">

      {/* Lines group — above gradient */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          top: "-38px",
          height: "930.8px",
          left: "calc((100% - 100vw) / 2 - 80.5px)",
          width: "calc(100vw + 119px)",
          opacity: 0.57,
        }}
      >
        {/* Block 1 — bottom-left to top-right, right-aligned */}
        <div
          className="absolute right-0"
          style={{ top: "47.5px", width: `${(1874 / 2039) * 100}%`, height: "569px" }}
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line1Gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C8C8C8" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>
            <line x1="0" y1="569" x2="100%" y2="0" stroke="url(#line1Gradient)" strokeWidth="1" />
          </svg>
        </div>

        {/* Block 2 — top-left to bottom-right, left-aligned */}
        <div
          className="absolute left-0"
          style={{ top: "24.5px", width: `${(1334 / 2039) * 100}%`, height: "517px" }}
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8C8C8" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>
            <line x1="0" y1="0" x2="100%" y2="517" stroke="url(#line2Gradient)" strokeWidth="1" />
          </svg>
        </div>

        {/* Block 3 — bottom-left to top-right, left offset 114.5px */}
        <div
          className="absolute"
          style={{ top: "0px", left: `${(114.5 / 2039) * 100}%`, width: `${(1220 / 2039) * 100}%`, height: "617px" }}
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <line x1="0" y1="617" x2="100%" y2="0" stroke="rgba(255,255,255,1)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Gradient blur — mouse following wrapper + CSS rotation inside */}
      <div
        ref={wrapperRef}
        className="absolute top-4 lg:top-20 left-1/2 lg:left-1/2 pointer-events-none z-0"
        style={{ willChange: 'transform', opacity: 0, transition: 'opacity 0.4s ease' }}
      >
        <div className="gradient-blur" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 mt-20 px-4 md:mt-0 md:px-6.5 md:absolute md:top-[45.6%] md:left-0 md:right-0 md:section-cols md:gap-5">
        <div className="hidden md:block md:col-span-2" /> {/* left spacer */}
        <Reveal className="md:col-span-1" start="top 95%">
          <div className="font-(family-name:--font-pt-mono) font-medium uppercase whitespace-pre-line md:whitespace-pre text-black dark:text-white text-[20px] md:text-[clamp(12px,1.7vw,27px)] leading-[1.35]">
            Формируем места,{"\n"}где эстетика, инфраструктура{"\n"}и предпринимательство{"\n"}соединяются в единую городскую{"\n"}среду.
          </div>
          <a
            href="#"
            className="block mt-9.5 opacity-40 dark:opacity-[0.37] font-sans text-[14px] leading-3.75 font-normal no-underline whitespace-pre text-black dark:text-white"
          >
            Подобрать{"\n"}площадь →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
