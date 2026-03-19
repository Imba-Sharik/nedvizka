import type { Metadata } from "next";
import { sfProDisplay, ptMono } from "@/shared/fonts";
import { ThemeProvider } from "@/shared/ui/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nedvizka",
  description: "Платформа недвижимости",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${sfProDisplay.variable} ${ptMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-w-480 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
