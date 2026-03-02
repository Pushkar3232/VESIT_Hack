"use client";

import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
}

export default function Select({ label, options, error, className = "", ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[13px] font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)]
          bg-[var(--color-surface)] text-[var(--color-text-primary)]
          text-[15px] outline-none transition-all appearance-none
          focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-light)]
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-[12px] text-red-500">{error}</span>}
    </div>
  );
}
