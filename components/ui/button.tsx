import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
  Shadcn/ui tarzı, ancak yalnızca ihtiyaç duyulan iki varyant:
  default (dolgulu) ve outline. Fazlası şu an gereksiz.
*/
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground shadow-sm hover:opacity-90",
        outline:
          "border border-border bg-transparent hover:border-accent/40 hover:bg-accent-soft hover:text-accent-soft-foreground",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
