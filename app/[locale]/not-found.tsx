import Link from "next/link";
import { getDictionary, defaultLocale } from "@/lib/i18n";

/*
  Sayfa içinden notFound() çağrıldığında (ör. olmayan bir proje adresi)
  gösterilir. Adresi eşleşmeyen istekler ise app/global-not-found.tsx'e düşer.
  Bu bileşen [locale] layout'unun içinde render edildiği için header ve
  footer zaten çevresinde bulunur.
*/
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-mono text-7xl font-bold tracking-tight text-accent">
        {dict.notFound.code}
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        {dict.notFound.description}
      </p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-8 inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        {dict.notFound.backHome}
      </Link>
    </section>
  );
}
