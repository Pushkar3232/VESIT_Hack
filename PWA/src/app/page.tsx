"use client";

import Link from "next/link";
import { ChevronRight, Activity, MapPin, Zap, TrendingUp, Bell, Smartphone } from "lucide-react";

export default function SplashPage() {
  return (
    <div className="splash-bg min-h-dvh flex flex-col relative overflow-hidden">
      {/* Animated background orbs - left side */}
      <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 blur-3xl pointer-events-none" style={{animation: 'floatUp 12s ease-in-out infinite'}} />
      <div className="absolute bottom-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-500/15 to-cyan-500/10 blur-3xl pointer-events-none" style={{animation: 'floatUp 15s ease-in-out infinite', animationDelay: '2s'}} />
      
      {/* Background glow orbs - right side */}
      <div className="absolute top-40 -right-60 w-96 h-96 rounded-full bg-gradient-to-bl from-purple-600/20 to-pink-500/15 blur-3xl pointer-events-none" style={{animation: 'floatUp 14s ease-in-out infinite', animationDelay: '1s'}} />
      
      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center w-full relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Desktop Layout: 2 Column Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col items-start text-white space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3 animate-enter group">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-[var(--accent)] via-cyan-400 to-blue-400 flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all">
                  <Activity size={26} className="text-white drop-shadow" />
                </div>
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                >
                  SmartDensity
                </span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/12 backdrop-blur-md rounded-full border border-white/25 stagger-1 hover:bg-white/18 hover:border-white/40 transition-all">
                <div className="w-2 h-2 bg-gradient-to-r from-[var(--accent)] to-cyan-400 rounded-full animate-pulse" />
                <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                  AI-Powered Intelligence
                </p>
              </div>

              {/* Headline */}
              <h1
                style={{ fontFamily: "var(--font-display)" }}
                className="text-5xl lg:text-6xl font-black leading-tight tracking-[-2px] text-white stagger-2"
              >
                Navigate<br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] via-cyan-400 to-blue-400 opacity-75 blur-lg" style={{animation: 'floatUp 4s ease-in-out infinite'}} />
                  <span className="relative bg-gradient-to-r from-[var(--accent)] via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                    Crowds
                  </span>
                </span>
                <br />with Confidence
              </h1>

              {/* Subheading */}
              <p className="text-lg text-white/75 leading-relaxed max-w-xl stagger-3 font-medium">
                Real-time crowd density predictions powered by AI. Avoid overcrowded spaces and optimize your commute instantly.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 stagger-4 pt-2">
                <Link
                  href="/dashboard"
                  className="group relative flex items-center justify-center gap-2 bg-white text-gray-900 rounded-full px-10 h-12 shadow-2xl hover:shadow-3xl no-underline font-bold text-base hover:bg-gray-50 transition-all active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 rounded-full" />
                  <div className="relative flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--accent)] to-cyan-400 flex items-center justify-center group-hover:scale-120 transition-transform">
                      <Zap size={12} className="text-white" />
                    </div>
                    <span>Get Started</span>
                    <ChevronRight size={18} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
                <Link
                  href="/predict"
                  className="group relative flex items-center gap-2 border-2 border-white/50 text-white rounded-full px-10 h-12 no-underline font-bold text-base hover:border-white hover:bg-white/15 transition-all backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 blur" style={{animation: 'shimmer 2s infinite'}} />
                  <span className="relative">Try Prediction</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-10 w-full pt-4 stagger-5">
                {[
                  { number: "50+", label: "Stations", icon: "🚉" },
                  { number: "95%", label: "Accuracy", icon: "🎯" },
                  { number: "24/7", label: "Available", icon: "⏰" },
                ].map((stat, i) => (
                  <div key={i} className="group flex flex-col hover:scale-105 transition-transform">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <p 
                      style={{ fontFamily: "var(--font-display)" }} 
                      className="text-4xl font-extrabold text-white group-hover:text-[var(--accent)] transition-colors"
                    >
                      {stat.number}
                    </p>
                    <p className="text-sm text-white/50 mt-2 font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/20 blur-3xl animate-pulse" style={{ animation: 'floatUp 8s ease-in-out infinite' }} />
                <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-500/15 blur-3xl" style={{ animation: 'floatUp 10s ease-in-out infinite', animationDelay: '1s' }} />
              </div>

              {/* Cards Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-5">
                {[
                  { icon: TrendingUp, label: "Real-time", desc: "Predictions", color: "from-blue-600 to-cyan-500", bgColor: "bg-blue-600/10" },
                  { icon: MapPin, label: "50+", desc: "Locations", color: "from-emerald-600 to-teal-500", bgColor: "bg-emerald-600/10" },
                  { icon: Bell, label: "Instant", desc: "Alerts", color: "from-orange-600 to-red-500", bgColor: "bg-orange-600/10" },
                  { icon: Smartphone, label: "Mobile", desc: "Optimized", color: "from-purple-600 to-pink-500", bgColor: "bg-purple-600/10" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group relative ${item.bgColor} backdrop-blur-xl border border-white/30 rounded-2xl p-7 text-white hover:border-white/60 transition-all duration-300 transform hover:scale-110 hover:-translate-y-3 shadow-2xl overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{backgroundImage: `linear-gradient(135deg, rgb(255,255,255), transparent)`}} />
                    
                    <div className={`relative bg-gradient-to-br ${item.color} rounded-xl p-4 w-fit mb-5 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300 shadow-xl`}>
                      <item.icon size={32} className="text-white drop-shadow-lg" />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-base font-bold text-white">{item.label}</p>
                      <p className="text-xs text-white/70 mt-2">{item.desc}</p>
                    </div>
                    <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-white/40 transition-all pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3 animate-enter group">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-[var(--accent)] via-cyan-400 to-blue-400 flex items-center justify-center shadow-2xl">
                <Activity size={26} className="text-white drop-shadow" />
              </div>
              <span style={{ fontFamily: "var(--font-display)" }} className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                SmartDensity
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/12 backdrop-blur-md rounded-full border border-white/25 w-fit">
              <div className="w-2 h-2 bg-gradient-to-r from-[var(--accent)] to-cyan-400 rounded-full animate-pulse" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/80">
                AI-Powered Intelligence
              </p>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-3xl sm:text-4xl font-black leading-tight text-white">
              Navigate<br />
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] via-cyan-400 to-blue-400 opacity-75 blur-lg" style={{animation: 'floatUp 4s ease-in-out infinite'}} />
                <span className="relative bg-gradient-to-r from-[var(--accent)] via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Crowds
                </span>
              </span>
              <br />with Confidence
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-medium">
              Real-time crowd density predictions powered by AI. Avoid overcrowded spaces and optimize your commute instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className="group relative flex items-center justify-center gap-2 bg-white text-gray-900 rounded-full px-6 sm:px-8 h-12 shadow-2xl no-underline font-bold text-sm sm:text-base hover:bg-gray-50 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 rounded-full" />
                <div className="relative flex items-center gap-2">
                  <Zap size={12} className="text-[var(--accent)]" />
                  <span>Get Started</span>
                </div>
              </Link>
              <Link href="/predict" className="group relative flex items-center justify-center gap-2 border-2 border-white/50 text-white rounded-full px-6 sm:px-8 h-12 no-underline font-bold text-sm sm:text-base hover:border-white hover:bg-white/15 transition-all backdrop-blur-sm">
                Try Prediction
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "50+", label: "Stations", icon: "🚉" },
                { number: "95%", label: "Accuracy", icon: "🎯" },
                { number: "24/7", label: "Available", icon: "⏰" },
              ].map((stat, i) => (
                <div key={i} className="group flex flex-col hover:scale-105 transition-transform">
                  <div className="text-2xl">{stat.icon}</div>
                  <p style={{ fontFamily: "var(--font-display)" }} className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[var(--accent)] transition-colors mt-2">
                    {stat.number}
                  </p>
                  <p className="text-xs text-white/50 mt-1 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <div className="pt-4">
              <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-white mb-5">Powerful Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "📊", label: "Real-time", desc: "AI Predictions", color: "from-blue-600/20 to-cyan-500/10" },
                  { icon: "🗺️", label: "Live", desc: "Location Tracking", color: "from-emerald-600/20 to-teal-500/10" },
                  { icon: "⚡", label: "Instant", desc: "Smart Alerts", color: "from-orange-600/20 to-red-500/10" },
                  { icon: "📱", label: "Mobile", desc: "First Design", color: "from-purple-600/20 to-pink-500/10" },
                ].map((item, i) => (
                  <div key={i} className={`group relative bg-gradient-to-br ${item.color} backdrop-blur-lg border border-white/30 rounded-xl p-5 hover:border-white/60 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl`}>
                    <div className="relative z-10 flex items-start gap-3">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-white/70 uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm sm:text-base font-bold text-white mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
