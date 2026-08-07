"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  /** Ana sayfadaki bölüm id'si — kaydırma vurgusu için */
  section?: string;
};

/*
  Menü linkleri + aktif bölüm vurgusu.
  Ana sayfada kaydırdıkça hangi bölümdeysen o link accent renkte görünür;
  blog sayfalarındayken "Blog" vurgulanır.
*/
export function HeaderNav({
  items,
  locale,
}: {
  items: NavItem[];
  locale: string;
}) {
  const pathname = usePathname() ?? "";
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }
    const sectionIds = items
      .map((i) => i.section)
      .filter((s): s is string => Boolean(s));

    const onScroll = () => {
      // Ekranın üst %40'ını geçen son bölüm "aktif" sayılır
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, items]);

  return (
    <nav className="flex items-center gap-1">
      {items.map((item) => {
        const isActive = item.section
          ? isHome && activeSection === item.section
          : pathname.startsWith(item.href); // Blog gibi ayrı sayfalar

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground",
              isActive
                ? "font-medium text-accent"
                : "text-muted-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
