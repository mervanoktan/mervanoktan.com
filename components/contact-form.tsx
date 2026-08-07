"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

/*
  Backend gerektirmeyen form: FormSubmit.co, gönderimi doğrudan
  site.email adresine e-posta olarak iletir. Ücretsizdir, API anahtarı
  istemez. İlk gönderimde FormSubmit sana tek seferlik bir onay maili
  atar — onayladıktan sonra form tamamen aktif olur.
  Metinler sunucudan (lib/i18n.ts) prop olarak gelir.
*/
export function ContactForm({ form }: { form: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    // Honeypot: botlar doldurur, insanlar görmez
    if (data.get("_gotcha")) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-accent-soft p-6 text-sm text-accent-soft-foreground">
        <p className="font-semibold">{form.successTitle}</p>
        <p className="mt-1">{form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* FormSubmit ayarları */}
      <input type="hidden" name="_subject" value={form.subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            {form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={form.namePlaceholder}
            className="h-10 rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            {form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={form.emailPlaceholder}
            className="h-10 rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={form.messagePlaceholder}
          className="resize-y rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          {form.errorPrefix}{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{" "}
          {form.errorSuffix}
        </p>
      )}

      <div>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {form.sending}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {form.submit}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
