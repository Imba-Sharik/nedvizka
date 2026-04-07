"use client";

import { useState } from "react";
import type { Premise } from "@/entities/venue";

interface UsePremisesFiltersOptions {
  initialData: Premise[];
}

export function usePremisesFilters({ initialData }: UsePremisesFiltersOptions) {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [areaFrom, setAreaFrom] = useState("");
  const [areaTo, setAreaTo] = useState("");
  const [filtered, setFiltered] = useState<Premise[]>(initialData);
  const [sortKey, setSortKey] = useState<"area" | "price" | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const applyFilters = (data: Premise[], loc?: string) => {
    const pfN = priceFrom ? Number(priceFrom) : 0;
    const ptN = priceTo ? Number(priceTo) : Infinity;
    const afN = areaFrom ? Number(areaFrom) : 0;
    const atN = areaTo ? Number(areaTo) : Infinity;
    setFiltered(
      data.filter((r) => {
        const locOk   = loc ? r.location === loc : true;
        const priceOk = r.price !== null ? r.price >= pfN && r.price <= ptN : true;
        const areaOk  = r.area  !== null ? r.area  >= afN && r.area  <= atN : true;
        return locOk && priceOk && areaOk;
      }),
    );
  };

  const handleFilter = (loc?: string) => {
    applyFilters(initialData, loc);
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

  return {
    priceFrom, setPriceFrom,
    priceTo, setPriceTo,
    areaFrom, setAreaFrom,
    areaTo, setAreaTo,
    sorted,
    sortKey, sortDir,
    handleFilter,
    handleSort,
  };
}
