"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, Search } from "lucide-react";
import Button from "@/components/ui/Button";

interface NavbarProps {
  variant?: "home" | "detail";
  title?: string;
  userName?: string;
}

export default function Navbar({ variant = "home", title, userName }: NavbarProps) {
  const router = useRouter();

  if (variant === "detail") {
    return (
      <header className="flex items-center justify-between px-5 pt-3 pb-2">
        <Button variant="icon" onClick={() => router.back()} aria-label="Go back">
          <ArrowLeft size={20} className="text-[#111111]" />
        </Button>
        {title && (
          <h1 className="text-[15px] font-semibold text-[var(--color-text-primary)]">{title}</h1>
        )}
        <Button variant="icon" aria-label="Favorite">
          <Heart size={20} className="text-[#111111]" />
        </Button>
      </header>
    );
  }

  // Home / default variant
  return (
    <header className="flex items-center justify-between px-5 pt-4 pb-2">
      <div>
        <h1 className="text-[22px] font-bold text-[var(--color-text-primary)]">
          Hello {userName || "User"} 👋
        </h1>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-0.5">
          Welcome back again!
        </p>
      </div>
      <Button variant="icon" aria-label="Search">
        <Search size={20} className="text-[#111111]" />
      </Button>
    </header>
  );
}
