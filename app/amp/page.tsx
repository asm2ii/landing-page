export default function AmpPage() {
  return (
    <html amp="" lang="id">
      <head>
        <meta charSet="utf-8" />
        <title>Liga138 Platform</title>
        <link rel="canonical" href="https://liga138-platform.vercel.app/" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <style amp-boilerplate="">
          {`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}
        </style>
        <noscript>
          <style amp-boilerplate="">
            {`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}
          </style>
        </noscript>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <style amp-custom>{`
          body { font-family: system-ui, sans-serif; background:#f8fafc; margin:0; }
          .wrap { max-width:480px; margin:0 auto; padding:20px; }
          .card { background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,.08); }
          .content { padding:24px; text-align:center; }
          h1 { font-size:22px; margin:0 0 8px; }
          p { color:#4b5563; margin-bottom:20px; }
          .btn { display:block; padding:14px; border-radius:10px; text-decoration:none; font-weight:600; margin-bottom:10px; }
          .btn1 { background:#111; color:#fff; }
          .btn2 { background:#f3f4f6; color:#111; }
        `}</style>
      </head>
      <body>
        <div className="wrap">
          <div className="card">
            <amp-img
              src="/produk.jpg"
              width="600"
              height="400"
              layout="responsive"
              alt="Liga138"
            ></amp-img>
            <div className="content">
              <h1>Liga138 Platform</h1>
              <p>Prediksi skor dan analisis pertandingan sepak bola.</p>
              <a href="#" className="btn btn1">Lihat Analisis</a>
              <a href="#" className="btn btn2">Lihat Klasemen</a>
              <a href="#" className="btn btn2">Lihat Jadwal</a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}