import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { getDictionary, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const sitemap = [
    { href: `/${locale}/#projeler`, label: dict.nav.projects },
    { href: `/${locale}/#deneyim`, label: dict.nav.experience },
    { href: `/${locale}/#akademik`, label: dict.publications.nav },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/#iletisim`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Kimlik */}
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-sm font-semibold">
              <span className="h-2 w-2 rounded-sm bg-accent" />
              {site.name.toLowerCase().replace(" ", ".")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {dict.hero.headline}
            </p>
          </div>

          {/* Site haritası */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {dict.footer.sitemap}
            </h3>
            <ul className="mt-3 space-y-2">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {dict.footer.social}
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {dict.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
