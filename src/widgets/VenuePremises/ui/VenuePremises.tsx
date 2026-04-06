"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal, useBooking } from "@/shared/ui";
import { allPremises } from "@/widgets/Premises";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/shared/ui/hover-card";

type PremiseStatus = "Свободно" | "Забронировано" | "Лист ожидания";

const gridCols = "1fr 1fr 1.5fr 0.8fr 1.5fr";

const cellBase =
  "font-(family-name:--font-pt-mono) font-normal leading-4.75 text-[#0c0c0c] dark:text-white";

const statusColor: Record<PremiseStatus, string> = {
  "Свободно":      "text-[#0c0c0c] dark:text-[#E5FF82]",
  "Забронировано":         "text-[#B73B3B] dark:text-[#FF824A]",
  "Лист ожидания": "text-[#0c0c0c] dark:text-[#FFD966]",
};

const fmtPrice = (price: number | null) =>
  price !== null ? `${price.toLocaleString("ru-RU")} ₽` : "—";

const fmtArea = (area: number | null) =>
  area !== null ? `${area} м²` : "—";

const COLS = ["Наименование", "Площадь", "Стоимость (мес)", "Статус", ""];
const SORTABLE: Record<string, "area" | "price"> = {
  "Площадь": "area",
  "Стоимость (мес)": "price",
};

interface VenuePremisesProps {
  venueName: string;
}

