"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type CardVariant = "default" | "highlight" | "dark";

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
  as?: "div" | "article" | "section";
  href?: string;
  index?: number;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white border border-gray-200",
  highlight:
    "bg-gradient-card border border-purple-200",
  dark: "bg-bg-dark border border-purple-800 text-white",
};

function Card({
  variant = "default",
  className = "",
  children,
  as: Component = "div",
  href,
  index = 0,
}: CardProps) {
  const baseClass = `rounded-xl card-hover ${variantStyles[variant]} ${className}`;
  const delay = index * 0.1;

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={baseClass}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export { Card };
export type { CardProps };
