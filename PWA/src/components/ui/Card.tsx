"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  featured?: boolean;
  hover?: boolean;
}

export default function Card({ children, className = "", onClick, featured = false, hover = true }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-[var(--radius-lg)] p-5 transition-all duration-250
        ${featured
          ? "bg-gradient-to-br from-[#6DD5D5] to-[#4BBEBE] rounded-[var(--radius-xl)]"
          : "bg-[var(--bg-surface)] shadow-[var(--shadow-sm)] border border-[var(--border)]"
        }
        ${hover ? "card-hover" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
