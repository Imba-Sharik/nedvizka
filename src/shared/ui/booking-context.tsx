"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface BookingOptions {
  venueName?: string;
  lotId?: string;
}

interface BookingContextType {
  isOpen: boolean;
  options: BookingOptions;
  openBooking: (opts?: BookingOptions) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<BookingOptions>({});

  const openBooking = (opts: BookingOptions = {}) => {
    setOptions(opts);
    setIsOpen(true);
  };

  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, options, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
