"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  featured?: boolean;
}

export default function Card({ children, className = "", onClick, featured = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-[var(--radius-lg)] p-[var(--space-lg)] transition-all
        ${featured
          ? "bg-[var(--color-feature-bg)] rounded-[var(--radius-xl)]"
          : "bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
        }
        ${onClick ? "cursor-pointer active:scale-[0.98]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
