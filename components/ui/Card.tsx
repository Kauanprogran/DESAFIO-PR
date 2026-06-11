import type { ReactNode } from "react";

type CardVariant = "default" | "highlight" | "dark";

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
  as?: "div" | "article" | "section";
  href?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white border border-gray-200 hover:border-purple-300 transition-all duration-150",
  highlight:
    "bg-gradient-card border border-purple-200 hover:border-purple-400 transition-all duration-150",
  dark: "bg-bg-dark border border-purple-800 text-white hover:border-purple-600 transition-all duration-150",
};

function Card({
  variant = "default",
  className = "",
  children,
  as: Component = "div",
  href,
}: CardProps) {
  if (href) {
    return (
      <a
        href={href}
        className={`block rounded-xl ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Component
      className={`rounded-xl ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}

export { Card };
export type { CardProps };