export function VenuePremises({ venueName }: VenuePremisesProps) {
  const venuePremises = allPremises.filter((p) => p.location === venueName);
  const { openBooking } = useBooking();

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [areaFrom, setAreaFrom] = useState("");
  const [areaTo, setAreaTo] = useState("");
  const [filtered, setFiltered] = useState(venuePremises);
  const [sortKey, setSortKey] = useState<"area" | "price" | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleFilter = () => {
    const pf = priceFrom ? Number(priceFrom) : 0;
    const pt = priceTo ? Number(priceTo) : Infinity;
    const af = areaFrom ? Number(areaFrom) : 0;
    const at = areaTo ? Number(areaTo) : Infinity;

    setFiltered(
      venuePremises.filter((r) => {
        const priceOk = r.price !== null ? r.price >= pf && r.price <= pt : true;
        const areaOk  = r.area  !== null ? r.area  >= af && r.area  <= at : true;
        return priceOk && areaOk;
      }),
    );
  };

  const handleSort = (key: "area" | "price") => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = sortKey
    ? [...filtered].sort((a, b) => {
        const av = a[sortKey] ?? -Infinity;
        const bv = b[sortKey] ?? -Infinity;
        return sortDir === "asc" ? av - bv : bv - av;
      })
    : filtered;

  return (
    <Container id="premises" className="pt-20 sm:pt-49">
      {/* Title + Filter */}
      <Reveal className="flex flex-col gap-8 min-[1240px]:flex-row min-[1240px]:items-center min-[1240px]:justify-between">
        <h2
          className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white shrink-0"
          style={{ fontSize: "clamp(24px,3.68vw,53px)", lineHeight: "1.2" }}
        >
          Доступные помещения
        </h2>

        {/* Mobile filters */}
        <div className="flex flex-col gap-3 min-[750px]:hidden w-full">
          <div className="flex items-center justify-between">
            <FilterGroup label="Цена" from={priceFrom} to={priceTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setPriceFrom} onToChange={setPriceTo} />
            <FilterGroup label="Площадь" from={areaFrom} to={areaTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setAreaFrom} onToChange={setAreaTo} />
          </div>
          <button
            onClick={handleFilter}
            className="font-sans text-[14px] font-medium leading-4.25 text-black bg-white dark:bg-white dark:text-black rounded-[68px] px-6 cursor-pointer w-full"
            style={{ height: 39 }}
          >
            Показать
          </button>
        </div>

        {/* Desktop filters */}
        <div className="hidden min-[750px]:flex items-center gap-6">
          <FilterGroup label="Цена" from={priceFrom} to={priceTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setPriceFrom} onToChange={setPriceTo} />
          <FilterGroup label="Площадь" from={areaFrom} to={areaTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setAreaFrom} onToChange={setAreaTo} />
          <button
            onClick={handleFilter}
            className="font-sans text-[14px] font-medium leading-4.25 text-black bg-white dark:bg-white dark:text-black rounded-[68px] px-6 cursor-pointer"
            style={{ height: 39 }}
          >
            Показать
          </button>
        </div>
      </Reveal>

      {/* Desktop table */}
      <Reveal delay={0.15} className="mt-11 hidden min-[750px]:block">
        <div>
          <div className="grid pb-3" style={{ gridTemplateColumns: gridCols }}>
            {COLS.map((col) => {
              const key = SORTABLE[col];
              if (key) {
                const active = sortKey === key;
                return (
                  <button
                    key={col}
                    onClick={() => handleSort(key)}
                    className="flex items-center gap-1.5 font-sans font-medium text-black dark:text-white cursor-pointer"
                    style={{ opacity: active ? 0.7 : 0.44, fontSize: 14 }}
                  >
                    {col}
                    <svg
                      width="8" height="10" viewBox="0 0 8 10" fill="none"
                      className="shrink-0 transition-transform"
                      style={{ transform: active && sortDir === "desc" ? "rotate(180deg)" : "none" }}
                    >
                      <path d="M4 9V1M4 1L1 4M4 1L7 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                );
              }
              return (
                <span
                  key={col}
                  className="font-sans font-medium text-black dark:text-white"
                  style={{ opacity: 0.44, fontSize: 14 }}
                >
                  {col}
                </span>
              );
            })}
          </div>

          {sorted.map((row, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger render={<div />}>
                <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
                <div
                  className="grid items-center py-5.5 -mx-3 px-3 rounded-lg transition-colors hover:bg-black/3 dark:hover:bg-white/4"
                  style={{ gridTemplateColumns: gridCols, fontSize: 16 }}
                >
                  <span className={cellBase}>{row.name}</span>
                  <span className={cellBase}>{fmtArea(row.area)}</span>
                  <span className={cellBase}>{fmtPrice(row.price)}</span>
                  <span className={`font-(family-name:--font-pt-mono) font-normal leading-4.75 ${statusColor[row.status]}`}>
                    {row.status}
                  </span>
                  <button
                    onClick={() => openBooking({ venueName: row.location, lotId: row.name })}
                    className={`${cellBase} text-right whitespace-nowrap`}
                  >
                    Оставить заявку
                  </button>
                </div>
              </HoverCardTrigger>
              <HoverCardContent side="top" align="start" sideOffset={8} alignOffset={280} className="w-auto p-1.5">
                <Image
                  src="/premises/premises-preview-default.webp"
                  alt={row.name}
                  width={150}
                  height={150}
                  unoptimized
                  className="rounded-md object-cover"
                />
              </HoverCardContent>
            </HoverCard>
          ))}

          {sorted.length === 0 && (
            <div className="py-12 text-center font-sans text-[16px] text-black/50 dark:text-white/50">
              Помещения не найдены
            </div>
          )}

          <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
        </div>
      </Reveal>

      {/* Mobile cards */}
      <Reveal delay={0.15} className="mt-8 flex flex-col min-[750px]:hidden">
        {sorted.map((row, i) => (
          <div key={i}>
            <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
            <div
              className="py-5 cursor-pointer active:bg-black/3 dark:active:bg-white/4 transition-colors"
              onClick={() => openBooking({ venueName: row.location, lotId: row.name })}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-(family-name:--font-pt-mono) font-normal text-[#0c0c0c] dark:text-white text-[16px] leading-snug">
                  {row.name}
                </span>
                <span className={`font-(family-name:--font-pt-mono) font-normal text-[14px] leading-snug shrink-0 ${statusColor[row.status]}`}>
                  {row.status}
                </span>
              </div>
              <div className="mt-1.5 font-(family-name:--font-pt-mono) font-normal text-[14px] text-black dark:text-white opacity-40 leading-snug">
                {fmtArea(row.area)}&nbsp;&nbsp;&nbsp;{fmtPrice(row.price)}
              </div>
            </div>
          </div>
        ))}

        {sorted.length === 0 && (
          <div className="py-12 text-center font-sans text-[16px] text-black/50 dark:text-white/50">
            Помещения не найдены
          </div>
        )}

        <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
      </Reveal>
    </Container>
  );
}

function FilterGroup({
  label, from, to, fromPlaceholder, toPlaceholder, onFromChange, onToChange,
}: {
  label: string;
  from: string; to: string;
  fromPlaceholder: string; toPlaceholder: string;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
}) {
  const inputClass =
    "relative w-[69px] h-full bg-transparent text-center font-sans text-[14px] font-medium leading-4.25 text-white placeholder:text-white border-0 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]";

  return (
    <div className="flex flex-col gap-1.5 min-[750px]:flex-row min-[750px]:items-center min-[750px]:gap-2.25">
      <span className="font-sans text-[14px] font-medium leading-4.25 text-black dark:text-white">
        {label}
      </span>
      <div className="flex items-center gap-px">
        <div
          className="relative flex items-center justify-center rounded-l-[68px] overflow-hidden"
          style={{ width: 69, height: 39 }}
        >
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
            style={{ backdropFilter: "blur(22px)", opacity: 0.55 }}
          />
          <input
            type="number"
            value={from}
            placeholder={fromPlaceholder}
            onChange={(e) => onFromChange(e.target.value)}
            className={inputClass}
          />
        </div>
        <div
          className="relative flex items-center justify-center rounded-r-[68px] overflow-hidden"
          style={{ width: 69, height: 39 }}
        >
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
            style={{ backdropFilter: "blur(22px)", opacity: 0.55 }}
          />
          <input
            type="number"
            value={to}
            placeholder={toPlaceholder}
            onChange={(e) => onToChange(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
}
