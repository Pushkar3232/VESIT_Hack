"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SplashPage() {
  return (
    <div className="splash-bg min-h-screen flex flex-col items-center justify-between px-5 py-8 text-white relative overflow-hidden">
      {/* Logo */}
      <div className="w-full flex items-center gap-2 z-10">
        <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center">
          <span className="text-[14px] font-bold text-white">SD</span>
        </div>
        <span className="text-[20px] font-bold tracking-tight">SmartDensity</span>
      </div>

      {/* Hero Illustration Area */}
      <div className="flex-1 flex items-center justify-center z-10 my-8">
        <div className="relative">
          {/* Glow effect behind */}
          <div className="absolute inset-0 bg-[var(--splash-glow-teal)] rounded-full blur-[60px] scale-150" />
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="text-[80px]">🚉</div>
          </div>
          {/* Floating icons */}
          <div className="absolute -right-4 top-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <span className="text-[18px]">📊</span>
          </div>
          <div className="absolute -left-6 bottom-8 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <span className="text-[18px]">🗺️</span>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full z-10">
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/50 mb-2">
          Smart Commuting
        </p>
        <h1 className="text-[38px] font-extrabold leading-[1.1] tracking-[-0.5px] mb-4">
          Predict<br />Crowd Density<br />Instantly
        </h1>
        <p className="text-[14px] text-white/60 mb-8 leading-relaxed max-w-[280px]">
          AI-powered predictions for public places & transport. Plan smarter, commute better.
        </p>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          className="flex items-center justify-between w-full bg-white text-[#111111] rounded-full px-5 h-14 shadow-[var(--shadow-btn)] no-underline active:scale-[0.97] transition-transform"
        >
          <div className="w-9 h-9 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center">
            <span className="text-[14px]">🚦</span>
          </div>
          <span className="text-[15px] font-semibold">Get Started</span>
          <div className="flex items-center gap-0.5 text-[var(--color-text-muted)]">
            <ChevronRight size={18} />
            <ChevronRight size={18} className="-ml-2.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
