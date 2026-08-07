import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { ExperienceSection } from "@/components/experience";
import { PublicationsSection } from "@/components/publications";
import { ClientWorkSection } from "@/components/client-work";
import { GithubProjects } from "@/components/github-projects";
import { ContactForm } from "@/components/contact-form";
import { getFeaturedProjects, getPosts } from "@/lib/content";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const projects = getFeaturedProjects(locale);
  const posts = getPosts(locale).slice(0, 3);

  return (
    <>
      <Hero locale={locale} />

      <section id="projeler" className="scroll-mt-20 py-16">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {dict.projects.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          {dict.projects.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {dict.projects.subtitle}
        </p>
        <div className="mt-8 grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </section>

      <ClientWorkSection locale={locale} />

      <GithubProjects locale={locale} />

      <ExperienceSection locale={locale} />

      <PublicationsSection locale={locale} />

      {posts.length > 0 && (
        <section className="py-16">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {dict.blog.eyebrow}
          </p>
          <div className="mt-2 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              {dict.blog.recentTitle}
            </h2>
            <Link
              href={`/${locale}/blog`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {dict.blog.all}
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-medium group-hover:text-accent">
                    {post.frontmatter.title}
                  </span>
                  <time
                    dateTime={post.frontmatter.date}
                    className="shrink-0 font-mono text-xs text-muted-foreground"
                  >
                    {new Date(post.frontmatter.date).toLocaleDateString(
                      locale === "tr" ? "tr-TR" : "en-US",
                      { year: "numeric", month: "short" },
                    )}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section id="iletisim" className="scroll-mt-20 py-16">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {dict.contact.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          {dict.contact.title}
        </h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {dict.contact.intro}{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent hover:underline"
          >
            {site.email}
          </a>{" "}
          {dict.contact.introSuffix}
        </p>
        <div className="mt-8 max-w-xl">
          <ContactForm form={dict.contact.form} />
        </div>
      </section>
    </>
  );
}
