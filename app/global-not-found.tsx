import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import { getDictionary, defaultLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import "./globals.css";

/*
  404 sayfası.

  Neden "global-not-found"? Bu projede kök layout app/[locale]/layout.tsx
  içinde olduğu için, eşleşmeyen adresler hiçbir segmentin altına düşmüyor ve
  segment seviyesindeki not-found.tsx dosyaları devreye girmiyor. Next 16'nın
  bu durum için sunduğu yöntem global-not-found; kendi <html> ve <body>
  etiketlerini kendisi tanımlar.

  Dil bilgisi burada mevcut olmadığı için varsayılan dil (Türkçe) kullanılır.
*/
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "404",
};

export default function GlobalNotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <html lang={defaultLocale}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <header className="border-b border-border">
            <div className="brand-hairline" />
            <div className="mx-auto flex h-14 max-w-3xl items-center px-6">
              <Link
                href={`/${defaultLocale}`}
                className="inline-flex items-center gap-2 font-mono text-sm font-semibold"
              >
                <span className="h-2 w-2 rounded-sm bg-accent" />
                {site.name.toLowerCase().replace(" ", ".")}
              </Link>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
            <p className="font-mono text-7xl font-bold tracking-tight text-accent">
              {dict.notFound.code}
            </p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight">
              {dict.notFound.title}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {dict.notFound.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/tr"
                className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                {dict.notFound.backHome}
              </Link>
              <Link
                href="/en"
                className="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                English
              </Link>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
