import { Container } from "@/shared/ui";
import Link from "next/link";


export function Footer() {
  return (
    <footer>
      {/* Top section */}
      <Container>
        <div className="w-full h-px bg-page-divider mb-6 lg:mb-8" />
        <div className="flex flex-col gap-6 lg:section-cols lg:gap-5 pb-6 lg:pb-8 items-start lg:items-center">
          {/* Logo — col-span-1 */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[20px] font-medium text-page-text lg:col-span-1"
          >
            <img src="/logo.svg" alt="" className="h-5.5 lg:h-6.5 w-auto -mt-1 dark:invert" />
            Недвижка
          </Link>

          {/* Social icons — col-span-1, centered */}
          <div className="flex items-center gap-3 lg:col-span-1 lg:justify-end">
            <a href="https://t.me/nedvizka" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <img src="/tg.svg" alt="Telegram" className="h-8 w-8 dark:invert" />
            </a>
            <a href="https://vk.com/nedvizka" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">
              <img src="/vk.svg" alt="VK" className="h-8 w-8 dark:invert" />
            </a>
            <a href="https://instagram.com/nedvizka" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/inst.svg" alt="Instagram" className="h-8 w-8 dark:invert" />
            </a>
          </div>

          {/* Contacts — col-span-1 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:col-span-1 lg:justify-end lg:items-center text-page-text"
            style={{ fontSize: "clamp(14px, 1.25vw, 18px)" }}
          >
            <a
              href="mailto:rent@nedvizka.ru"
              className="font-normal hover:opacity-70 transition-opacity"
            >
              rent@nedvizka.ru
            </a>
            <p className="font-normal">
              +7 999 120-19-21
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom strip */}
      <div>
        <Container>
          <div className="w-full h-px bg-page-divider" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-3 lg:py-4 text-[14px] font-normal leading-7">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-page-text opacity-[0.39]">
              <span>
                Недвижка® {new Date().getFullYear()}©
              </span>
              <Link
                href="/privacy"
                className="hover:opacity-70 transition-opacity"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/personal-data"
                className="hover:opacity-70 transition-opacity"
              >
                Обработка персональных данных
              </Link>
            </div>
            <span className="text-page-text opacity-[0.39]">
              Part of Placebo/25
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
