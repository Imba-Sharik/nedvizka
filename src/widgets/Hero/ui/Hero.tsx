'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export function HeroGradient() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const visible = useRef(true)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    // Высота зоны видимости: Hero + Cards (~1200px от top страницы)
    const maxScrollY = 1200

    const ease = (v: number, half: number) => {
      const t = Math.min(Math.abs(v) / half, 1)
      const curved = t * t * (3 - 2 * t)
      return Math.sign(v) * curved * half
    }

    const anchorY = 300

    const onMouseMove = (e: MouseEvent) => {
      const halfVW = window.innerWidth / 2
      const rawX = e.clientX - halfVW
      const rawY = (e.clientY + window.scrollY - anchorY) * 0.5
      mouse.current = {
        x: ease(rawX, halfVW),
        y: rawY,
      }
    }

    const onScroll = () => {
      const show = window.scrollY < maxScrollY
      if (show !== visible.current) {
        visible.current = show
        if (el) el.style.opacity = show ? '1' : '0'
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) {
      el.style.opacity = '1'
      el.classList.add('gradient-mobile-drift')
      return () => {
        document.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('scroll', onScroll)
      }
    }

    const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v))

    let rafId: number
    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.07
      pos.current.y += (mouse.current.y - pos.current.y) * 0.07

      if (el && visible.current) {
        const maxX = window.innerWidth / 2
        const dx = clamp(pos.current.x, maxX)
        // Ограничиваем Y: градиент не ниже низа 2-й секции в viewport
        const scrollOffset = window.scrollY
        const maxVisualY = maxScrollY - scrollOffset - 80
        const dy = Math.max(-150, Math.min(pos.current.y - scrollOffset * 0.5, maxVisualY))
        el.style.transform = `translateX(calc(-50% + ${dx}px)) translateY(${dy}px)`
        el.style.opacity = '1'
      }

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="fixed top-4 lg:top-20 left-1/2 pointer-events-none z-0"
      style={{ willChange: 'transform', opacity: 0, transition: 'opacity 0.3s ease' }}
    >
      <div className="gradient-blur" />
    </div>
  )
}

export function Hero() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        textRef.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: 'expo.out' }
      )
    } else if (textRef.current) {
      textRef.current.style.opacity = '1'
    }
  }, [])

  return (
    <section className="pb-16 md:pb-0 relative md:h-[clamp(480px,44vw,630px)] overflow-hidden">

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

      {/* Hero content */}
      <div className="relative z-20 mt-20 px-4 md:mt-0 md:px-6.5 md:absolute md:top-[45.6%] md:left-0 md:right-0 md:section-cols md:gap-5">
        <div className="hidden md:block md:col-span-2" /> {/* left spacer */}
        <div ref={textRef} className="md:col-span-1" style={{ opacity: 0 }}>
          <div className="font-(family-name:--font-pt-mono) font-medium uppercase whitespace-pre-line md:whitespace-pre text-black dark:text-white text-[20px] md:text-[clamp(12px,1.7vw,27px)] leading-[1.35]">
            Формируем места,{"\n"}где эстетика, инфраструктура{"\n"}и предпринимательство{"\n"}соединяются в единую городскую{"\n"}среду.
          </div>
          <a
            href="/premises"
            className="block mt-9.5 opacity-40 dark:opacity-[0.37] font-sans text-[14px] leading-3.75 font-normal no-underline text-black dark:text-white"
          >
            Подобрать площадь →
          </a>
        </div>
      </div>
    </section>
  );
}
