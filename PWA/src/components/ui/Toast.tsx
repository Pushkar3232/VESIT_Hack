"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Info } from "lucide-react";

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

  const config = {
    success: { bg: "bg-[var(--success)]", icon: <CheckCircle size={16} /> },
    error: { bg: "bg-[var(--error)]", icon: <XCircle size={16} /> },
    info: { bg: "bg-[var(--accent)]", icon: <Info size={16} /> },
  };

  return (
    <div
      className={`
        fixed top-5 left-1/2 -translate-x-1/2 z-[100] px-5 py-3
        rounded-full text-white text-[13px] font-medium shadow-[var(--shadow-md)]
        flex items-center gap-2 transition-all duration-300
        ${config[type].bg}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
      `}
    >
      {config[type].icon}
      {message}
    </div>
  );
}
