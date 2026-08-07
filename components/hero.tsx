import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { getDictionary, type Locale } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-16 sm:py-24">
      {/* Durum satırı: canlı nokta + kısa durum. Süs değil, bilgi. */}
      <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {dict.hero.status}
      </p>

      <p className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
        {dict.hero.title}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
        {dict.hero.headline}
      </p>

      <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" />
        {dict.hero.location}
      </p>

      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        {dict.hero.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {/* mailto yerine sayfadaki forma götürür: mail uygulaması
            kurulu olmayan ziyaretçilerde mailto hiçbir şey yapmaz */}
        <a
          href={`/${locale}/#iletisim`}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Mail className="h-4 w-4" />
          {dict.hero.contactButton}
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
