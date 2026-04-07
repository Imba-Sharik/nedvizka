export type PremiseStatus = "Свободно" | "Забронировано" | "Лист ожидания";

export interface Premise {
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

export const premiseLocations = [...new Set(allPremises.map((p) => p.location))];

export const cellBase =
  "font-(family-name:--font-pt-mono) font-normal leading-4.75 text-[#0c0c0c] dark:text-white";

export const statusColor: Record<PremiseStatus, string> = {
  "Свободно":      "text-[#0c0c0c] dark:text-[#E5FF82]",
  "Забронировано":  "text-[#B73B3B] dark:text-[#FF824A]",
  "Лист ожидания":  "text-[#0c0c0c] dark:text-[#FFD966]",
};

export const fmtPrice = (price: number | null) =>
  price !== null ? `${price.toLocaleString("ru-RU")} ₽` : "—";

export const fmtArea = (area: number | null) =>
  area !== null ? `${area} м²` : "—";

export const SORTABLE: Record<string, "area" | "price"> = {
  "Площадь": "area",
  "Стоимость (мес)": "price",
};
