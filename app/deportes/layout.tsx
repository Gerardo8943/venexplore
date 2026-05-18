import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deportes Nacionales | Venexplore",
  description:
    "Descubre la pasión deportiva de Venezuela: béisbol, boxeo, baloncesto y las leyendas que han puesto al país en lo más alto del deporte mundial.",
  openGraph: {
    title: "Deportes Nacionales | Venexplore",
    description:
      "La pasión deportiva de Venezuela: leyendas, momentos inolvidables y la historia del deporte nacional.",
    url: "https://venexplore.com/deportes",
    siteName: "Venexplore",
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/img/deportes/hero-beisbol.jpg",
        width: 1920,
        height: 1080,
        alt: "Selección de Venezuela celebrando el Clásico Mundial de Béisbol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deportes Nacionales | Venexplore",
    description:
      "Leyendas, momentos inolvidables y la historia del deporte venezolano.",
    images: ["/img/deportes/hero-beisbol.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://venexplore.com/deportes",
  },
};

export default function DeportesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
