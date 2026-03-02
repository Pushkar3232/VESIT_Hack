"use client";

export default function Loader({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className="animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
