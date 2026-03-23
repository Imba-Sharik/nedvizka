import { Container } from "@/shared/ui";

const premises = [
  {
    place: "МЕТМАШ",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "Парк-музей Коломенское",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Свободно",
  },
  {
    place: "МЕТМАШ",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "МЕТМАШ",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "Парк-музей Коломенское",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "МЕТМАШ",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "ДК Серп и Молот",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "ДK Серп и Молот",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Свободно",
  },
  {
    place: "ДK Серп и Молот",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "Парк-музей Коломенское",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "ДK Серп и Молот",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
  {
    place: "Парк-музей Коломенское",
    lot: "0117-54",
    area: "300 м²",
    type: "Нежилое помещение",
    price: "100200₽",
    status: "Забронировано",
  },
];

const gridCols = "3.4fr 1fr 1.2fr 2.7fr 1fr 1.5fr 1.5fr";

const pill = (value: string) => (
  <div
    key={value}
    className="relative flex items-center justify-center font-sans text-[14px] font-medium leading-4.25 text-white rounded-[68px] overflow-hidden"
    style={{ width: 69, height: 39 }}
  >
    <div
      className="absolute inset-0"
      style={{
        background: "rgba(0,0,0,0.41)",
        backdropFilter: "blur(22px)",
        opacity: 0.3,
      }}
    />
    <span className="relative">{value}</span>
  </div>
);

const cellBase =
  "font-(family-name:--font-pt-mono) font-normal text-[20px] leading-4.75 text-[#0c0c0c] dark:text-white";

export function Premises() {
  return (
    <section className="mt-52">
      <Container className="py-20 lg:py-32">
        {/* Title + Filter */}
        <div className="flex flex-col gap-8 min-[1240px]:flex-row min-[1240px]:items-center min-[1240px]:justify-between">
          <h2
            className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white shrink-0"
            style={{ fontSize: "53px", lineHeight: "56px" }}
          >
            Доступные помещения
          </h2>

          {/* Filter */}
          <div className="flex items-center gap-6 flex-wrap min-[1240px]:flex-nowrap">
            <div className="flex items-center gap-2.25">
              <span className="font-sans text-[14px] font-medium leading-4.25 text-black dark:text-white">
                Цена
              </span>
              {pill("0")}
              {pill("1000")}
            </div>
            <div className="flex items-center gap-2.25">
              <span className="font-sans text-[14px] font-medium leading-4.25 text-black dark:text-white">
                Площадь
              </span>
              {pill("100")}
              {pill("150")}
            </div>
            <button
              className="font-sans text-[14px] font-medium leading-4.25 text-black bg-white dark:bg-white dark:text-black rounded-[68px] px-6"
              style={{ height: 39 }}
            >
              Показать
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-11">
          {/* Column headers */}
          <div
            className="hidden min-[1470px]:grid pb-3"
            style={{ gridTemplateColumns: gridCols }}
          >
            {["Площадка", "Лот", "Площадь", "Тип", "Цена", "Статус", ""].map(
              (col) => (
                <span
                  key={col}
                  className="font-sans text-[14px] font-medium text-black dark:text-white"
                  style={{ opacity: 0.44 }}
                >
                  {col}
                </span>
              ),
            )}
          </div>

          {/* Rows */}
          {premises.map((row, i) => (
            <div key={i}>
              <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
              <div
                className="hidden min-[1470px]:grid items-center py-5.5"
                style={{ gridTemplateColumns: gridCols }}
              >
                <span className={cellBase}>{row.place}</span>
                <span className={cellBase}>{row.lot}</span>
                <span className={cellBase}>{row.area}</span>
                <span className={cellBase}>{row.type}</span>
                <span className={cellBase}>{row.price}</span>
                <span
                  className={`font-(family-name:--font-pt-mono) font-normal text-[20px] leading-4.75 ${
                    row.status === "Забронировано"
                      ? "text-[#0c0c0c] dark:text-[#FF824A]"
                      : "text-[#0c0c0c] dark:text-[#E5FF82]"
                  }`}
                >
                  {row.status}
                </span>
                <button className={`${cellBase} text-right whitespace-nowrap`}>
                  Оставь заявку
                </button>
              </div>

              {/* Mobile row */}
              <div className="min-[1470px]:hidden flex flex-col gap-1 py-4">
                <span className={`${cellBase} font-medium`}>{row.place}</span>
                <div className="flex gap-6 flex-wrap">
                  <span className="font-sans text-[13px] text-black/50 dark:text-white/50">
                    {row.lot}
                  </span>
                  <span className="font-sans text-[13px] text-black/50 dark:text-white/50">
                    {row.area}
                  </span>
                  <span className="font-sans text-[13px] text-black/50 dark:text-white/50">
                    {row.price}
                  </span>
                  <span className="font-sans text-[13px] text-black/50 dark:text-white/50">
                    {row.status}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom divider */}
          <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
        </div>
      </Container>
    </section>
  );
}
