import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "default" | "hero" | "count" | "solid";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-gray-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  hero:
    "border border-white/20 bg-white/10 text-slate-100 backdrop-blur",
  count: "bg-white text-slate-500 dark:bg-slate-950 dark:text-slate-400",
  solid: "bg-cyan-500 text-white",
};

export default function Badge({
  children,
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  const classes = [
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
