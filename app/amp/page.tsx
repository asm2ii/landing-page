export const metadata = {
  title: "Halaman AMP",
  alternates: {
    canonical: "https://liga138-platform.vercel.app/",
  },
};

export default function AmpPage() {
  return (
    <html lang="id" {...{ amp: "" }}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <link rel="canonical" href="https://liga138-platform.vercel.app/" />
        <style
          amp-boilerplate=""
          dangerouslySetInnerHTML={{
            __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`,
          }}
        />
        <noscript>
          <style
            amp-boilerplate=""
            dangerouslySetInnerHTML={{
              __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`,
            }}
          />
        </noscript>
        <script async src="https://cdn.ampproject.org/v0.js" />
      </head>
      <body>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            textAlign: "center",
          }}
        >
          {/* Gambar */}
          <amp-img
            src="/produk.jpg"
            width="600"
            height="400"
            layout="responsive"
            alt="Gambar"
          />

          <h1 style={{ marginTop: "24px" }}>Judul Halaman</h1>
          <p>Deskripsi singkat di sini.</p>

          {/* 3 Tombol */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "32px",
            }}
          >
            <a
              href="https://contoh.com/1"
              style={{
                background: "#000",
                color: "#fff",
                padding: "14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Tombol 1
            </a>
            <a
              href="https://contoh.com/2"
              style={{
                background: "#333",
                color: "#fff",
                padding: "14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Tombol 2
            </a>
            <a
              href="https://contoh.com/3"
              style={{
                background: "#555",
                color: "#fff",
                padding: "14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
              }}
            >
              Tombol 3
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}