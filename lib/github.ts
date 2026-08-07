/*
  GitHub'daki public repoların otomatik çekilir (saatte bir tazelenir).
  Kontrol tamamen sende:
  - hidden:   buraya adını yazdığın repo sitede GÖRÜNMEZ
  - featured: buraya adını yazdığın repo listenin EN ÜSTÜNDE, işaretli gösterilir
  Repo adları github.com'daki halleriyle, büyük/küçük harf duyarlı yazılmalı.
*/
export const githubConfig = {
  username: "mervanoktan",
  hidden: [
    "Otomasyon-video-linki",
    "Oryantasyon-F-nal-Odev-",
    "Oryantasyon-F-nal-devi",
    "Web_lab",
    "rs-algoritmas-",
    // Eski adıyla kalan boş repo; gerçek proje artık Camply
    "CampusMatch",
  ],
  featured: ["Camply", "Ntp_Otomasyon"],
  /*
    Maskeleme: repo, sitede farklı bir ad ve açıklamayla gösterilir;
    link yine gerçek GitHub repo'suna gider. Açıklama verilmezse
    GitHub'daki açıklama kullanılır.
  */
  overrides: {
    Ntp_Otomasyon: {
      displayName: {
        tr: "İşyeri Otomasyonu",
        en: "Workplace Automation",
      },
      description: {
        tr: "Stok, fatura, cari ve kasa yönetimi içeren kapsamlı masaüstü işletme otomasyonu (C# + DevExpress + MSSQL).",
        en: "Comprehensive desktop business automation with inventory, invoicing, accounts and cash management (C# + DevExpress + MSSQL).",
      },
    },
  } as Record<
    string,
    {
      displayName?: { tr: string; en: string };
      description?: { tr: string; en: string };
    }
  >,
};

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  featured: boolean;
};

export async function getGithubRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubConfig.username}/repos?per_page=100&sort=pushed`,
      {
        headers: { Accept: "application/vnd.github+json" },
        // ISR: GitHub'a her istekte değil, saatte bir gidilir
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return [];

    const repos: Repo[] = await res.json();

    return repos
      .filter(
        (r) =>
          !r.fork &&
          !r.archived &&
          !githubConfig.hidden.includes(r.name),
      )
      .map((r) => ({
        ...r,
        featured: githubConfig.featured.includes(r.name),
      }))
      .sort((a, b) => {
        // Öne çıkanlar üstte (featured dizisindeki sırayla), gerisi son push'a göre
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        if (a.featured && b.featured) {
          return (
            githubConfig.featured.indexOf(a.name) -
            githubConfig.featured.indexOf(b.name)
          );
        }
        return (
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
      });
  } catch {
    // GitHub erişilemezse site patlamasın, bölüm sessizce gizlensin
    return [];
  }
}
