import { ExternalLink, FileText } from "lucide-react";
import { publications, type PublicationStatus } from "@/lib/publications";
import { getDictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/*
  Akademik yayın listesi. lib/publications.ts boşken bu bölüm
  (ve header'daki linki) hiç render edilmez.
*/
const statusStyles: Record<PublicationStatus, string> = {
  published:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "in-review":
    "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  accepted: "bg-accent-soft text-accent-soft-foreground",
};

export function PublicationsSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <section id="akademik" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {dict.publications.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
        {dict.publications.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {dict.publications.subtitle}
      </p>

      {publications.length === 0 && (
        <div className="mt-8 flex items-start gap-3 rounded-lg border border-dashed border-border p-6">
          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">
              {dict.publications.emptyTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {dict.publications.emptyBody}
            </p>
          </div>
        </div>
      )}

      {sorted.length > 0 && (
      <ol className="mt-8 space-y-4">
        {sorted.map((pub) => (
          <li
            key={pub.title.tr}
            className="rounded-lg border border-border p-5"
          >
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <h3 className="font-medium leading-snug">
                  {pub.title[locale]}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pub.authors} · {pub.venue[locale]} · {pub.year}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex rounded-md px-2 py-0.5 text-xs font-medium",
                      statusStyles[pub.status],
                    )}
                  >
                    {dict.publications.status[pub.status]}
                  </span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {dict.publications.viewPaper}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      )}
    </section>
  );
}
