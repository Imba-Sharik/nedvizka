import { Container } from "@/shared/ui";

export function About() {
  return (
    <section>
      <Container className="pb-20 sm:pb-32">
        {/* Divider */}
        <div
          className="w-full"
          style={{ height: "1px", backgroundColor: "#979797" }}
        />
        <div className="flex flex-col sm:section-cols sm:gap-5">
          {/* Block 1 — heading */}
          <div className="pt-10.5 sm:col-span-1">
            <p
              className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white whitespace-pre-line"
              style={{
                fontSize: "clamp(20px,2.65vw,53px)",
                lineHeight: "1.06",
              }}
            >
              PLACEBO/25{"\n"}СОЗДАЕМ МЕСТА ДЛЯ БИЗНЕСА
            </p>
          </div>

          {/* Spacer — col 2 */}
          <div className="hidden sm:block sm:col-span-1" />

          {/* Col 3 — block 2 + block 3 */}
          <div className="flex flex-col mt-10 sm:mt-0 sm:pt-12.25 sm:col-span-1 sm:self-start min-w-0">
            {/* Block 2 — description */}
            <p
              className="font-(family-name:--font-pt-mono) font-normal text-black dark:text-white whitespace-pre-line wrap-break-word min-w-0 w-full sm:max-w-92.25"
              style={{
                fontSize: "clamp(12px,0.95vw,19px)",
                lineHeight: "1.37",
              }}
            >
              {
                "Независимый российский арт-финансовый конгломерат, создающий новые городские пространства на пересечении архитектуры, гастрономии, культуры и бизнеса.\n\nПроекты PLACEBO/25 — это тщательно спроектированные пространства для брендов, которые ценят атмосферу, дизайн и безупречный сервис."
              }
            </p>

            {/* Block 3 — location */}
            <p
              className="font-(family-name:--font-pt-mono) font-normal text-black dark:text-white whitespace-pre-line mt-18"
              style={{
                fontSize: "clamp(9px,0.65vw,13px)",
                lineHeight: "1.46",
                opacity: 0.44,
                width: "278px",
              }}
            >
              {"Москва. Россия\n2015—2026©"}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
