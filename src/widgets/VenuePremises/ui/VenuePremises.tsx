"use client";

import Image from "next/image";
import { Container, Reveal, useBooking, FilterGroup } from "@/shared/ui";
import { usePremisesFilters } from "@/shared/lib";
import {
  allPremises,
  cellBase,
  statusColor,
  fmtPrice,
  fmtArea,
  SORTABLE,
} from "@/entities/venue";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/shared/ui/hover-card";

const gridCols = "1fr 1fr 1.5fr 0.8fr 1.5fr";
const COLS = ["Наименование", "Площадь", "Стоимость (мес)", "Статус", ""];

interface VenuePremisesProps {
  venueName: string;
}

export function VenuePremises({ venueName }: VenuePremisesProps) {
  const venuePremises = allPremises.filter((p) => p.location === venueName);
  const { openBooking } = useBooking();

  const {
    priceFrom, setPriceFrom,
    priceTo, setPriceTo,
    areaFrom, setAreaFrom,
    areaTo, setAreaTo,
    sorted,
    sortKey, sortDir,
    handleFilter,
    handleSort,
  } = usePremisesFilters({ initialData: venuePremises });

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
            onClick={() => handleFilter()}
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
            onClick={() => handleFilter()}
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
