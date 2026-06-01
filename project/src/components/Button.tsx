import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "icon";
type ButtonSize = "sm" | "md" | "icon";
type ButtonTone = "dark" | "light";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/20 hover:bg-cyan-300 focus:ring-cyan-200/70",
  secondary:
    "border backdrop-blur",
  icon:
    "border border-white/20 bg-white/10 text-lg shadow-md backdrop-blur hover:scale-105 active:scale-95 focus:ring-white/30",
};

const secondaryToneClasses: Record<ButtonTone, string> = {
  dark: "border-white/30 bg-white/10 text-white hover:bg-white/20 focus:ring-white/30",
  light:
    "border-slate-200 bg-white/10 text-slate-700 hover:bg-slate-50 focus:ring-cyan-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-0 rounded-full px-3 py-2 text-sm",
  md: "min-h-12 rounded-md px-6 py-3 text-base",
  icon: "h-10 w-10 rounded-full p-0",
};

export default function Button({
  as = "button",
  children,
  className = "",
  size,
  tone = "dark",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonSize = size ?? (variant === "icon" ? "icon" : "md");
  const classes = [
    "inline-flex items-center justify-center font-bold transition focus:outline-none focus:ring-4",
    variantClasses[variant],
    variant === "secondary" ? secondaryToneClasses[tone] : "",
    sizeClasses[buttonSize],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
