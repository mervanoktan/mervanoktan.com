import Link from "next/link";
import { site } from "@/lib/site";
import { getDictionary, type Locale } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { HeaderNav } from "@/components/header-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const nav = [
    { href: `/${locale}/#projeler`, label: dict.nav.projects, section: "projeler" },
    { href: `/${locale}/#deneyim`, label: dict.nav.experience, section: "deneyim" },
    { href: `/${locale}/#akademik`, label: dict.publications.nav, section: "akademik" },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/#iletisim`, label: dict.nav.contact, section: "iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="brand-hairline" />
      {/* relative: mobil menü paneli bu satırın altına konumlanır */}
      <div className="relative mx-auto flex h-14 max-w-3xl items-center justify-between gap-2 px-6">
        <Link
          href={`/${locale}`}
          className="inline-flex shrink-0 items-center gap-2 font-mono text-sm font-semibold"
        >
          <span className="h-2 w-2 rounded-sm bg-accent" />
          {site.name.toLowerCase().replace(" ", ".")}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Masaüstü: menü linkleri (mobilde gizli) */}
          <div className="hidden md:block">
            <HeaderNav items={nav} locale={locale} />
          </div>

          {/* Ayarlar grubu: her ekranda görünür */}
          <div className="flex items-center gap-1 md:ml-1 md:border-l md:border-border md:pl-3">
            <LanguageToggle locale={locale} />
            <ThemeToggle />
          </div>

          {/* Mobil: hamburger menü (masaüstünde gizli) */}
          <MobileNav items={nav.map(({ href, label }) => ({ href, label }))} />
        </div>
      </div>
    </header>
  );
}
