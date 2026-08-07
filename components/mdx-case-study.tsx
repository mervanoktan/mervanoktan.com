import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { cn } from "@/lib/utils";

/*
  MDX gövdesini render eden sunucu bileşeni.
  - Tipografi: @tailwindcss/typography (prose) — okunabilirlik önce gelir.
  - Kod blokları: rehype-pretty-code + shiki, build sırasında renklendirilir
    (client'a highlight JS'i gitmez).
  - MDX içinde kullanılabilen özel bileşenler: <Metric>, <Callout>
*/

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="not-prose flex flex-col rounded-lg border border-border bg-muted/50 p-4">
      <span className="text-2xl font-bold tracking-tight text-accent">
        {value}
      </span>
      <span className="mt-1 text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

function MetricGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {children}
    </div>
  );
}

/*
  Telefon ekran görüntüleri için: dikey görselleri yan yana dizer.
  Kullanımı (MDX içinde):
    <Phones
      images={[
        { src: "/projects/camply-mobil-1.png", alt: "Ana ekran" },
        { src: "/projects/camply-mobil-2.png", alt: "Harita" },
      ]}
    />
  Dar ekranlarda yatay kaydırılır, geniş ekranlarda ortalanır.
*/
function Phones({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="not-prose my-8 -mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
      <div className="flex justify-start gap-4 sm:justify-center">
        {images.map((img) => (
          <figure key={img.src} className="w-40 shrink-0 sm:w-44">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-xl border border-border"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border-l-2 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed text-accent-soft-foreground">
      {children}
    </div>
  );
}

const components = {
  Metric,
  MetricGrid,
  Callout,
  Phones,
};

export function MDXCaseStudy({
  source,
  className,
}: {
  source: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-neutral max-w-none dark:prose-invert",
        "prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
        "prose-pre:bg-muted prose-code:before:content-none prose-code:after:content-none",
        className,
      )}
    >
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                { theme: { light: "github-light", dark: "github-dark" } },
              ],
            ],
          },
        }}
      />
    </div>
  );
}
