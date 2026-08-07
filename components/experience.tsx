import { getDictionary, type Locale } from "@/lib/i18n";

/*
  Yüzde çubuğu yok. Sol kolonda uzmanlık alanları (ne + nasıl),
  sağda kronolojik iş deneyimi. Metinler lib/i18n.ts'ten gelir.
*/
export function ExperienceSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="deneyim" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {dict.experience.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
        {dict.experience.title}
      </h2>

      <div className="mt-8 grid gap-12 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {dict.experience.expertiseHeading}
          </h3>
          <dl className="mt-4 space-y-5">
            {dict.experience.expertise.map((item) => (
              <div key={item.area}>
                <dt className="text-sm font-medium">{item.area}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {dict.experience.workHeading}
          </h3>
          <ol className="mt-4 space-y-6 border-l border-border pl-5">
            {dict.experience.work.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[26px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-accent-soft" />
                <p className="font-mono text-xs text-muted-foreground">
                  {job.period}
                </p>
                <p className="mt-1 text-sm font-medium">
                  {job.role} · {job.company}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
