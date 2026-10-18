"use client";

import { useState } from "react";
import { links } from "./config";
import Kontenin from "./konten";
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
          <div className="text-2xl font-bold text-gray-900">LIGA138 Platform</div>
          <nav className="flex gap-6">
  <a href={links.beranda}>Beranda</a>
  <a href={links.analisis}>Analisis</a>
  <a href={links.prediksi}>Prediksi</a>
  <a href={links.klasemen}>Klasemen</a>
  <a href={links.jadwal}>Jadwal</a>
  <a href={links.faq}>FAQ</a>
</nav>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Masuk
          </button>
        </div>
      </header>

      {/* Hero + Product */}
      <section id="produk" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
          <img
            src="/produk.jpg"
            alt="LIGA138 Platform"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">LIGA138 Platform</h1>
          <p className="text-xl text-gray-600 mb-6">Dapatkan prediksi skor, analisis pertandingan, dan informasi liga sepak bola terkini di Liga138 Platform. Cocok untuk penggemar bola yang ingin mengikuti perkembangan kompetisi.</p>
          <div className="mb-6">
            <p className="text-3xl font-bold text-gray-900">Rp 19.999.000</p>
            <p className="text-sm text-green-600">Hemat hingga Rp 2.200.000</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Game Favorite</h3>
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

          <div className="flex gap-4">
  <a
    href={links.analisis}
    className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 text-center"
  >
    Lihat Analisis
  </a>
  <a
    href={links.klasemen}
    className="flex-1 border border-black py-4 rounded-xl font-semibold hover:bg-gray-50 text-center"
  >
    Lihat Klasemen
  </a>
</div>
        </div>
      </section>

      {/* Features */}
      <section id="fitur" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan Liga138</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
    title: "Deposit QRIS Online 24 jam", 
    desc: "Isi saldo kapan saja dengan QRIS secara cepat dan praktis." 
  },
  { 
    title: "Pasaran Mix Parlay Terlengkap", 
    desc: "Pilihan mix parlay lengkap dari berbagai liga dan pertandingan." 
  },
  { 
    title: "Live Customer Service 24 jam", 
    desc: "Tim support siap membantu setiap saat melalui live chat." 
  },
  { 
    title: "Bonus dan Event Paling Cuan", 
    desc: "Berbagai bonus dan event menarik dengan peluang keuntungan lebih besar." 
  },
  { 
    title: "Cashout dan Parlay 2 tim", 
    desc: "Fitur cashout dan parlay 2 tim untuk lebih fleksibel dalam bermain." 
  },
  { 
    title: "Link Login mudah di akses", 
    desc: "Akses login mudah dan cepat tanpa kendala." 
  },
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
        <h2 className="text-3xl font-bold text-center mb-10">
          Platform - Prediksi Skor & Analisis Pertandingan
        </h2>
        <div className="border rounded-2xl overflow-hidden">
          {[
            ["Deposit", "QRIS Online 24 Jam"],
            ["Pasaran", "Mix Parlay Terlengkap"],
            ["Support", "Live Customer Service 24 Jam"],
            ["Bonus", "Bonus dan Event Paling Cuan"],
            ["Fitur", "Cashout dan Parlay 2 Tim"],
            ["Akses", "Link Login Mudah Diakses"],
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
    <h2 className="text-3xl font-bold mb-4">Ulasan Pengguna</h2>
    <p className="text-5xl font-bold text-yellow-500 mb-2">4.8</p>
    <p className="text-gray-600 mb-8">Dari 28.000+ ulasan</p>
    <div className="grid md:grid-cols-3 gap-6 text-left">
      {[
        { name: "Andi", text: "Prediksi skornya cukup akurat, sangat membantu saat main mix parlay." },
        { name: "Budi", text: "Analisis pertandingan jelas dan mudah dipahami, cocok buat pemula." },
        { name: "Citra", text: "Deposit QRIS cepat dan customer service responsif 24 jam." },
        { name: "Dedi", text: "Link login mudah diakses, tidak ribet saat ingin masuk." },
        { name: "Eka", text: "Pasaran mix parlay lengkap dan proses cashout lancar." },
        { name: "Fajar", text: "Bonus dan eventnya menarik, pengalaman main jadi lebih seru." },
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
      {
        q: "Apa itu Liga138 Platform?",
        a: "Liga138 Platform adalah situs informasi sepak bola yang menyediakan prediksi skor, analisis pertandingan, klasemen liga, jadwal, serta update kompetisi secara rutin dan mudah dipahami."
      },
      {
        q: "Bagaimana cara mengakses Liga138?",
        a: "Akses dapat dilakukan melalui link login resmi yang tersedia di situs. Disarankan selalu menggunakan link yang valid agar proses masuk lebih aman dan lancar."
      },
      {
        q: "Seberapa akurat prediksi skor yang diberikan?",
        a: "Prediksi skor disusun berdasarkan analisis data pertandingan, form tim, dan informasi terkini. Namun hasil akhir tetap bergantung pada jalannya pertandingan dan tidak dapat dijamin 100% akurat."
      },
      {
        q: "Metode deposit apa saja yang tersedia?",
        a: "Salah satu metode yang didukung adalah deposit QRIS online yang dapat dilakukan kapan saja secara praktis dan cepat."
      },
      {
        q: "Apakah tersedia layanan customer service?",
        a: "Ya, tersedia live customer service 24 jam yang siap membantu pengguna melalui fitur live chat."
      },
      {
        q: "Bagaimana cara menjaga keamanan akun?",
        a: "Gunakan selalu link resmi, jangan membagikan informasi akun kepada pihak lain, dan pastikan mengakses situs dari perangkat yang aman."
      },
      {
        q: "Apakah informasi di Liga138 Platform diperbarui secara rutin?",
        a: "Ya, informasi seperti klasemen, jadwal, analisis, dan prediksi skor diperbarui secara berkala mengikuti perkembangan kompetisi."
      },
    ].map((item) => (
      <details key={item.q} className="border rounded-xl p-4">
        <summary className="font-semibold cursor-pointer">{item.q}</summary>
        <p className="mt-2 text-gray-600">{item.a}</p>
      </details>
    ))}
  </div>
</section>
<KontenPanjang />
      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center text-sm">
        <p>© 2026 Samsung. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}