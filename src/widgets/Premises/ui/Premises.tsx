"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal, useBooking, FilterGroup } from "@/shared/ui";
import { usePremisesFilters } from "@/shared/lib";
import {
  allPremises,
  premiseLocations,
  cellBase,
  statusColor,
  fmtPrice,
  fmtArea,
  SORTABLE,
  venues,
} from "@/entities/venue";
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

const locationHref = Object.fromEntries(
  venues.map((v) => [v.location, v.href]),
);

const gridCols = "2.5fr 0.8fr 0.7fr 1.2fr 0.7fr 1.2fr";
const COLS = ["Локация", "Наименование", "Площадь", "Стоимость (мес)", "Статус", ""];

interface PremisesProps {
  limit?: number;
  standalone?: boolean;
}

export function Premises({ limit, standalone }: PremisesProps) {
  const { openBooking } = useBooking();
  const [location, setLocation] = useState("");

  const {
    priceFrom, setPriceFrom,
    priceTo, setPriceTo,
    areaFrom, setAreaFrom,
    areaTo, setAreaTo,
    sorted,
    sortKey, sortDir,
    handleFilter,
    handleSort,
  } = usePremisesFilters({ initialData: allPremises });

  const handleLocationChange = (v: string) => {
    setLocation(v);
    handleFilter(v);
  };

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
              <LocationDropdown
                value={location}
                onChange={handleLocationChange}
              />
              <button
                onClick={() => handleFilter(location)}
                className="font-sans text-[14px] font-medium leading-4.25 text-black bg-white dark:bg-white dark:text-black rounded-[68px] px-6 cursor-pointer w-full"
                style={{ height: 39 }}
              >
                Показать
              </button>
          </div>

          {/* Desktop filters */}
          <div className="hidden min-[750px]:flex items-center gap-6">
              <LocationDropdown
                value={location}
                onChange={handleLocationChange}
                className="hidden min-[750px]:flex"
              />
              <FilterGroup label="Цена" from={priceFrom} to={priceTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setPriceFrom} onToChange={setPriceTo} />
              <FilterGroup label="Площадь" from={areaFrom} to={areaTo} fromPlaceholder="от" toPlaceholder="до" onFromChange={setAreaFrom} onToChange={setAreaTo} />
              <button
                onClick={() => handleFilter(location)}
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
                    width={150}
                    height={150}

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

function LocationDropdown({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`relative flex items-center justify-between gap-3 rounded-[68px] pl-5 pr-4 font-sans text-[14px] font-medium leading-4.25 text-white cursor-pointer border-0 outline-none overflow-hidden ${className ?? "w-full"}`}
        style={{ height: 39, minWidth: 148 }}
      >
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
          style={{ backdropFilter: "blur(22px)", opacity: 0.55 }}
        />
        <span className="relative">{value || "Площадка"}</span>
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className="relative shrink-0">
          <path d="M5 1V13M5 13L1 9M5 13L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={6} className="rounded-xl">
        <DropdownMenuItem
          onClick={() => onChange("")}
          className="cursor-pointer"
        >
          Все площадки
        </DropdownMenuItem>
        {premiseLocations.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => onChange(loc)}
            className="cursor-pointer"
          >
            {loc}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
