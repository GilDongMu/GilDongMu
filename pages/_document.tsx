import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/icons/symbol.svg" />
        <meta name="theme-color" content="#3D39F1" />
        <link rel="manifest" href="/manifest.json" />

        {/* Open Graph 메타 태그 */}
        <meta property="og:title" content="길동무 gildongmu" />
        <meta
          property="og:description"
          content="여행 친구를 구해봐요! 길동무"
        />
        <meta property="og:image" content="/icons/symbol.svg" />
        <meta property="og:url" content="http://34.228.244.93:3000/" />
        <meta property="og:type" content="website" />

        {/* Twitter 메타 태그 */}
        <meta name="twitter:card" content="/icons/symbol.svg" />
        <meta name="twitter:title" content="길동무 gildongmu" />
        <meta
          name="twitter:description"
          content="여행 친구를 구해봐요! 길동무"
        />
        <meta name="twitter:image" content="/icons/symbol.svg" />
      </Head>
      <body className="font-nanum-square-round">
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
              }).catch(function(error) {
                console.log('Service Worker registration failed:', error);
              });
            });
          }
        `,
          }}
        />
      </body>
    </Html>
  );
}
