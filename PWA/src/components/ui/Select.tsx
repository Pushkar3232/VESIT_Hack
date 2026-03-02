"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
}

export default function Select({ label, options, error, className = "", ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-[13px] font-medium text-[var(--text-secondary)]">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`
            w-full h-12 rounded-[var(--radius-sm)] border-[1.5px] border-[var(--border)]
            bg-[var(--bg-surface)] text-[var(--text-primary)]
            text-[14px] outline-none transition-all duration-200 appearance-none
            focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-light)]
            px-4 pr-10
            ${error ? "border-[var(--error)]" : ""}
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
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
        />
      </div>
      {error && <span className="text-[12px] text-[var(--error)]">{error}</span>}
    </div>
  );
}
