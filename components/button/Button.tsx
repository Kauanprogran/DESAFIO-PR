"use client";

import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
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
    const variantClass = styles[variant] || styles.primary;
    const sizeClass = styles[size] || styles.md;

    const stateClasses = [
      disabled && styles.disabled,
      loading && styles.loading,
      success && styles.success,
      error && styles.error,
    ]
      .filter(Boolean)
      .join(" ");

    const classes = [
      styles.button,
      variantClass,
      sizeClass,
      stateClasses,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true" />
        )}
        {icon && !loading && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className={loading ? styles.label : undefined}>
          {children}
        </span>
        {loading && (
          <span className={styles.srOnly} role="status">
            Carregando, aguarde...
          </span>
        )}
        {success && !loading && (
          <span className={styles.srOnly} role="status">
            Operação concluída com sucesso.
          </span>
        )}
        {error && !loading && (
          <span className={styles.srOnly} role="status">
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
