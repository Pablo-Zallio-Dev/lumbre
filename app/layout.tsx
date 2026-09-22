import type { Metadata } from "next";
import { Inconsolata, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

const inconsolata = Inconsolata({
      variable: "--font-inconsolata",
      subsets: ["latin"],
});

const roboto = Roboto({
      variable: "--font-roboto",
      subsets: ["latin"],
});

export const metadata: Metadata = {
      title: "Lumbre Estudio — Arquitectura e Interiorismo",
      description:
            "Estudio de arquitectura e interiorismo en Valencia. Diseñamos con luz, construimos con intención. Descubre nuestros proyectos residenciales y comerciales.",
      keywords: [
            "arquitectura Valencia",
            "interiorismo Valencia",
            "estudio de arquitectura",
            "reforma de viviendas",
            "diseño de interiores",
      ],
      openGraph: {
            title: "Lumbre Estudio — Arquitectura e Interiorismo",
            description:
                  "Diseñamos con luz, construimos con intención. Estudio de arquitectura e interiorismo en Valencia.",
            url: "https://lumbreestudio.com",
            siteName: "Lumbre Estudio",
            locale: "es_ES",
            type: "website",
            images: ["/og-image.png"],
      },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
      return (
            <html
                  lang="es"
                  className={`${inconsolata.variable} ${roboto.variable} text-black bg-cream h-full antialiased scroll-smooth`}
            >
                  <body className=" min-h-full flex flex-col">
                        <Header />
                        <main>
                              {children}
                        </main>
                        <Footer />
                  </body>
            </html>
      );
}
