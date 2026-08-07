"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

/*
  TR ⇄ EN geçişi: bulunduğun sayfanın aynısına, diğer dilde gider.
  (/tr/blog → /en/blog gibi)
  Bilinçli olarak <Link> değil <a>: dil değişimi kök layout'u
  (html lang + tema scripti) değiştirdiği için tam sayfa yüklemesi
  gerekir; client-side geçiş React'te script-tag hatasına yol açıyor.
*/
export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const other: Locale = locale === "tr" ? "en" : "tr";
  const target = pathname.replace(/^\/(tr|en)(?=\/|$)/, `/${other}`);

  return (
    <a
      href={target}
      aria-label={other === "en" ? "Switch to English" : "Türkçeye geç"}
      className="inline-flex h-8 items-center rounded-md px-2 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {other.toUpperCase()}
    </a>
  );
}
