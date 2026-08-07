import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProject, getProjects } from "@/lib/content";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { MDXCaseStudy } from "@/components/mdx-case-study";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjects(locale).map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getProject(locale, slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(locale, slug);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const { frontmatter: fm, content } = project;

  return (
    <article className="py-16">
      <Link
        href={`/${locale}/#projeler`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {dict.projects.back}
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{fm.title}</h1>
          {fm.category && (
            <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {fm.category}
            </span>
          )}
        </div>
        <p className="mt-3 text-muted-foreground">{fm.summary}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {fm.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-5 flex gap-4 text-sm">
          {fm.github && (
            <a
              href={fm.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <Github className="h-4 w-4" />
              {dict.projects.sourceCode}
            </a>
          )}
          {fm.demo && (
            <a
              href={fm.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <ArrowUpRight className="h-4 w-4" />
              {dict.projects.liveDemo}
            </a>
          )}
        </div>
      </header>

      {fm.image && (
        <img
          src={fm.image}
          alt={fm.title}
          className="mt-8 w-full rounded-lg border border-border"
        />
      )}

      <div className="mt-10">
        <MDXCaseStudy source={content} />
      </div>
    </article>
  );
}
