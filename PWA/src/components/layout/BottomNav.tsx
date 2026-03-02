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

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-[var(--color-border)] z-50"
      style={{
        boxShadow: "var(--shadow-nav)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 8px)",
      }}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px] no-underline"
            >
              <Icon
                size={24}
                className={isActive ? "text-[#111111]" : "text-[#BBBBBB]"}
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-[#111111]" : "text-[#BBBBBB]"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-[#111111] -mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
