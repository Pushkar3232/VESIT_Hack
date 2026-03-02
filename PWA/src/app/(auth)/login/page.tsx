"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Eye, EyeOff, Activity } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-12 bg-[var(--bg-light)]">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-[var(--radius-lg)] bg-[var(--accent)] mx-auto flex items-center justify-center mb-5 shadow-[var(--shadow-glow)]">
            <Activity size={28} className="text-white" />
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[24px] font-bold text-[var(--text-primary)]"
          >
            SmartDensity
          </h1>
          <p className="text-[13px] text-[var(--text-muted)] mt-1">
            Sign in to continue
          </p>
        </div>

        <div className="bg-[var(--bg-surface)] rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)] border border-[var(--border)] p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-[12px] text-[var(--accent-hover)] font-medium no-underline hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>

        <p className="text-center text-[13px] text-[var(--text-muted)] mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[var(--accent-hover)] font-semibold no-underline hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
