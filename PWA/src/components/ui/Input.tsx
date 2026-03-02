"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function Input({ label, error, icon, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-[13px] font-medium text-[var(--text-secondary)]">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full h-12 rounded-[var(--radius-sm)] border-[1.5px] border-[var(--border)]
            bg-[var(--bg-surface)] text-[var(--text-primary)]
            text-[14px] outline-none transition-all duration-200
            focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-light)]
            placeholder:text-[var(--text-muted)]
            ${icon ? "pl-11 pr-4" : "px-4"}
            ${error ? "border-[var(--error)]" : ""}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <span className="text-[12px] text-[var(--error)]">{error}</span>}
    </div>
  );
}
