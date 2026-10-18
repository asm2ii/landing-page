"use client";

import { useState } from "react";
import { links } from "@/config";
export default function Home() {
  const [capacity, setCapacity] = useState("256GB");
  const [color, setColor] = useState("Titanium Black");

  const capacities = ["MIX PARLAY", "SLOT ONLILNE", "PKV GAMES", "LIVE CASINO", "LIVE TOGEL"];
  const colors = [
    { name: "Titanium Black", hex: "#1a1a1a" },
    { name: "Titanium Gray", hex: "#8a8a8a" },
    { name: "Titanium Blue", hex: "#4a6fa5" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">SAMSUNG</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href={links.produk} className="hover:text-blue-600">Produk</a>
            <a href={links.fitur} className="hover:text-blue-600">Fitur</a>
            <a href={links.spesifikasi} className="hover:text-blue-600">Spesifikasi</a>
            <a href={links.faq} className="hover:text-blue-600">FAQ</a>
          </nav>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Keranjang
          </button>
        </div>
      </header>

      {/* Hero + Product */}
      <section id="produk" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
          <img
            src="/produk.jpg"
            alt="Galaxy S26 Ultra"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Galaxy S26 Ultra</h1>
          <p className="text-xl text-gray-600 mb-6">Smartphone flagship dengan kamera AI dan layar terbaik.</p>
          <div className="mb-6">
            <p className="text-3xl font-bold text-gray-900">Rp 19.999.000</p>
            <p className="text-sm text-green-600">Hemat hingga Rp 2.200.000</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Kapasitas</h3>
            <div className="flex flex-wrap gap-3">
              {capacities.map((cap) => (
                <button
                  key={cap}
                  onClick={() => setCapacity(cap)}
                  className={`px-5 py-3 border rounded-xl ${
                    capacity === cap ? "border-black bg-black text-white" : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-3">Warna: {color}</h3>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`w-12 h-12 rounded-full border-2 ${color === c.name ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800">
              Beli Sekarang
            </button>
            <button className="flex-1 border border-black py-4 rounded-xl font-semibold hover:bg-gray-50">
              Tambah ke Wishlist
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fitur" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Kamera AI 200MP", desc: "Hasil foto luar biasa di segala kondisi cahaya." },
              { title: "Layar Dynamic AMOLED 2X", desc: "Tampilan cerah dan mulus untuk hiburan." },
              { title: "Baterai Tahan Lama", desc: "Pengisian cepat dan daya yang awet seharian." },
            ].map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spesifikasi */}
      <section id="spesifikasi" className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Spesifikasi</h2>
        <div className="border rounded-2xl overflow-hidden">
          {[
            ["Layar", "6.8\" Dynamic AMOLED 2X"],
            ["Prosesor", "Snapdragon 8 Elite"],
            ["RAM", "12GB"],
            ["Kamera Belakang", "200MP + 50MP + 12MP + 10MP"],
            ["Baterai", "5000 mAh"],
            ["Sistem Operasi", "Android 16"],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-2 border-b last:border-b-0">
              <div className="bg-gray-50 p-4 font-medium">{label}</div>
              <div className="p-4">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ulasan */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ulasan Pelanggan</h2>
          <p className="text-5xl font-bold text-yellow-500 mb-2">4.8</p>
          <p className="text-gray-600 mb-8">Dari 28.000+ ulasan</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { name: "Andi", text: "Kamera sangat jernih, baterai awet seharian." },
              { name: "Budi", text: "Layarnya luar biasa, nyaman untuk nonton." },
              { name: "Citra", text: "Performa cepat dan desainnya premium." },
            ].map((r) => (
              <div key={r.name} className="bg-white p-6 rounded-2xl">
                <p className="mb-3">"{r.text}"</p>
                <p className="font-semibold text-sm">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Pertanyaan Umum</h2>
        <div className="space-y-4">
          {[
            { q: "Apakah charger termasuk?", a: "Ya, charger dan kabel USB-C sudah termasuk dalam paket." },
            { q: "Apakah ada garansi resmi?", a: "Ya, garansi resmi Samsung 1 tahun." },
            { q: "Bisa tukar tambah?", a: "Ya, program tukar tambah tersedia dengan potongan harga." },
          ].map((item) => (
            <details key={item.q} className="border rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center text-sm">
        <p>© 2026 Samsung. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}