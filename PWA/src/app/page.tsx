"use client";

import Link from "next/link";
import { ChevronRight, Activity, BarChart3, MapPin, Zap } from "lucide-react";

export default function SplashPage() {
  return (
    <div className="splash-bg min-h-screen flex flex-col relative overflow-hidden">
      {/* Desktop: Two column hero */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1280px] mx-auto w-full px-5 lg:px-20 py-8 lg:py-0 relative z-10">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-white w-full lg:w-[55%] lg:pr-12">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 lg:mb-12">
            <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent)] flex items-center justify-center">
              <Activity size={20} className="text-white" />
            </div>
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[20px] font-bold tracking-tight"
            >
              SmartDensity
            </span>
          </div>

          {/* Eyebrow */}
          <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-white/50 mb-4">
            Smart Commuting
          </p>

          {/* Headline */}
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[clamp(38px,7vw,64px)] font-extrabold leading-[1.05] tracking-[-1.5px] mb-5"
          >
            Predict<br />
            Crowd Density<br />
            <span className="text-[var(--accent)]">Instantly</span>
          </h1>

          <p className="text-[16px] text-white/60 mb-10 leading-relaxed max-w-[480px]">
            AI-powered predictions for public places & transport. Plan smarter, commute better.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-12">
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-3 bg-white text-[#111111] rounded-full px-8 h-[52px] shadow-[var(--shadow-btn)] no-underline font-semibold text-[15px] hover:bg-gray-100 transition-all active:scale-[0.97]"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                <Zap size={14} className="text-[var(--accent-hover)]" />
              </div>
              Get Started
              <ChevronRight size={18} className="text-[var(--text-muted)]" />
            </Link>
            <Link
              href="/predict"
              className="flex items-center justify-center gap-2 border-[1.5px] border-white/30 text-white rounded-full px-7 h-[48px] no-underline font-medium text-[14px] hover:bg-white/10 transition-all"
            >
              Try Prediction
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-6 lg:gap-10 text-white/90">
            <div>
              <p style={{ fontFamily: "var(--font-display)" }} className="text-[28px] lg:text-[36px] font-extrabold">50+</p>
              <p className="text-[12px] text-white/50 mt-0.5">Stations</p>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <p style={{ fontFamily: "var(--font-display)" }} className="text-[28px] lg:text-[36px] font-extrabold">95%</p>
              <p className="text-[12px] text-white/50 mt-0.5">Accuracy</p>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <p style={{ fontFamily: "var(--font-display)" }} className="text-[28px] lg:text-[36px] font-extrabold">24/7</p>
              <p className="text-[12px] text-white/50 mt-0.5">Monitoring</p>
            </div>
          </div>
        </div>

        {/* Right: Hero Illustration */}
        <div className="hidden lg:flex items-center justify-center w-[45%] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full bg-[var(--accent-glow)] blur-[80px] glow-pulse" />
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-5">
            {[
              { icon: BarChart3, label: "Predictions", val: "Real-time" },
              { icon: MapPin, label: "Locations", val: "50+ Tracked" },
              { icon: Activity, label: "AI Engine", val: "RAG-Powered" },
              { icon: Zap, label: "Alerts", val: "Instant" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-[var(--radius-xl)] p-6 text-white hover:bg-white/12 transition-all"
              >
                <item.icon size={28} className="text-[var(--accent)] mb-3" />
                <p className="text-[14px] font-semibold">{item.label}</p>
                <p className="text-[12px] text-white/50 mt-1">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Feature cards at bottom */}
      <div className="lg:hidden flex gap-3 overflow-x-auto px-5 pb-8 scroll-hidden relative z-10">
        {[
          { icon: "📊", label: "AI Predictions" },
          { icon: "🗺️", label: "Live Tracking" },
          { icon: "⚡", label: "Smart Alerts" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/10 rounded-[var(--radius-md)] px-4 py-3 flex items-center gap-2"
          >
            <span className="text-[16px]">{item.icon}</span>
            <span className="text-[12px] text-white/80 font-medium whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
