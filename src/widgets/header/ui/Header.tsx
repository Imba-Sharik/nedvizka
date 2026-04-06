"use client";

import { useState } from "react";
// import { useTheme } from "next-themes";
import Link from "next/link";
import { useBooking } from "@/shared/ui/booking-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui";

const venues = [
  { name: "МЕТМАШ", href: "/venues/metmash" },
  { name: "ПАРК-МУЗЕЙ КОЛОМЕНСКОЕ", href: "/venues/park-muzey-kolomenskoe" },
  { name: "ДК СЕРП И МОЛОТ", href: "/venues/dk-serp-i-molot" },
  { name: "ПАРК ГОРЬКОГО", href: "/venues/park-gorkogo" },
  { name: "ВИШНЁВЫЙ САД", href: "/venues/vishneviy-sad" },
];

// const SunIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//     <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
//     <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.93 3.93l1.41 1.41M12.66 12.66l1.41 1.41M3.93 14.07l1.41-1.41M12.66 5.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//   </svg>
// );

// const MoonIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//     <path d="M15.5 9.84a6.5 6.5 0 1 1-7.34-7.34A5 5 0 0 0 15.5 9.84Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

export function Header() {
  const [open, setOpen] = useState(false);
  // const { resolvedTheme, setTheme } = useTheme();
  const { openBooking, isOpen: bookingOpen } = useBooking();

  // const isDark = resolvedTheme === "dark";

  // const toggleTheme = () => {
  //   setTheme(resolvedTheme === "dark" ? "light" : "dark");
  // };

  return (
    <>
      {/* Elements outside header — no blend effect */}
      <div className="sticky top-0 z-51 h-0 pointer-events-none">
        {/* Desktop: Оставить заявку */}
        {!bookingOpen && (
        <button
          onClick={() => openBooking()}
          className="pointer-events-auto hidden lg:block absolute top-5.75 right-6.5 px-[clamp(8px,0.83vw,12px)] h-[clamp(26px,2.1vw,30px)] rounded-[7px] bg-white opacity-[0.82] text-[clamp(8px,0.97vw,14px)] font-medium text-black"
        >
          Оставить заявку
        </button>
        )}
        {/* Mobile: Menu */}
        {!open && !bookingOpen && (
          <button
            onClick={() => setOpen(true)}
            className="pointer-events-auto lg:hidden absolute top-4 right-4 px-3 h-7.5 rounded-[7px] bg-white text-[14px] font-medium uppercase tracking-wide text-black opacity-[0.82]"
          >
            Menu
          </button>
        )}
      </div>

      <header className="sticky top-0 z-50 mix-blend-exclusion invert flex items-center justify-between py-4 px-4 lg:py-5.75 lg:pl-6.5 lg:pr-6.5 lg:section-cols lg:gap-5 lg:items-center lg:justify-normal" style={{ animation: "slideDown 0.5s ease both" }}>
        <Link
          href="/"
          className="flex items-center gap-2 text-[22px] lg:text-[26px] font-medium leading-7.75 text-black lg:col-span-2 lg:self-center"
        >
          <img src="/logo.svg" alt="" className="h-5.5 lg:h-6.5 w-auto -mt-1" />
          Недвижка
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center justify-between lg:col-span-1">
          <Link
            href="/premises"
            className="text-[clamp(8px,0.97vw,14px)] font-medium leading-4.25 opacity-[0.82] text-black"
          >
            Все объекты
          </Link>

          <div className="flex items-center" style={{ gap: 'clamp(0px, 1.7vw, 24px)' }}>
            {/* <button
              onClick={toggleTheme}
              className="opacity-[0.82] text-black cursor-pointer"
              aria-label="Сменить тему"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button> */}
            <p
              className="text-[clamp(8px,0.97vw,14px)] font-medium leading-4.25 opacity-[0.82] text-black"
            >
              +7 495 120-19-05
            </p>
            {/* Invisible spacer for button space */}
            <span className="invisible px-[clamp(8px,0.83vw,12px)] h-[clamp(26px,2.1vw,30px)] text-[clamp(8px,0.97vw,14px)] font-medium">
              Оставить заявку
            </span>
          </div>
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="flex flex-col gap-6 p-6 pt-12">
            <SheetHeader>
              <SheetTitle className="sr-only">Меню</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-[16px] font-medium text-page-text opacity-[0.82] py-2"
              >
                Главная
              </Link>
              {venues.map((v) => (
                <Link
                  key={v.name}
                  href={v.href}
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-medium text-page-text opacity-[0.82] py-2"
                >
                  {v.name}
                </Link>
              ))}
            </div>

            <p className="text-[14px] font-medium opacity-[0.82] text-page-text">
              +7 495 120-19-05
            </p>

            <button
              onClick={() => { setOpen(false); openBooking(); }}
              className="w-full h-10 rounded-[7px] bg-black/5 dark:bg-white/10 text-[14px] font-medium text-page-text"
            >
              Оставить заявку
            </button>

            {/* <button
              onClick={toggleTheme}
              className="opacity-[0.82] text-page-text cursor-pointer self-start"
              aria-label="Сменить тему"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button> */}
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
