"use client";

import { type ReactNode, useState } from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  className?: string;
}

const variantStyles: Record<AlertVariant, { bg: string; icon: string }> = {
  info: { bg: "bg-info-light text-info border-info", icon: "ℹ" },
  success: { bg: "bg-success-light text-success border-success", icon: "✓" },
  warning: { bg: "bg-warning-light text-warning border-warning", icon: "⚠" },
  error: { bg: "bg-danger-light text-danger border-danger", icon: "✗" },
};

function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  className = "",
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const v = variantStyles[variant];

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 p-4 rounded-lg border-2 ${v.bg} ${className}`}
    >
      <span className="mt-0.5 flex-shrink-0 text-lg" aria-hidden="true">
        {v.icon}
      </span>
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Fechar alerta"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export { Alert };
export type { AlertProps };
