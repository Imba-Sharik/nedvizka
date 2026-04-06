"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal, useBooking } from "@/shared/ui";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/shared/ui/hover-card";

type PremiseStatus = "Свободно" | "Забронировано" | "Лист ожидания";

interface Premise {
  location: string;
  name: string;
  area: number | null;
  price: number | null;
  status: PremiseStatus;
}

export const allPremises: Premise[] = [
  // Метмаш × Новый Голливуд — 4В series (price = Сумма в мес = Итого год / 12)
  { location: "Метмаш × Новый Голливуд", name: "4В-1",  area: 7.5,    price: 95813,  status: "Забронировано" },
  { location: "Метмаш × Новый Голливуд", name: "4В-2",  area: 16.5,   price: 265733, status: "Забронировано" },
  { location: "Метмаш × Новый Голливуд", name: "4В-3",  area: 6,      price: 73320,  status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-4",  area: 6,      price: 73320,  status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-5",  area: 10.7,   price: 149361, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-6",  area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-7",  area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-8",  area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-9",  area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-10", area: 13.3,   price: 198449, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-11", area: 13.9,   price: 210488, status: "Забронировано" },
  { location: "Метмаш × Новый Голливуд", name: "4В-12", area: 7.6,    price: 97371,  status: "Забронировано" },
  { location: "Метмаш × Новый Голливуд", name: "4В-13", area: 10.7,   price: 149361, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-14", area: 8.7,    price: 115005, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-15", area: 10.5,   price: 145793, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-16", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-17", area: 17.7,   price: 292917, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-18", area: 15,     price: 233250, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-19", area: 15,     price: 233250, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-20", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-21", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-22", area: 15,     price: 233250, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-23", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-24", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-25", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-26", area: 10.5,   price: 145793, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-27", area: 10.5,   price: 145793, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-28", area: 19.3,   price: 330821, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-29", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-30", area: 16.6,   price: 267957, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-31", area: 16.6,   price: 267957, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-32", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-33", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-34", area: 9,      price: 119970, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-35", area: 10.4,   price: 144019, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "4В-36", area: 35,     price: 803250, status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "5В-1",  area: 807.7,  price: null,   status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "6В-1",  area: 1124,   price: null,   status: "Свободно" },
  { location: "Метмаш × Новый Голливуд", name: "7В-1",  area: 807.7,  price: null,   status: "Свободно" },
  // Парк-Музей Коломенское (price по запросу — не указываем на сайте)
  { location: "Парк-Музей Коломенское",  name: "ПК-1",  area: 858.11, price: null,   status: "Забронировано" },
  { location: "Парк-Музей Коломенское",  name: "ПК-2",  area: 268.9,  price: null,   status: "Забронировано" },
  { location: "Парк-Музей Коломенское",  name: "ПК-3",  area: 849.6,  price: null,   status: "Забронировано" },
  { location: "Парк-Музей Коломенское",  name: "ПК-4",  area: 483.5,  price: null,   status: "Свободно" },
  { location: "Парк-Музей Коломенское",  name: "ПК-5",  area: 135.43, price: null,   status: "Забронировано" },
  { location: "Парк-Музей Коломенское",  name: "ПК-6",  area: 318,    price: null,   status: "Забронировано" },
  // Парк Горького
  { location: "Парк Горького",           name: "ПГ-1",  area: 780.2,  price: null,   status: "Лист ожидания" },
  { location: "Парк Горького",           name: "ПГ-2",  area: 213.1,  price: null,   status: "Лист ожидания" },
  { location: "Парк Горького",           name: "ПГ-3",  area: null,   price: null,   status: "Забронировано" },
  // ДК Серп и Молот
  { location: "ДК Серп и Молот",         name: "СМ-1",  area: null,   price: null,   status: "Свободно" },
  // Вишневый Сад
  { location: "Вишневый Сад",            name: "ВС-1",  area: null,   price: null,   status: "Свободно" },
];

