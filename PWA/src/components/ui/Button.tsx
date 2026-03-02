"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "icon";
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
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all active:scale-[0.96] cursor-pointer";

  const variants = {
    primary: `bg-[var(--color-btn-primary)] text-[var(--color-btn-primary-text)] rounded-full px-8 py-4 text-[15px] shadow-[var(--shadow-btn)] hover:bg-[#2A2A2A] disabled:bg-[#CCCCCC] disabled:text-[#888888]`,
    ghost: `bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-full px-6 py-3 text-[14px] hover:bg-[var(--color-tag-bg)]`,
    icon: `bg-white rounded-full w-11 h-11 shadow-[var(--shadow-icon-btn)] hover:bg-[#F5F5F5] p-0`,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
