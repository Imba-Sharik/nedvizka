import { VenueHero } from "@/widgets/VenueHero";
import { VenueAbout } from "@/widgets/VenueAbout";
import { VenueScheme } from "@/widgets/VenueScheme";
import { VenuePremises } from "@/widgets/VenuePremises";
import { VenueGallery } from "@/widgets/VenueGallery";
import { VenueAdvantages } from "@/widgets/VenueAdvantages";
import { VenueOtherLocations } from "@/widgets/VenueOtherLocations";
import { Quote } from "@/widgets/Quote";

const gallerySlides = [
  "/metmash/gallery1.jpeg",
  "/metmash/gallery2.jpeg",
  "/metmash/gallery3.jpeg",
  "/metmash/gallery4.jpeg",
];

export default function MetmashPage() {
  return (
    <main>
      <VenueHero
        title={["МЕТМАШ X", "НОВЫЙ ГОЛЛИВУД"]}
        imageSrc="/metmash/hero-image.png"
        address="Москва, Рязанский проспект д.8А"
      />
      <VenueAbout
        paragraphs={[
          "Центр культуры и предпринимательства новой волны.",
          "Первое столичное междисциплинарное пространство между бизнесом, наукой, гастрономией, музыкой, культурой и искусством.",
        ]}
      />
      <VenueScheme imageSrc="/metmash/scheme.jpeg" area="241 000 кв. м" />
      <VenuePremises venueName="МЕТМАШ" />
      <VenueAdvantages
        items={[
          {
            number: "01",
            title: "Высокий и стабильный клиентский поток",
            description:
              "Локация притягивает разнообразную аудиторию благодаря насыщенной программе событий и продуманной инфраструктуре. Постоянное движение посетителей создаёт благоприятную среду для развития проектов и устойчивого роста бизнеса.",
          },
          {
            number: "02",
            title: "Престижная историческая локация",
            description:
              "Объект расположен в знаковом месте с богатым культурным наследием, что усиливает его статус и узнаваемость. Атмосфера истории в сочетании с современным подходом формирует уникальный имидж пространства.",
          },
          {
            number: "03",
            title: "Синергия бизнеса, творчества и инноваций",
            description:
              "Здесь пересекаются разные индустрии, создавая условия для коллабораций и появления новых идей. Такое взаимодействие усиливает ценность каждого проекта и способствует формированию актуальных городских трендов.",
          },
        ]}
      />
      <VenueGallery slides={gallerySlides} />
      <VenueOtherLocations currentSlug="metmash" />
      <Quote />
    </main>
  );
}
