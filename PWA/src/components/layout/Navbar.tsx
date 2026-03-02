"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, Search, Activity, Home, BarChart3, Map, Bell } from "lucide-react";
import Button from "@/components/ui/Button";

interface NavbarProps {
  variant?: "home" | "detail";
  title?: string;
  userName?: string;
}

const desktopNavLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/predict", label: "Predict" },
  { href: "/travel-planner", label: "Travel" },
  { href: "/alerts", label: "Alerts" },
];

export default function Navbar({ variant = "home", title, userName }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Detail variant — back button bar
  if (variant === "detail") {
    return (
      <header className="flex items-center justify-between py-4">
        <Button variant="icon" onClick={() => router.back()} aria-label="Go back">
          <ArrowLeft size={20} className="text-[var(--text-primary)]" />
        </Button>
        {title && (
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[16px] font-semibold text-[var(--text-primary)]"
          >
            {title}
          </h1>
        )}
        <Button variant="icon" aria-label="Favorite">
          <Heart size={20} className="text-[var(--text-primary)]" />
        </Button>
      </header>
    );
  }

  // Home / default variant
  return (
    <header className="py-4">
      {/* Mobile greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[22px] lg:text-[28px] font-bold text-[var(--text-primary)]"
          >
            Hello {userName || "User"} 👋
          </h1>
          <p className="text-[13px] text-[var(--text-muted)] mt-0.5">
            Welcome back again!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="icon" aria-label="Search">
            <Search size={20} className="text-[var(--text-primary)]" />
          </Button>
        </div>
      </div>
    </header>
  );
}
