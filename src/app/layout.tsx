import type { Metadata } from "next";

import './styles/tailwind.css'
import './styles/globals.scss'; 
import Header from "@components/Header";
import Footer from "@components/Footer";
import FadeObserver from "@components/FadeObserver";
import OdometerLoader from "@components/Odometer";
import "@styles/globals.scss";
import Script from "next/script";



export const metadata: Metadata = {
  title: "Serwis komputerowy",
  description: "Miejsce dla twojego sprzętu.",
  icons: "/icon.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/themes/odometer-theme-default.min.css"
          />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/themes/odometer-theme-default.min.css"
          integrity="sha512-/k/mL9TQSZHAqtVqXJAiy5bt2w1P7gxdra0UlnFjVHF9a/LC2vxt7otx3BMcn79V/DZsPRwdw8tPlwbElMnIAw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/odometer.min.js"
          strategy="beforeInteractive"
        />
        <FadeObserver />
        <OdometerLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
