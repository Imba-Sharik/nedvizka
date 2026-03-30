"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useBooking } from "@/shared/ui/booking-context";
import { Sheet, SheetContent, SheetTitle } from "@/shared/ui";


function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-(family-name:--font-pt-mono) text-[12px] uppercase tracking-[0.06em] text-black/55 dark:text-white/55">
        {label}
      </span>
      {children}
    </div>
  );
}

const inputCls =
  "bg-transparent border-b border-black/15 dark:border-white/15 pb-2.5 font-(family-name:--font-pt-mono) text-[14px] text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 outline-none focus:border-black/50 dark:focus:border-white/50 transition-colors w-full";

export function BookingSheet() {
  const { isOpen, options, closeBooking } = useBooking();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [agreed, setAgreed] = useState(false);

  const subtitle = [
    options.venueName?.toUpperCase(),
    options.lotId ? `ЛОТ ${options.lotId}` : undefined,
  ]
    .filter(Boolean)
    .join(", ");

  const canSubmit = phone.trim() && email.trim() && agreed;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeBooking()}>
      <SheetContent
        side="right"
        showCloseButton
        className="flex flex-col gap-0 p-0 w-full sm:max-w-[440px] bg-page-bg overflow-y-auto border-l border-black/8 dark:border-white/8"
      >
        <SheetTitle className="sr-only">Заявка на бронирование</SheetTitle>

        <div className="flex flex-col h-full px-8 py-16 gap-12">

          {/* Title */}
          <div className="flex flex-col gap-3">
            <h2
              className="font-(family-name:--font-pt-mono) font-medium uppercase text-black dark:text-white leading-[1.1]"
              style={{ fontSize: "clamp(26px, 2.2vw, 34px)" }}
            >
              Заявка на<br />бронирование
            </h2>
            {subtitle && (
              <p className="font-(family-name:--font-pt-mono) text-[11px] uppercase tracking-[0.12em] text-black/60 dark:text-white/60">
                {subtitle}
              </p>
            )}
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-8">
            <Field label="Телефон *">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 000 000-00-00"
                className={inputCls}
              />
            </Field>

            <Field label="Почта *">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.ru"
                className={inputCls}
              />
            </Field>

            <Field label="Категория бизнеса">
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Какой у вас бизнес?"
                className={inputCls}
              />
            </Field>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-6 mt-auto">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className="mt-0.5 w-3.75 h-3.75 shrink-0 border border-black/25 dark:border-white/25 rounded-[3px] flex items-center justify-center transition-colors"
                style={{ background: agreed ? "currentColor" : "transparent" }}
              >
                {agreed && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path
                      d="M1 3.5L3.2 5.5L8 1"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dark:stroke-black"
                    />
                  </svg>
                )}
              </button>
              <span className="font-(family-name:--font-pt-mono) text-[11px] leading-relaxed text-black/60 dark:text-white/60">
                Соглашаюсь с{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="underline underline-offset-2 hover:text-black/80 dark:hover:text-white/80 transition-colors"
                >
                  условиями передачи данных
                </a>
              </span>
            </label>

            <button
              disabled={!canSubmit}
              onClick={() => {
                toast.success("Заявка отправлена", {
                  description: "Мы свяжемся с вами в ближайшее время",
                });
                setPhone("");
                setEmail("");
                setCategory("");
                setAgreed(false);
                closeBooking();
              }}
              className="w-full h-11 bg-black dark:bg-white text-white dark:text-black font-(family-name:--font-pt-mono) text-[13px] uppercase tracking-widest rounded-[7px] transition-opacity disabled:opacity-25"
            >
              Оставить заявку
            </button>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}
