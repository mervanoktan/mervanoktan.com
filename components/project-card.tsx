import Link from "next/link";
import { ArrowUpRight, Github, TrendingUp } from "lucide-react";
import type { Entry, ProjectFrontmatter } from "@/lib/content";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";

/*
  Ekran görüntüsü yerine bilgi hiyerarşisi:
  başlık → özet → öne çıkan metrik → teknolojiler → bağlantılar.
  Kartın tamamı case study sayfasına gider; GitHub/Demo ayrı linkler.
*/
export function ProjectCard({
  project,
  locale,
}: {
  project: Entry<ProjectFrontmatter>;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const { slug, frontmatter: fm } = project;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-border transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      {/* Ekran görüntüsü: frontmatter'da image tanımlıysa gösterilir */}
      {fm.image && (
        <img
          src={fm.image}
          alt={fm.title}
          className="w-full border-b border-border"
        />
      )}

      <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold tracking-tight">
            <Link
              href={`/${locale}/projects/${slug}`}
              className="after:absolute after:inset-0"
            >
              {fm.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{fm.summary}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {fm.category && (
            <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {fm.category}
            </span>
          )}
          <span className="font-mono text-xs text-muted-foreground">
            {fm.year}
          </span>
        </div>
      </div>

      {/* Sonuç/metrik: renkli rozet — kartın tek renk vurgusu burada */}
      <p className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent-soft-foreground">
        <TrendingUp className="h-3.5 w-3.5" />
        {fm.highlight}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {fm.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm">
        <span className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors group-hover:text-accent">
          {dict.projects.caseStudy}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
        {fm.github && (
          <a
            href={fm.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" />
            {dict.projects.code}
          </a>
        )}
        {fm.demo && (
          <a
            href={fm.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
            {dict.projects.demo}
          </a>
        )}
      </div>
      </div>
    </article>
  );
}
