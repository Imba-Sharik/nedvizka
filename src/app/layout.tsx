import type { Metadata } from "next";
import { sfProDisplay, ptMono } from "@/shared/fonts";
import { ThemeProvider } from "@/shared/ui/theme-provider";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/Footer";
import { CustomCursor, PageTransition, BookingProvider } from "@/shared/ui";

import { Toaster } from "sonner";
import { BookingSheet } from "@/widgets/BookingSheet";
import "./globals.css";

export const metadata: Metadata = {
  title: "Недвижка",
  description: "Платформа недвижимости",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${sfProDisplay.variable} ${ptMono.variable} antialiased lg:cursor-none overflow-x-clip`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          <BookingProvider>
            <PageTransition>
              <div className="relative w-full max-w-480 mx-auto min-h-screen">
                <CustomCursor />
                <Header />
                {children}
                <Footer />
              </div>
            </PageTransition>
            <BookingSheet />
            <Toaster position="bottom-center" />
          </BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