const locationHref: Record<string, string> = {
  "Метмаш × Новый Голливуд": "/venues/metmash",
  "Парк-Музей Коломенское":  "/venues/park-muzey-kolomenskoe",
  "ДК Серп и Молот":         "/venues/dk-serp-i-molot",
  "Вишневый Сад":            "/venues/vishneviy-sad",
  "Парк Горького":           "/venues/park-gorkogo",
};

const locationThumb: Record<string, string> = {
  "Метмаш × Новый Голливуд": "/premises/metmash-thumbnail1.webp",
  "Парк-Музей Коломенское":  "/premises/kolomenskoye-thumbnail1.webp",
  "ДК Серп и Молот":         "/premises/dk-serp-i-molot-thumbnail1.webp",
  "Вишневый Сад":            "/premises/cherry-orchard-thumbnail2.webp",
  "Парк Горького":           "/premises/park-gorkogo-thumbnail.webp",
};

const gridCols = "2.5fr 0.8fr 0.7fr 1.2fr 0.7fr 1.2fr";

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

const COLS = ["Локация", "Наименование", "Площадь", "Стоимость (мес)", "Статус", ""];
const SORTABLE: Record<string, "area" | "price"> = {
  "Площадь": "area",
  "Стоимость (мес)": "price",
};

interface PremisesProps {
  limit?: number;
  standalone?: boolean;
}

const locations = [...new Set(allPremises.map((p) => p.location))];

