import { Container } from "@/shared/ui";

export const metadata = { title: "Обработка персональных данных — Недвижка" };

export default function PersonalDataPage() {
  return (
    <main className="pb-32 pt-12">
      <Container>
        <div className="max-w-2xl">
          <h1
            className="font-medium text-page-text mb-10"
            style={{ fontSize: "clamp(22px, 2.5vw, 36px)", lineHeight: 1.15 }}
          >
            Обработка персональных данных
          </h1>

          <div
            className="flex flex-col gap-8 font-sans text-page-text/70"
            style={{ fontSize: 14, lineHeight: 1.7 }}
          >
            <section>
              <h2 className="text-page-text text-[13px] font-medium mb-3">
                1. Оператор персональных данных
              </h2>
              <p>
                Оператором персональных данных является ООО «Недвижка» (далее — Оператор).
                Адрес: г. Москва. Контактный email:{" "}
                <a
                  href="mailto:rent@nedvizka.ru"
                  className="underline underline-offset-2"
                >
                  rent@nedvizka.ru
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-page-text text-[13px] font-medium mb-3">
                2. Правовые основания обработки
              </h2>
              <p>
                Обработка персональных данных осуществляется на основании Федерального закона
                от 27.07.2006 № 152-ФЗ «О персональных данных», а также согласия субъекта
                персональных данных, выраженного при заполнении формы на сайте.
              </p>
            </section>

            <section>
              <h2 className="text-page-text text-[13px] font-medium mb-3">
                3. Категории обрабатываемых данных
              </h2>
              <p>
                Оператор обрабатывает следующие категории персональных данных: фамилия, имя,
                отчество; номер телефона; адрес электронной почты; наименование организации;
                иные данные, добровольно предоставленные пользователем при заполнении форм.
              </p>
            </section>

            <section>
              <h2 className="text-page-text text-[13px] font-medium mb-3">
                4. Цели обработки
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>Обработка входящих заявок и консультирование по вопросам аренды</li>
                <li>Подготовка и направление коммерческих предложений</li>
                <li>Заключение и исполнение договоров аренды</li>
                <li>Информирование о новых площадках и специальных условиях</li>
              </ul>
            </section>

            <section>
              <h2 className="text-page-text text-[13px] font-medium mb-3">
                5. Порядок и сроки обработки
              </h2>
              <p>
                Персональные данные обрабатываются до момента достижения целей обработки
                или до отзыва согласия субъектом. Обработка осуществляется с использованием
                средств автоматизации и без таковых. Оператор обеспечивает конфиденциальность
                данных и принимает необходимые меры для их защиты от несанкционированного доступа.
              </p>
            </section>

            <section>
              <h2 className="text-page-text text-[13px] font-medium mb-3">
                6. Передача данных третьим лицам
              </h2>
              <p>
                Оператор не передаёт персональные данные третьим лицам без согласия субъекта,
                за исключением случаев, предусмотренных законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-page-text text-[13px] font-medium mb-3">
                7. Права субъекта персональных данных
              </h2>
              <p>
                Субъект персональных данных имеет право: получать информацию об обработке своих
                данных; требовать уточнения, блокирования или уничтожения данных; отозвать
                согласие на обработку. Для реализации указанных прав направьте запрос на{" "}
                <a
                  href="mailto:rent@nedvizka.ru"
                  className="underline underline-offset-2"
                >
                  rent@nedvizka.ru
                </a>.
              </p>
            </section>

            <p className="text-page-text/40 text-[12px] pt-4 border-t border-page-text/10">
              Последнее обновление: апрель 2026 г.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
