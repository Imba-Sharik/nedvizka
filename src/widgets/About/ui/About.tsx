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
        <div className="flex flex-col lg:flex-row">
          {/* Block 1 — heading */}
          <div
            className="pt-10.5 lg:w-143 lg:shrink-0"
          >
            <p
              className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white whitespace-pre-line"
              style={{ fontSize: "53px", lineHeight: "56px" }}
            >
              PLACEBO/25{"\n"}СОЗДАЕМ МЕСТА ДЛЯ{"\n"}БИЗНЕСА
            </p>
          </div>

          {/* Right column — block 2 + block 3 */}
          <div className="about-right-col flex flex-col justify-between mt-10 lg:mt-0 lg:pt-12.25">
            {/* Block 2 — description */}
            <p
              className="font-(family-name:--font-pt-mono) font-normal text-black dark:text-white whitespace-pre-line"
              style={{ fontSize: "19px", lineHeight: "26px", width: "369px", maxWidth: "100%" }}
            >
              {"Независимый российский арт-финансовый конгломерат, создающий новые городские пространства на пересечении архитектуры, гастрономии, культуры и бизнеса.\n\nПроекты PLACEBO/25 — это тщательно спроектированные пространства для брендов, которые ценят атмосферу, дизайн и безупречный сервис."}
            </p>

            {/* Block 3 — location */}
            <p
              className="font-(family-name:--font-pt-mono) font-normal text-black dark:text-white whitespace-pre-line mt-18"
              style={{ fontSize: "13px", lineHeight: "19px", opacity: 0.44, width: "278px" }}
            >
              {"Москва. Россия\n2015—2026©"}
            </p>
          </div>
        </div>
      </Container>
    </section>

  );
}
