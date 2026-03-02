"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[13px] font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)]
          bg-[var(--color-surface)] text-[var(--color-text-primary)]
          text-[15px] outline-none transition-all
          focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-light)]
          placeholder:text-[var(--color-text-muted)]
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-[12px] text-red-500">{error}</span>}
    </div>
  );
}
