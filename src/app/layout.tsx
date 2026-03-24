import type { Metadata } from "next";
import { sfProDisplay, ptMono } from "@/shared/fonts";
import { ThemeProvider } from "@/shared/ui/theme-provider";
import { Header } from "@/widgets/header";
import { CustomCursor } from "@/shared/ui";
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
    <html lang="ru" suppressHydrationWarning>
      <body className={`${sfProDisplay.variable} ${ptMono.variable} overflow-x-clip antialiased cursor-none`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          <div className="relative overflow-x-clip w-full max-w-480 mx-auto min-h-screen">
            <CustomCursor />
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
