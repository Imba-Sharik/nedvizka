"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, open, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) setIndex(initialIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, prev, next, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90" onClick={onClose} />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white transition hover:bg-white/20"
        aria-label="Закрыть"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Image */}
      <div className="relative rounded-lg overflow-hidden w-[85vw] max-w-215 h-[60vh] max-h-140">
        <Image
          src={images[index]}
          alt={`Фото ${index + 1}`}
          fill
          className="object-cover"
          sizes="min(860px, 85vw)"
          priority
        />
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white transition hover:bg-white/20"
            aria-label="Предыдущее фото"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white transition hover:bg-white/20"
            aria-label="Следующее фото"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Counter */}
      <p className="mt-4 text-sm text-white/60 font-(family-name:--font-pt-mono)">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
