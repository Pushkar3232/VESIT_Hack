"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Eye, EyeOff, MapPin } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login — replace with next-auth signIn()
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12" style={{ background: "var(--color-surface)" }}>
      {/* Logo */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] mx-auto flex items-center justify-center mb-4">
          <MapPin size={28} className="text-white" />
        </div>
        <h1 className="text-[24px] font-bold text-[var(--color-text-primary)]">SmartDensity</h1>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-1">
          Sign in to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="absolute right-3 top-[38px] text-[var(--color-text-muted)]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="text-right">
          <a href="#" className="text-[12px] text-[var(--color-accent)] font-medium no-underline">
            Forgot Password?
          </a>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <p className="text-center text-[13px] text-[var(--color-text-muted)] mt-8">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-[var(--color-accent)] font-medium no-underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
