import { Container } from "@/shared/ui";

export function About() {
  return (
    <section>
      <Container className="pb-20 lg:pb-32">
        {/* Divider */}
        <div
          className="w-full"
          style={{ height: "1px", backgroundColor: "#979797" }}
        />
        <div className="flex flex-col lg:section-cols lg:gap-5">
          {/* Block 1 — heading */}
          <div className="pt-10.5 lg:col-span-1">
            <p
              className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white whitespace-pre-line"
              style={{ fontSize: "clamp(28px,3.68vw,53px)", lineHeight: "1.06" }}
            >
              PLACEBO/25{"\n"}СОЗДАЕМ МЕСТА ДЛЯ{"\n"}БИЗНЕСА
            </p>
          </div>

          {/* Spacer — col 2 */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Col 3 — block 2 + block 3 */}
          <div className="flex flex-col justify-between mt-10 lg:mt-0 lg:pt-12.25 lg:col-span-1">
            {/* Block 2 — description */}
            <p
              className="font-(family-name:--font-pt-mono) font-normal text-black dark:text-white whitespace-pre-line"
              style={{ fontSize: "clamp(13px,1.32vw,19px)", lineHeight: "1.37", maxWidth: "369px" }}
            >
              {"Независимый российский арт-финансовый конгломерат, создающий новые городские пространства на пересечении архитектуры, гастрономии, культуры и бизнеса.\n\nПроекты PLACEBO/25 — это тщательно спроектированные пространства для брендов, которые ценят атмосферу, дизайн и безупречный сервис."}
            </p>

            {/* Block 3 — location */}
            <p
              className="font-(family-name:--font-pt-mono) font-normal text-black dark:text-white whitespace-pre-line mt-18"
              style={{ fontSize: "clamp(10px,0.9vw,13px)", lineHeight: "1.46", opacity: 0.44, width: "278px" }}
            >
              {"Москва. Россия\n2015—2026©"}
            </p>
          </div>
        </div>
      </Container>
    </section>

  );
}
