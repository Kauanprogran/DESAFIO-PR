"use client";

import {
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
  useState,
  useEffect,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "link";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-cta text-white border-transparent hover:brightness-110 active:scale-[0.97] active:brightness-95",
  secondary:
    "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200 active:scale-[0.97]",
  outline:
    "bg-transparent text-purple-700 border-purple-300 hover:bg-purple-50 active:bg-purple-100 active:scale-[0.97]",
  ghost:
    "bg-transparent text-gray-700 border-transparent hover:bg-gray-100 active:bg-gray-200 active:scale-[0.97]",
  danger:
    "bg-danger text-white border-danger hover:brightness-90 active:scale-[0.97] active:brightness-75",
  link: "bg-transparent text-purple-600 border-transparent hover:underline hover:text-purple-800 p-0 min-h-0 h-auto",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-sm min-h-[32px] min-w-[32px]",
  md: "px-4 py-2 text-base min-h-[44px] min-w-[44px]",
  lg: "px-6 py-3 text-lg min-h-[48px] min-w-[48px]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      success = false,
      error = false,
      disabled = false,
      fullWidth = false,
      icon,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
      if (success) {
        setShowSuccess(true);
        const t = setTimeout(() => setShowSuccess(false), 2000);
        return () => clearTimeout(t);
      }
    }, [success]);

    useEffect(() => {
      if (error) {
        setShowError(true);
        const t = setTimeout(() => setShowError(false), 2000);
        return () => clearTimeout(t);
      }
    }, [error]);

    const isDisabled = disabled || loading;

    const base =
      "inline-flex items-center justify-center gap-2 font-semibold border-2 rounded-lg transition-all duration-150 cursor-pointer select-none relative focus-visible:outline-3 focus-visible:outline-purple-600 focus-visible:outline-offset-2 no-underline";

    const stateClass = showSuccess
      ? "bg-success-light text-success border-success hover:bg-success-light!"
      : showError
        ? "bg-danger-light text-danger border-danger hover:bg-danger-light!"
        : variantStyles[variant] || variantStyles.primary;

    const sizeClass = variant === "link" ? "" : sizeStyles[size] || sizeStyles.md;

    return (
      <button
        ref={ref}
        className={`${base} ${stateClass} ${sizeClass} ${isDisabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""} ${fullWidth ? "w-full" : ""} ${className}`}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <span
            className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
        )}
        {!loading && showSuccess && (
          <span aria-hidden="true">✓</span>
        )}
        {!loading && showError && (
          <span aria-hidden="true">✗</span>
        )}
        {icon && !loading && !showSuccess && !showError && (
          <span className="w-4 h-4 flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {loading && (
          <span className="sr-only" role="status">
            Aguarde...
          </span>
        )}
        {showSuccess && (
          <span className="sr-only" role="status">
            Operação concluída com sucesso.
          </span>
        )}
        {showError && (
          <span className="sr-only" role="status">
            Erro na operação. Tente novamente.
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
