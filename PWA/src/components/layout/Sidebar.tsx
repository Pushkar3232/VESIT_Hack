"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart3, Map, Bell, Clock, Settings, Activity } from "lucide-react";

const sidebarItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/predict", icon: BarChart3, label: "Predict" },
  { href: "/travel-planner", icon: Map, label: "Travel Planner" },
  { href: "/alerts", icon: Bell, label: "Alerts" },
  { href: "/history", icon: Clock, label: "History" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/login") || pathname?.startsWith("/register");

  if (isAuthPage || pathname === "/") return null;

  return (
    <aside className="hidden lg:flex flex-col w-[260px] bg-[var(--bg-surface)] border-r border-[var(--border)] h-screen fixed left-0 top-0 z-40">
      {/* Brand */}
      <div className="px-6 py-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent)] flex items-center justify-center">
            <Activity size={20} className="text-white" />
          </div>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-[18px] font-bold text-[var(--text-primary)] leading-tight">
              SmartDensity
            </h1>
            <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-[2px] font-medium">
              Crowd Predictor
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-[var(--radius-sm)] text-[14px] font-medium
                transition-all duration-200 no-underline
                ${isActive
                  ? "bg-[var(--selected-bg)] text-[var(--selected-text)] shadow-[var(--shadow-xs)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-soft)] hover:text-[var(--text-primary)]"
                }
              `}
            >
              <Icon size={20} strokeWidth={isActive ? 2 : 1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom info */}
      <div className="px-6 py-4 border-t border-[var(--border)]">
        <p className="text-[11px] text-[var(--text-muted)]">SmartDensity v1.0</p>
        <p className="text-[10px] text-[var(--text-muted)] mt-0.5">AI-Powered Predictions</p>
      </div>
    </aside>
  );
}
