import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

/*
  Link önizleme görseli (LinkedIn, WhatsApp, X, Slack...).
  Next.js bunu build sırasında üretir; ayrı bir görsel dosyası tutmaya gerek yok.
  Metinler dile göre değişir.
*/
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Portfolyo`;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "tr");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0c10",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Üstte marka çizgisi */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #4f46e5, #7c3aed 50%, #0ea5e9)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#8b93ff",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                backgroundColor: "#8b93ff",
              }}
            />
            {dict.hero.title}
          </div>

          <div
            style={{
              marginTop: 24,
              color: "#ececf1",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>

          <div
            style={{
              marginTop: 20,
              color: "#9ba0b0",
              fontSize: 34,
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {dict.hero.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6b7080",
            fontSize: 24,
          }}
        >
          <span>{dict.hero.location}</span>
          <span style={{ color: "#8b93ff" }}>
            {site.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
