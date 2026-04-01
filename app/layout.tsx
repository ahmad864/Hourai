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
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          #initial-loader {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background-color: #b5678a;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            transition: opacity 0.5s ease;
          }
          #initial-loader img {
            width: 200px;
            height: auto;
          }
          #initial-loader p {
            color: white;
            font-size: 18px;
            font-family: sans-serif;
          }
          #initial-loader .bar {
            width: 48px;
            height: 4px;
            background: rgba(255,255,255,0.3);
            border-radius: 999px;
            overflow: hidden;
          }
          #initial-loader .bar-inner {
            height: 100%;
            width: 50%;
            background: white;
            border-radius: 999px;
            animation: slide 1s ease-in-out infinite;
          }
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var alreadyLoaded = sessionStorage.getItem('app_loaded');
            if (alreadyLoaded) {
              document.addEventListener('DOMContentLoaded', function() {
                var loader = document.getElementById('initial-loader');
                if (loader) loader.style.display = 'none';
              });
            } else {
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(function() {
                  var loader = document.getElementById('initial-loader');
                  if (loader) {
                    loader.style.opacity = '0';
                    setTimeout(function() {
                      loader.style.display = 'none';
                      sessionStorage.setItem('app_loaded', '1');
                    }, 500);
                  }
                }, 1500);
              });
            }
          })();
        `}} />
      </head>
      <body className={`${playfair.variable} ${cairo.variable} antialiased`}>
        <div id="initial-loader">
          <img src="/images/logo.png" alt="Europe Chic" />
          <p>أهلاً بك، انتظر التحميل</p>
          <div className="bar">
            <div className="bar-inner"></div>
          </div>
        </div>
        <StoreProvider>
          {children}
          <Toaster position="top-center" richColors />
        </StoreProvider>
      </body>
    </html>
  );
}
