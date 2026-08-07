"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

/*
  Mobil hamburger menü: dar ekranlarda menü linkleri buraya taşınır.
  Panel, header'ın hemen altında tam genişlikte açılır; bir linke
  tıklanınca kendiliğinden kapanır.
*/
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-full border-b border-border bg-background shadow-lg">
          <ul className="mx-auto max-w-3xl px-6 py-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
