import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nama-project-kamu.vercel.app"), // ganti nanti setelah deploy
  title: {
    default: "Galaxy S26 Ultra | Beli Sekarang",
    template: "%s | Samsung",
  },
  description:
    "Temukan Samsung Galaxy S26 Ultra. Pilih kapasitas dan warna, lihat fitur unggulan kamera AI, layar AMOLED, dan dapatkan penawaran terbaik.",
  keywords: [
    "Galaxy S26 Ultra",
    "Samsung Galaxy S26 Ultra",
    "beli Galaxy S26 Ultra",
    "harga Galaxy S26 Ultra",
    "smartphone flagship",
  ],
  authors: [{ name: "Samsung" }],
  creator: "Samsung",
  publisher: "Samsung",
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
    siteName: "Samsung",
    title: "Galaxy S26 Ultra | Beli Sekarang",
    description:
      "Temukan Samsung Galaxy S26 Ultra. Pilih kapasitas dan warna, lihat fitur unggulan kamera AI, layar AMOLED, dan dapatkan penawaran terbaik.",
    images: [
      {
        url: "/og-image.jpg", // nanti bisa diganti dengan gambar asli
        width: 1200,
        height: 630,
        alt: "Galaxy S26 Ultra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy S26 Ultra | Beli Sekarang",
    description:
      "Temukan Samsung Galaxy S26 Ultra. Pilih kapasitas dan warna, lihat fitur unggulan kamera AI, layar AMOLED, dan dapatkan penawaran terbaik.",
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