"use client";

import {
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { motion } from "framer-motion";

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
    "bg-gradient-cta text-white border-transparent",
  secondary:
    "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
  outline:
    "bg-transparent text-purple-700 border-purple-300 hover:bg-purple-50",
  ghost:
    "bg-transparent text-gray-700 border-transparent hover:bg-gray-100",
  danger:
    "bg-danger text-white border-danger",
  link: "bg-transparent text-purple-600 border-transparent hover:text-purple-800 p-0 min-h-0 h-auto",
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
      onClick,
      ...props
    },
    ref
  ) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

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

    useEffect(() => {
      if (ripples.length > 0) {
        const t = setTimeout(() => setRipples((prev) => prev.slice(1)), 600);
        return () => clearTimeout(t);
      }
    }, [ripples]);

    const isDisabled = disabled || loading;

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isDisabled) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now() + Math.random();
        setRipples((prev) => [...prev, { x, y, id }]);
        onClick?.(e);
      },
      [isDisabled, onClick]
    );

    const base =
      "inline-flex items-center justify-center gap-2 font-semibold border-2 rounded-lg relative select-none focus-visible:outline-3 focus-visible:outline-purple-600 focus-visible:outline-offset-2 no-underline overflow-hidden";

    const stateClass = showSuccess
      ? "bg-success-light text-success border-success hover:bg-success-light!"
      : showError
        ? "bg-danger-light text-danger border-danger hover:bg-danger-light!"
        : variantStyles[variant] || variantStyles.primary;

    const sizeClass = variant === "link" ? "" : sizeStyles[size] || sizeStyles.md;

    return (
      <motion.button
        ref={ref}
        whileHover={!isDisabled ? { scale: 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.97 } : undefined}
        className={`${base} ${stateClass} ${sizeClass} ${isDisabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "cursor-pointer"} ${fullWidth ? "w-full" : ""} ${className}`}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        onClick={handleClick}
        {...(props as any)}
      >
        <motion.span
          className="absolute inset-0 bg-white/10"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/40 pointer-events-none animate-ripple"
            style={{
              left: ripple.x - 8,
              top: ripple.y - 8,
              width: 16,
              height: 16,
            }}
          />
        ))}
        {loading && (
          <span
            className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
        )}
        {!loading && showSuccess && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            aria-hidden="true"
          >
            ✓
          </motion.span>
        )}
        {!loading && showError && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            aria-hidden="true"
          >
            ✗
          </motion.span>
        )}
        {icon && !loading && !showSuccess && !showError && (
          <span className="w-4 h-4 flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
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
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
