import { cn } from "@/lib/utils";

/*
  Teknoloji etiketleri için sade badge.
  Renk yok, doygunluk yok — sadece tipografi ve ince bir çerçeve.
*/
export function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
