"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart3, Map, Bell, Clock, Settings } from "lucide-react";

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

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-[var(--color-border)] h-screen fixed left-0 top-0 z-40">
      <div className="px-6 py-5 border-b border-[var(--color-border)]">
        <h1 className="text-[20px] font-bold text-[var(--color-text-primary)]">
          SmartDensity
        </h1>
        <p className="text-[11px] text-[var(--color-text-muted)] mt-1 uppercase tracking-wider">
          Crowd Predictor
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-[14px] font-medium transition-colors no-underline ${
                isActive
                  ? "bg-[var(--color-accent-light)] text-[var(--color-accent-dark)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-alt)]"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
