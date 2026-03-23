## Начало сессии
Читай все файлы memory bank проекта "nedvizka" через mcp__memory-bank:
projectbrief.md, productContext.md, techContext.md, systemPatterns.md, activeContext.md, progress.md

## В процессе работы
- Обращайся к Context7 только при необходимости: незнакомый API, специфичный метод, вопрос по конкретной версии библиотеки.
- После завершения крупной задачи обновляй progress.md и activeContext.md.

## Триггеры
- "обнови memory bank" — обнови все файлы на основе текущего состояния проекта.
- "инициализируй memory bank" — создай все 6 файлов для нового проекта.

## Сеточная система (единая вертикальная линия)

Все секции используют `lg:section-cols lg:gap-5` — это `repeat(3, 1fr)` с gap-5, определённый
как `@utility section-cols` в globals.css.

**Правило**: НИКОГДА не использовать `2fr 1fr` или `grid-cols-[2fr_1fr]` — это даёт смещение ~13px
относительно 3-колоночных секций (Cards, Gallery).

### Паттерны
- **2-col секция** (Header, Hero, About): `lg:section-cols lg:gap-5` + `lg:col-span-2` + `lg:col-span-1`
- **3-col секция** (Cards, Gallery): `grid grid-cols-1 lg:section-cols gap-5`

### Пропорциональные шрифты
Формула: `clamp(min, base_px/1440*100 vw, max)`

### Hero позиционирование
Секция `relative lg:h-[clamp(480px,44vw,630px)]`, текст `lg:absolute lg:top-[45.6%]`
(45.6% = 287/630 — пропорция внутри секции, не от top страницы).
