import { links } from "../config";
export const metadata = {
  title: "Liga138 Platform",
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
        <style>{`
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f8fafc; margin: 0; }
          .container { max-width: 480px; margin: 0 auto; padding: 24px 16px; }
          .card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          .content { padding: 24px; text-align: center; }
          h1 { font-size: 24px; margin: 16px 0 8px; color: #111827; }
          p { color: #4b5563; font-size: 15px; line-height: 1.6; margin-bottom: 24px; }
          .btn { display: block; padding: 14px; border-radius: 10px; text-decoration: none; font-weight: 600; margin-bottom: 12px; }
          .btn-primary { background: #111827; color: white; }
          .btn-secondary { background: #f3f4f6; color: #111827; border: 1px solid #e5e7eb; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="card">
            <img
              src="/produk.jpg"
              alt="Liga138 Platform"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div className="content">
              <h1>Liga138 Platform</h1>
              <p>
                Dapatkan prediksi skor, analisis pertandingan, dan informasi liga sepak bola terkini.
              </p>

              <a href={links.daftar} className="btn btn-primary">
                Link Login Alternatif 1
                </a>
                <a href={links.login} className="btn btn-secondary">
                Link Login Alternatif 2
                </a>
                <a href={links.jadwal} className="btn btn-secondary">
                Link Login Alternatif 3
                </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}