"use client";

import { type InputHTMLAttributes, forwardRef } from "react";

type InputState = "default" | "focus" | "error" | "success" | "disabled" | "loading";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  loading?: boolean;
  helperText?: string;
  inputState?: InputState;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, success, loading, helperText, className = "", id, ...props },
    ref
  ) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const isDisabled = props.disabled || loading;

    const borderClass = error
      ? "border-danger focus:border-danger focus:ring-danger"
      : success
        ? "border-success focus:border-success focus:ring-success"
        : "border-gray-200 focus:border-purple-600 focus:ring-purple-600/20";

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            disabled={isDisabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            className={`w-full px-4 py-2.5 text-base rounded-lg border-2 bg-white transition-all duration-150 outline-none focus:ring-4 ${borderClass} ${isDisabled ? "opacity-40 cursor-not-allowed" : ""} ${className}`}
            {...props}
          />
          {loading && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="block w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-danger" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
