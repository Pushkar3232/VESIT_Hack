"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, BarChart3, Map, Bell, Settings } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/predict", icon: BarChart3, label: "Predict" },
  { href: "/travel-planner", icon: Map, label: "Travel" },
  { href: "/alerts", icon: Bell, label: "Alerts" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/login") || pathname?.startsWith("/register");

  if (isAuthPage || pathname === "/") return null;

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--bg-surface)] border-t border-[var(--border)] z-50"
      style={{
        boxShadow: "var(--shadow-nav)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 4px)",
      }}
    >
      <div className="flex items-center justify-around h-[60px] max-w-[600px] mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-[2px] min-w-[44px] min-h-[44px] no-underline relative"
            >
              {isActive && (
                <div className="absolute -top-[1px] w-5 h-[3px] rounded-full bg-[var(--text-primary)]" />
              )}
              <Icon
                size={22}
                className={isActive ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}
                strokeWidth={isActive ? 2.5 : 1.75}
              />
              <span
                className={`text-[10px] ${
                  isActive ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-muted)] font-medium"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
