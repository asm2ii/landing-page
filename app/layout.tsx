import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liga138-platform.vercel.app/"), // ganti nanti setelah deploy
  title: {
  default: "Liga138 Platform - Prediksi Skor & Analisis Pertandingan",
  description:
    "Dapatkan prediksi skor, analisis pertandingan, dan informasi liga sepak bola terkini di Liga138 Platform. Cocok untuk penggemar bola yang ingin mengikuti perkembangan kompetisi.",
  keywords: [
  "Liga138 Platform",
  "Liga138 informasi",
  "Liga138 analisis",
  "prediksi skor Liga138",
  "klasemen liga",
  "analisis pertandingan bola",
  "update kompetisi sepak bola",
  "jadwal bola",
  "platform informasi bola",
  "prediksi pertandingan",
  "klasemen terkini",
  "info sepak bola"
],
  authors: [{ name: "LIGA138" }],
  creator: "LIGA138",
  publisher: "LIGA138",
  verification: {
    google: "CYPel2h3SMSYqXzdhoNN0OIq_97bu5MukkE3fgyxMiA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "LIGA138",
    title: "Liga138 Platform - Prediksi Skor & Analisis Pertandingan",
    description:
      "Dapatkan prediksi skor, analisis pertandingan, dan informasi liga sepak bola terkini di Liga138 Platform. Cocok untuk penggemar bola yang ingin mengikuti perkembangan kompetisi.",
    images: [
      {
        url: "/og-image.jpg", // nanti bisa diganti dengan gambar asli
        width: 1200,
        height: 630,
        alt: "LIGA138 platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liga138 Platform - Prediksi Skor & Analisis Pertandingan",
    description:
      "Dapatkan prediksi skor, analisis pertandingan, dan informasi liga sepak bola terkini di Liga138 Platform. Cocok untuk penggemar bola yang ingin mengikuti perkembangan kompetisi.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}