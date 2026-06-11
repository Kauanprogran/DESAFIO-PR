"use client";

import { type ReactNode, useEffect, useState } from "react";

type ToastVariant = "info" | "success" | "warning" | "error";

interface ToastProps {
  variant?: ToastVariant;
  children: ReactNode;
  duration?: number;
  onClose?: () => void;
}

const variantStyles: Record<ToastVariant, string> = {
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-danger text-white",
};

const variantIcons: Record<ToastVariant, string> = {
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✗",
};

function Toast({
  variant = "info",
  children,
  duration = 4000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className={`fixed top-4 right-4 z-[60] flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg animate-slide-in ${variantStyles[variant]}`}
    >
      <span aria-hidden="true">{variantIcons[variant]}</span>
      <span className="text-sm font-medium">{children}</span>
      <button
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
        className="ml-2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Fechar"
      >
        ✕
      </button>
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}

export { Toast };
export type { ToastProps };
