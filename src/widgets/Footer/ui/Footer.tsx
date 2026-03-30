import { Container } from "@/shared/ui";

export function Footer() {
  return (
    <footer>
      <Container style={{ paddingBottom: "clamp(48px, 5.5vw, 80px)" }}>
        <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)] mb-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <span
            className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white"
            style={{ fontSize: "clamp(13px,1vw,15px)" }}
          >
            Nedvizka
          </span>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="mailto:info@nedvizka.ru"
              className="font-(family-name:--font-pt-mono) text-[13px] text-black/50 dark:text-white/50 no-underline hover:text-black/80 dark:hover:text-white/80 transition-colors"
            >
              info@nedvizka.ru
            </a>
            <a
              href="/privacy"
              className="font-(family-name:--font-pt-mono) text-[13px] text-black/50 dark:text-white/50 no-underline hover:text-black/80 dark:hover:text-white/80 transition-colors"
            >
              Политика обработки данных
            </a>
          </div>
          <span className="font-(family-name:--font-pt-mono) text-[13px] text-black/30 dark:text-white/30">
            © {new Date().getFullYear()}
          </span>
        </div>
      </Container>
    </footer>
  );
}
