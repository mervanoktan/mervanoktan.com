import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { defaultLocale, type Locale } from "@/lib/i18n";

/*
  MDX içerikler dil klasörlerinde durur:
    content/projects/tr/*.mdx   content/projects/en/*.mdx
    content/blog/tr/*.mdx       content/blog/en/*.mdx
  Slug = dosya adı. Aynı içeriğin çevirisi aynı dosya adıyla kaydedilir;
  İngilizce çevirisi olmayan içerik otomatik olarak Türkçe haliyle gösterilir.
*/
const CONTENT_DIR = path.join(process.cwd(), "content");

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  /** Kartta öne çıkan tek metrik, ör: "p95 gecikme %40 düştü" */
  highlight: string;
  /** Proje türü rozeti, ör: "Web + Mobil", "Masaüstü" */
  category?: string;
  /** Ekran görüntüsü: public/ altındaki yol, ör: "/projects/camply.png" */
  image?: string;
  tech: string[];
  github?: string;
  demo?: string;
  year: number;
  featured: boolean;
};

export type PostFrontmatter = {
  title: string;
  summary: string;
  date: string; // ISO: 2026-01-15
};

export type Entry<T> = {
  slug: string;
  frontmatter: T;
  content: string;
};

function readLocaleDir<T>(
  dir: "projects" | "blog",
  locale: Locale,
): Map<string, Entry<T>> {
  const full = path.join(CONTENT_DIR, dir, locale);
  const entries = new Map<string, Entry<T>>();
  if (!fs.existsSync(full)) return entries;

  for (const file of fs.readdirSync(full)) {
    if (!file.endsWith(".mdx")) continue;
    const raw = fs.readFileSync(path.join(full, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    entries.set(slug, { slug, frontmatter: data as T, content });
  }
  return entries;
}

function readDir<T>(dir: "projects" | "blog", locale: Locale): Entry<T>[] {
  // Varsayılan dil taban alınır; istenen dilde çevirisi varsa üzerine yazılır.
  const base = readLocaleDir<T>(dir, defaultLocale);
  if (locale !== defaultLocale) {
    for (const [slug, entry] of readLocaleDir<T>(dir, locale)) {
      base.set(slug, entry);
    }
  }
  return [...base.values()];
}

export function getProjects(locale: Locale): Entry<ProjectFrontmatter>[] {
  return readDir<ProjectFrontmatter>("projects", locale).sort(
    (a, b) => b.frontmatter.year - a.frontmatter.year,
  );
}

export function getFeaturedProjects(
  locale: Locale,
): Entry<ProjectFrontmatter>[] {
  return getProjects(locale).filter((p) => p.frontmatter.featured);
}

export function getProject(
  locale: Locale,
  slug: string,
): Entry<ProjectFrontmatter> | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getPosts(locale: Locale): Entry<PostFrontmatter>[] {
  return readDir<PostFrontmatter>("blog", locale).sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

export function getPost(
  locale: Locale,
  slug: string,
): Entry<PostFrontmatter> | undefined {
  return getPosts(locale).find((p) => p.slug === slug);
}
