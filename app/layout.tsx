import type { Metadata } from "next";
import { Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Europe Chic | أزياء أوروبية",
  description: "أناقة أوروبية بلمسة شرقية — أزياء عالية الجودة بأسعار مناسبة",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${playfair.variable} ${cairo.variable} antialiased`}>
        <StoreProvider>
          {children}
          <Toaster position="top-center" richColors />
        </StoreProvider>
      </body>
    </html>
  );
}
