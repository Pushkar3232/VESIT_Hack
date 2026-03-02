"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "icon" | "accent";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold cursor-pointer transition-all active:scale-[0.96]";

  const variants: Record<string, string> = {
    primary: `bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] rounded-full
      px-8 py-3.5 text-[15px] shadow-[var(--shadow-btn)]
      hover:bg-[#1f1f1f] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)]
      disabled:bg-[#CCCCCC] disabled:text-[#888888] disabled:shadow-none disabled:cursor-not-allowed`,
    ghost: `bg-transparent border-[1.5px] border-[var(--btn-ghost-border)] text-[var(--btn-ghost-text)]
      rounded-full px-7 py-3 text-[14px]
      hover:bg-[var(--bg-surface-soft)] hover:border-[var(--text-muted)]`,
    icon: `bg-[var(--bg-surface)] rounded-full w-11 h-11 shadow-[var(--shadow-xs)]
      hover:bg-[var(--chip-bg)] hover:scale-105 p-0 border border-[var(--border)]`,
    accent: `bg-[var(--accent)] text-white rounded-full px-8 py-3.5 text-[15px]
      hover:bg-[var(--accent-hover)] hover:-translate-y-[1px]
      shadow-[var(--shadow-btn)]`,
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