export function Premises({ limit, standalone }: PremisesProps) {
  const { openBooking } = useBooking();
  const [location, setLocation] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [areaFrom, setAreaFrom] = useState("");
  const [areaTo, setAreaTo] = useState("");
  const [filtered, setFiltered] = useState<Premise[]>(allPremises);
  const [sortKey, setSortKey] = useState<"area" | "price" | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const applyFilters = (loc: string, pf: string, pt: string, af: string, at: string) => {
    const pfN = pf ? Number(pf) : 0;
    const ptN = pt ? Number(pt) : Infinity;
    const afN = af ? Number(af) : 0;
    const atN = at ? Number(at) : Infinity;
    setFiltered(
      allPremises.filter((r) => {
        const locOk   = loc ? r.location === loc : true;
        const priceOk = r.price !== null ? r.price >= pfN && r.price <= ptN : true;
        const areaOk  = r.area  !== null ? r.area  >= afN && r.area  <= atN : true;
        return locOk && priceOk && areaOk;
      }),
    );
  };

  const handleLocationChange = (v: string) => {
    setLocation(v);
    applyFilters(v, priceFrom, priceTo, areaFrom, areaTo);
  };

  const handleFilter = () => {
    applyFilters(location, priceFrom, priceTo, areaFrom, areaTo);
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

  const rows = limit ? sorted.slice(0, limit) : sorted;

  return (
    <section id="premises" style={{ marginTop: standalone ? 0 : "clamp(80px, 14.4vw, 208px)" }}>
      <Container
        style={{
          paddingTop:    standalone ? "clamp(32px, 3vw, 48px)" : "clamp(80px, 8.9vw, 128px)",
          paddingBottom: "clamp(80px, 8.9vw, 128px)",
        }}
      >
        {/* Title + Filter */}
        <Reveal
          className="flex flex-col gap-8 min-[1240px]:flex-row min-[1240px]:items-center min-[1240px]:justify-between"
        >
          <h2
            className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white shrink-0"
            style={{ fontSize: "clamp(28px,2.65vw,53px)", lineHeight: "1.06" }}
          >
            Доступные помещения
          </h2>

          {/* Mobile filters */}
          <div className="flex flex-col gap-3 min-[750px]:hidden w-full">
              <div className="flex items-center justify-between">
                <FilterGroup label="Цена" from={priceFrom} to={priceTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setPriceFrom} onToChange={setPriceTo} />
                <FilterGroup label="Площадь" from={areaFrom} to={areaTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setAreaFrom} onToChange={setAreaTo} />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="relative flex items-center justify-between gap-3 rounded-[68px] pl-5 pr-4 font-sans text-[14px] font-medium leading-4.25 text-white cursor-pointer border-0 outline-none overflow-hidden w-full"
                  style={{ height: 39 }}
                >
                  <div
                    className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
                    style={{ backdropFilter: "blur(22px)", opacity: 0.55 }}
                  />
                  <span className="relative">{location || "Площадка"}</span>
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className="relative shrink-0">
                    <path d="M5 1V13M5 13L1 9M5 13L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={6} className="rounded-xl">
                  <DropdownMenuItem
                    onClick={() => handleLocationChange("")}
                    className="cursor-pointer"
                  >
                    Все площадки
                  </DropdownMenuItem>
                  {locations.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => handleLocationChange(loc)}
                      className="cursor-pointer"
                    >
                      {loc}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="relative flex items-center justify-between gap-3 rounded-[68px] pl-5 pr-4 font-sans text-[14px] font-medium leading-4.25 text-white cursor-pointer border-0 outline-none overflow-hidden"
                  style={{ height: 39, minWidth: 148 }}
                >
                  <div
                    className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
                    style={{ backdropFilter: "blur(22px)", opacity: 0.55 }}
                  />
                  <span className="relative">{location || "Площадка"}</span>
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className="relative shrink-0">
                    <path d="M5 1V13M5 13L1 9M5 13L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={6} className="rounded-xl">
                  <DropdownMenuItem
                    onClick={() => handleLocationChange("")}
                    className="cursor-pointer"
                  >
                    Все площадки
                  </DropdownMenuItem>
                  {locations.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => handleLocationChange(loc)}
                      className="cursor-pointer"
                    >
                      {loc}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
            {/* Header row */}
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

            {/* Data rows */}
            {rows.map((row, i) => (
              <HoverCard key={i}>
                <HoverCardTrigger render={<div />}>
                  <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
                  <div
                    className="grid items-center py-5.5 -mx-3 px-3 rounded-lg transition-colors hover:bg-black/3 dark:hover:bg-white/4"
                    style={{ gridTemplateColumns: gridCols, fontSize: 16 }}
                  >
                    <a href={locationHref[row.location] || "#"} className={`${cellBase} no-underline hover:opacity-70 transition-opacity`}>{row.location}</a>
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
                    alt={`Схема ${row.name}`}
                    width={240}
                    height={160}
                    unoptimized
                    className="rounded-md object-cover"
                  />
                </HoverCardContent>
              </HoverCard>
            ))}

            {rows.length === 0 && (
              <div className="py-12 text-center font-sans text-[16px] text-black/50 dark:text-white/50">
                Помещения не найдены
              </div>
            )}

            <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
          </div>
        </Reveal>

        {/* Mobile cards */}
        <Reveal delay={0.15} className="mt-8 flex flex-col min-[750px]:hidden">
          {rows.map((row, i) => (
            <div key={i}>
              <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
              <div
                className="py-5 cursor-pointer active:bg-black/3 dark:active:bg-white/4 transition-colors"
                onClick={() => openBooking({ venueName: row.location, lotId: row.name })}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-(family-name:--font-pt-mono) font-normal text-[#0c0c0c] dark:text-white text-[16px] leading-snug">
                    {row.location}&nbsp;&nbsp;{row.name}
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

          {rows.length === 0 && (
            <div className="py-12 text-center font-sans text-[16px] text-black/50 dark:text-white/50">
              Помещения не найдены
            </div>
          )}

          <div className="w-full h-px bg-[rgba(0,0,0,0.14)] dark:bg-[rgba(56,56,56,1)]" />
        </Reveal>

        {limit && (
          <a
            href="/premises"
            className="block mt-9.5 font-sans text-[16px] leading-3.75 font-medium no-underline text-black dark:text-white"
          >
            Показать все
          </a>
        )}
      </Container>
    </section>
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
