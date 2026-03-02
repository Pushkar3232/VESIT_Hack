"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, type = "info", duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeColors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-[var(--color-accent)]",
  };

  return (
    <div
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3
        rounded-full text-white text-[13px] font-medium shadow-lg
        transition-all duration-300
        ${typeColors[type]}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
      `}
    >
      {message}
    </div>
  );
}
