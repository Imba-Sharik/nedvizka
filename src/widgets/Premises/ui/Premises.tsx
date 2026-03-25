"use client";

import { useState } from "react";
import { Container, Reveal } from "@/shared/ui";

interface Premise {
  place: string;
  lot: string;
  area: number;
  type: string;
  price: number;
  status: "Забронировано" | "Свободно";
}

const premises: Premise[] = [
  { place: "МЕТМАШ", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "Парк-музей Коломенское", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Свободно" },
  { place: "МЕТМАШ", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "МЕТМАШ", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "Парк-музей Коломенское", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "МЕТМАШ", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "ДК Серп и Молот", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "ДK Серп и Молот", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Свободно" },
  { place: "ДK Серп и Молот", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "Парк-музей Коломенское", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "ДK Серп и Молот", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
  { place: "Парк-музей Коломенское", lot: "0117-54", area: 300, type: "Нежилое помещение", price: 100200, status: "Забронировано" },
];

const gridCols = "3.4fr 1fr 1.2fr 2.7fr 1fr 1.5fr 1.5fr";

const cellBase =
  "font-(family-name:--font-pt-mono) font-normal leading-4.75 text-[#0c0c0c] dark:text-white";

function FilterPill({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      className="relative flex items-center justify-center rounded-[68px] overflow-hidden"
      style={{ width: 69, height: 39 }}
    >
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
        style={{
          backdropFilter: "blur(22px)",
          opacity: 0.3,
        }}
      />
      <input
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="relative w-full h-full bg-transparent text-center font-sans text-[14px] font-medium leading-4.25 text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 border-0 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
      />
    </div>
  );
}

const fmt = (n: number) => n + "₽";

export function Premises() {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [areaFrom, setAreaFrom] = useState("");
  const [areaTo, setAreaTo] = useState("");
  const [filtered, setFiltered] = useState<Premise[]>(premises);

  const handleFilter = () => {
    const pf = priceFrom ? Number(priceFrom) : 0;
    const pt = priceTo ? Number(priceTo) : Infinity;
    const af = areaFrom ? Number(areaFrom) : 0;
    const at = areaTo ? Number(areaTo) : Infinity;

    setFiltered(
      premises.filter(
        (r) => r.price >= pf && r.price <= pt && r.area >= af && r.area <= at,
      ),
    );
  };

  return (
    <section style={{ marginTop: 'clamp(80px, 14.4vw, 208px)' }}>
      <Container style={{ paddingTop: 'clamp(80px, 8.9vw, 128px)', paddingBottom: 'clamp(80px, 8.9vw, 128px)' }}>
        {/* Title + Filter */}
        <Reveal className="flex flex-col gap-8 min-[1240px]:flex-row min-[1240px]:items-center min-[1240px]:justify-between">
          <h2
            className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white shrink-0"
            style={{ fontSize: "clamp(28px,2.65vw,53px)", lineHeight: "1.06" }}
          >
            Доступные помещения
          </h2>

          {/* Filter */}
          <div className="flex items-center gap-6 flex-wrap min-[1240px]:flex-nowrap">
            <div className="flex items-center gap-2.25">
              <span className="font-sans text-[14px] font-medium leading-4.25 text-black dark:text-white">
                Цена
              </span>
              <FilterPill value={priceFrom} placeholder="0" onChange={setPriceFrom} />
              <FilterPill value={priceTo} placeholder="1000" onChange={setPriceTo} />
            </div>
            <div className="flex items-center gap-2.25">
              <span className="font-sans text-[14px] font-medium leading-4.25 text-black dark:text-white">
                Площадь
              </span>
              <FilterPill value={areaFrom} placeholder="100" onChange={setAreaFrom} />
              <FilterPill value={areaTo} placeholder="150" onChange={setAreaTo} />
            </div>
            <button
              onClick={handleFilter}
              className="font-sans text-[14px] font-medium leading-4.25 text-black bg-white dark:bg-white dark:text-black rounded-[68px] px-6 cursor-pointer"
              style={{ height: 39 }}
            >
              Показать
            </button>
          </div>
        </Reveal>

        {/* Table */}
        <Reveal delay={0.15} className="mt-11 overflow-x-auto">
          <div style={{ minWidth: 1350 }}>
            {/* Column headers */}
            <div className="grid pb-3" style={{ gridTemplateColumns: gridCols }}>
              {["Площадка", "Лот", "Площадь", "Тип", "Цена", "Статус", ""].map(
                (col) => (
                  <span
                    key={col}
                    className="font-sans font-medium text-black dark:text-white"
                    style={{ opacity: 0.44, fontSize: 14 }}
                  >
                    {col}
                  </span>
                ),
              )}
            </div>

            {/* Rows */}
            {filtered.map((row, i) => (
              <div key={i}>
                <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
                <div
                  className="grid items-center py-5.5"
                  style={{ gridTemplateColumns: gridCols, fontSize: 16 }}
                >
                  <span className={cellBase}>{row.place}</span>
                  <span className={cellBase}>{row.lot}</span>
                  <span className={cellBase}>{row.area} м²</span>
                  <span className={cellBase}>{row.type}</span>
                  <span className={cellBase}>{fmt(row.price)}</span>
                  <span
                    className={`font-(family-name:--font-pt-mono) font-normal leading-4.75 ${
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
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="py-12 text-center font-sans text-[16px] text-black/50 dark:text-white/50">
                Помещения не найдены
              </div>
            )}

            {/* Bottom divider */}
            <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
          </div>
        </Reveal>

        <a
          href="#"
          className="block mt-9.5 opacity-40 dark:opacity-[0.37] font-sans text-[16px] leading-3.75 font-normal no-underline text-black dark:text-white"
        >
          Показать все
        </a>
      </Container>
    </section>
  );
}
