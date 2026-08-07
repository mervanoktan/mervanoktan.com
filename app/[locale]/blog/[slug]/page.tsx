import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPost, getPosts } from "@/lib/content";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { MDXCaseStudy } from "@/components/mdx-case-study";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getPosts(locale).map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getPost(locale, slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPost(locale, slug);
  if (!post) notFound();

  const dict = getDictionary(locale);

  return (
    <article className="py-16">
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {dict.blog.back}
      </Link>

      <header className="mt-6">
        <time
          dateTime={post.frontmatter.date}
          className="font-mono text-xs text-muted-foreground"
        >
          {new Date(post.frontmatter.date).toLocaleDateString(
            locale === "tr" ? "tr-TR" : "en-US",
            { year: "numeric", month: "long", day: "numeric" },
          )}
        </time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          {post.frontmatter.title}
        </h1>
      </header>

      <div className="mt-10">
        <MDXCaseStudy source={post.content} />
      </div>
    </article>
  );
}
