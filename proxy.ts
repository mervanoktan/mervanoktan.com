import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

/*
  Dil öneki olmayan istekleri varsayılan dile yönlendirir:
  /            → /tr
  /blog        → /tr/blog
  /en/blog     → dokunulmaz
  (Next 16'da "middleware" dosya adının yeni karşılığı "proxy".)
*/
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // _next, api ve uzantılı dosyalar (favicon, resimler...) hariç her yol
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
