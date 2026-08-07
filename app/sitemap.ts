import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";
import { getPosts, getProjects } from "@/lib/content";

/*
  Google'a hangi sayfaların var olduğunu bildirir (/sitemap.xml).
  Her sayfa iki dilde listelenir ve birbirinin alternatifi olarak işaretlenir.
  Alan adı değişirse tek yapılacak şey lib/site.ts içindeki url'i güncellemek.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${site.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });

    entries.push({
      url: `${site.url}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });

    for (const project of getProjects(locale)) {
      entries.push({
        url: `${site.url}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const post of getPosts(locale)) {
      entries.push({
        url: `${site.url}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
