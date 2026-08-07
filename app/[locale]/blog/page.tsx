import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/content";
import { getDictionary, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.blog.pageTitle,
    description: dict.blog.pageSubtitle,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const posts = getPosts(locale);

  return (
    <section className="py-16">
      <h1 className="text-2xl font-bold tracking-tight">
        {dict.blog.pageTitle}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {dict.blog.pageSubtitle}
      </p>

      <ul className="mt-10 space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${locale}/blog/${post.slug}`} className="group block">
              <time
                dateTime={post.frontmatter.date}
                className="font-mono text-xs text-muted-foreground"
              >
                {new Date(post.frontmatter.date).toLocaleDateString(
                  locale === "tr" ? "tr-TR" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
              </time>
              <h2 className="mt-1 font-semibold group-hover:text-accent">
                {post.frontmatter.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {post.frontmatter.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
