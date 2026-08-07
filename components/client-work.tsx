import { ArrowUpRight, Globe } from "lucide-react";
import { clientWork } from "@/lib/client-work";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";

/*
  Müşteri işleri: case study kartlarından daha kompakt bir liste.
  Buradaki vurgu mimari değil, "canlıda çalışıyor" mesajı —
  bu yüzden en belirgin öğe site adresinin kendisi.
*/
export function ClientWorkSection({ locale }: { locale: Locale }) {
  if (clientWork.length === 0) return null;

  const dict = getDictionary(locale);

  return (
    <section id="musteri-isleri" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {dict.clientWork.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
        {dict.clientWork.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {dict.clientWork.subtitle}
      </p>

      <ul className="mt-8 space-y-4">
        {clientWork.map((work) => (
          <li key={work.url}>
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold tracking-tight group-hover:text-accent">
                  {work.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {work.type[locale]}
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {work.description[locale]}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {work.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              {/* Bölümün asıl kanıtı: canlı adres */}
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-accent-soft px-2.5 py-1 font-mono text-sm font-medium text-accent-soft-foreground">
                <Globe className="h-3.5 w-3.5" />
                {work.displayUrl}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
