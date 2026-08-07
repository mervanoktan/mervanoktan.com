import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/*
  /robots.txt — arama motorlarına siteyi taramaları için izin verir
  ve site haritasının yerini gösterir.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
