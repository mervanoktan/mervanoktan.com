import { ArrowUpRight, Github, Star } from "lucide-react";
import { getGithubRepos, githubConfig } from "@/lib/github";
import { getDictionary, type Locale } from "@/lib/i18n";

/*
  GitHub dili → renk. GitHub'ın kendi dil renkleriyle uyumlu kısa bir harita;
  listede olmayan diller nötr gri nokta alır.
*/
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  "C#": "#178600",
  PHP: "#4F5D95",
  Blade: "#f7523f",
  SCSS: "#c6538c",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
};

export async function GithubProjects({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const repos = await getGithubRepos();

  // API erişilemezse veya repo yoksa bölümü hiç render etme
  if (repos.length === 0) return null;

  return (
    <section id="github" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {dict.github.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
        {dict.github.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {dict.github.subtitle}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {repos.map((repo) => {
          // Maskeleme: varsa görünen ad/açıklama config'den gelir
          const override = githubConfig.overrides[repo.name];
          const displayName = override?.displayName?.[locale] ?? repo.name;
          const description =
            override?.description?.[locale] ?? repo.description;

          return (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="truncate font-mono text-sm font-semibold group-hover:text-accent">
                {displayName}
              </span>
              {repo.featured && (
                <span className="ml-auto shrink-0 rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-soft-foreground">
                  {dict.github.featured}
                </span>
              )}
            </div>

            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {description ?? dict.github.noDescription}
            </p>

            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              {repo.language && (
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        languageColors[repo.language] ?? "#8b8b8b",
                    }}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {repo.stargazers_count}
                </span>
              )}

              {/* Repo'nun GitHub'daki "Website" alanı doluysa canlı demo rozeti */}
              {repo.homepage && (
                <span className="ml-auto inline-flex items-center gap-1 rounded-md bg-accent-soft px-1.5 py-0.5 font-medium text-accent-soft-foreground">
                  {dict.github.live}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              )}
            </div>
          </a>
          );
        })}
      </div>

      <a
        href={`https://github.com/${githubConfig.username}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
      >
        {dict.github.allRepos}
      </a>
    </section>
  );
}
