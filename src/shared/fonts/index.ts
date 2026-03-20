import localFont from "next/font/local";

export const sfProDisplay = localFont({
  src: [
    { path: "./sf-pro-display/SF-Pro-Display-Ultralight.woff2", weight: "100", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-UltralightItalic.woff2", weight: "100", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Thin.woff2", weight: "200", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-ThinItalic.woff2", weight: "200", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Light.woff2", weight: "300", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Regular.woff2", weight: "400", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Medium.woff2", weight: "500", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-SemiboldItalic.woff2", weight: "600", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Bold.woff2", weight: "700", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Heavy.woff2", weight: "800", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-HeavyItalic.woff2", weight: "800", style: "italic" },
    { path: "./sf-pro-display/SF-Pro-Display-Black.woff2", weight: "900", style: "normal" },
    { path: "./sf-pro-display/SF-Pro-Display-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-sf-pro-display",
  display: "swap",
  adjustFontFallback: false,
});

export const ptMono = localFont({
  src: [
    { path: "./pt-mono/PTMono-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-pt-mono",
  display: "swap",
  adjustFontFallback: false,
});
