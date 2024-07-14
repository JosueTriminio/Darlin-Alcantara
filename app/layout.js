import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const outfit = Outfit({ subsets: ["latin"]});

export const metadata = {
  title: "Darlin Alcantara.com",
  description: "bartender barman portafolio de barista profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico?<generated>" type="image/png" sizes="32x32" />
        
      </head>
      <body className={`${outfit.className} bg-gradient-to-tr`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
