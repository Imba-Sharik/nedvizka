export interface Venue {
  slug: string;
  src: string;
  hoverSrc: string;
  alt: string;
  name: string;
  href: string;
  area: string;
  description: string;
  descriptionWidth: number;
}

export const venues: Venue[] = [
  {
    slug: "metmash",
    src: "/images/Mask3.png",
    hoverSrc: "/images/Mask6.jpg",
    alt: "Метмаш",
    name: "МЕТМАШ",
    href: "/venues/metmash",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов",
    descriptionWidth: 247,
  },
  {
    slug: "park-muzey-kolomenskoe",
    src: "/images/Mask2.png",
    hoverSrc: "/images/Mask5.jpg",
    alt: "Парк-музей Коломенское",
    name: "ПАРК-МУЗЕЙ КОЛОМЕНСКОЕ",
    href: "/venues/metmash",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов",
    descriptionWidth: 247,
  },
  {
    slug: "dk-serp-i-molot",
    src: "/images/Mask.png",
    hoverSrc: "/images/Mask4.jpg",
    alt: "ДК Серп и Молот",
    name: "ДК СЕРП И МОЛОТ",
    href: "/venues/metmash",
    area: "20000 м²",
    description:
      "Тщательно спроектированные пространства для брендов, которые ценят атмосферу",
    descriptionWidth: 367,
  },
];
