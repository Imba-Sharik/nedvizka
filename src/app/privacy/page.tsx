import { Container } from "@/shared/ui";

export const metadata = { title: "Политика обработки персональных данных" };

export default function PrivacyPage() {
  return (
    <main className="pb-32 pt-12">
      <Container>
        <div className="max-w-2xl">
          <h1
            className="font-(family-name:--font-pt-mono) font-medium uppercase text-black dark:text-white mb-10"
            style={{ fontSize: "clamp(22px, 2.5vw, 36px)", lineHeight: 1.15 }}
          >
            Политика обработки<br />персональных данных
          </h1>

          <div
            className="flex flex-col gap-8 font-sans text-black/70 dark:text-white/70"
            style={{ fontSize: 14, lineHeight: 1.7 }}
          >
            <section>
              <h2 className="font-(family-name:--font-pt-mono) uppercase text-black dark:text-white text-[13px] mb-3">
                1. Общие положения
              </h2>
              <p>
                Настоящая политика определяет порядок обработки персональных данных пользователей,
                передаваемых при использовании сайта. Оператор обрабатывает данные в соответствии
                с Федеральным законом № 152-ФЗ «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="font-(family-name:--font-pt-mono) uppercase text-black dark:text-white text-[13px] mb-3">
                2. Какие данные мы собираем
              </h2>
              <p>
                При заполнении формы заявки мы получаем: имя, номер телефона, адрес электронной
                почты, а также информацию о характере вашего бизнеса. Данные передаются добровольно
                и используются исключительно для обработки вашего запроса.
              </p>
            </section>

            <section>
              <h2 className="font-(family-name:--font-pt-mono) uppercase text-black dark:text-white text-[13px] mb-3">
                3. Цели обработки
              </h2>
              <p>
                Персональные данные используются для: связи с вами по вопросам аренды площадей,
                подготовки коммерческих предложений и заключения договоров.
              </p>
            </section>

            <section>
              <h2 className="font-(family-name:--font-pt-mono) uppercase text-black dark:text-white text-[13px] mb-3">
                4. Хранение и защита
              </h2>
              <p>
                Мы не передаём ваши данные третьим лицам без вашего согласия. Данные хранятся на
                защищённых серверах и удаляются по вашему запросу или по истечении срока,
                необходимого для достижения целей обработки.
              </p>
            </section>

            <section>
              <h2 className="font-(family-name:--font-pt-mono) uppercase text-black dark:text-white text-[13px] mb-3">
                5. Ваши права
              </h2>
              <p>
                Вы вправе запросить доступ к своим данным, их исправление или удаление. Для этого
                свяжитесь с нами по адресу{" "}
                <a
                  href="mailto:info@nedvizka.ru"
                  className="underline underline-offset-2 text-black/70 dark:text-white/70"
                >
                  info@nedvizka.ru
                </a>.
              </p>
            </section>

            <p className="text-black/40 dark:text-white/40 text-[12px] pt-4 border-t border-black/10 dark:border-white/10">
              Последнее обновление: март 2025 г.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
