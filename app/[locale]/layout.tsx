import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${dict.hero.title}`,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    openGraph: {
      title: `${site.name} — ${dict.hero.title}`,
      description: dict.meta.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      languages: {
        tr: `${site.url}/tr`,
        en: `${site.url}/en`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  /*
    Google'ın "Mervan Oktan" aramasında kim olduğunu anlaması için
    yapısal veri. Arama sonuçlarında kimlik eşleşmesini güçlendirir.
  */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: dict.hero.title,
    description: dict.meta.description,
    url: `${site.url}/${locale}`,
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Fırat Üniversitesi",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Elazığ",
      addressCountry: "TR",
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-dvh flex-col">
            <SiteHeader locale={locale as Locale} />
            <main className="mx-auto w-full max-w-3xl flex-1 px-6">
              {children}
            </main>
            <SiteFooter locale={locale as Locale} />
          </div>
        </ThemeProvider>
        {/* Ziyaretçi istatistikleri ve sayfa hızı ölçümü — yalnızca Vercel'de çalışır */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
