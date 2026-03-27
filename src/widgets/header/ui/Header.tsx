"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui";

const venues = [
  { name: "МЕТМАШ", href: "/venues/metmash" },
  { name: "ПАРК-МУЗЕЙ КОЛОМЕНСКОЕ", href: "/venues/park-muzey-kolomenskoe" },
  { name: "ДК СЕРП И МОЛОТ", href: "/venues/dk-serp-i-molot" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Elements outside header — no blend effect */}
      <div className="sticky top-0 z-51 h-0 pointer-events-none">
        {/* Desktop: Оставить заявку */}
        <button
          className="pointer-events-auto hidden lg:block absolute top-5.75 right-6.5 px-[clamp(8px,0.83vw,12px)] h-[clamp(26px,2.1vw,30px)] rounded-[7px] bg-white opacity-[0.82] text-[clamp(8px,0.97vw,14px)] font-medium text-black"
          style={{ animation: "slideDown 0.5s ease both" }}
        >
          Оставить заявку
        </button>
        {/* Mobile: Menu */}
        {!open && (
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
          className="text-[22px] lg:text-[26px] font-medium leading-7.75 text-black lg:col-span-2 lg:self-center"
        >
          Недвижка
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center justify-between lg:col-span-1">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="text-[clamp(8px,0.97vw,14px)] font-medium leading-4.25 opacity-[0.82] text-black outline-none cursor-pointer"
            >
              Все площадки
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-64">
              {venues.map((v) => (
                <DropdownMenuItem key={v.href}>
                  <Link href={v.href} className="font-medium w-full">{v.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center" style={{ gap: 'clamp(0px, 1.7vw, 24px)' }}>
            <button
              onClick={toggleTheme}
              className="w-7.5 h-7.5 flex items-center justify-center rounded-[7px] opacity-[0.82] text-black transition-colors"
              aria-label="Переключить тему"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </button>
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
                  key={v.href}
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
              onClick={() => setOpen(false)}
              className="w-full h-10 rounded-[7px] bg-black/5 dark:bg-white/10 text-[14px] font-medium text-page-text"
            >
              Оставить заявку
            </button>

            <button
              onClick={() => { toggleTheme(); setOpen(false); }}
              className="flex items-center gap-2 text-[14px] font-medium opacity-[0.82] text-page-text"
            >
              <svg className="hidden dark:block w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <svg className="block dark:hidden w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
              Сменить тему
            </button>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
