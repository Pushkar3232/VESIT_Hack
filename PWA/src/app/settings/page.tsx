"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import { useNotifications } from "@/hooks/useNotifications";
import { Bell, Moon, Globe, Shield, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  const { subscribe, isSubscribed } = useNotifications();
  const [darkMode, setDarkMode] = useState(false);

  const settingsGroups = [
    {
      title: "Notifications",
      items: [
        {
          icon: <Bell size={20} />,
          label: "Push Notifications",
          description: isSubscribed ? "Enabled" : "Enable crowd alerts",
          action: () => subscribe(),
          toggle: isSubscribed,
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: <Moon size={20} />,
          label: "Dark Mode",
          description: "Coming soon",
          toggle: darkMode,
          action: () => setDarkMode(!darkMode),
        },
        {
          icon: <Globe size={20} />,
          label: "Language",
          description: "English",
        },
      ],
    },
    {
      title: "About",
      items: [
        {
          icon: <Shield size={20} />,
          label: "Privacy Policy",
          description: "How we handle your data",
        },
      ],
    },
  ];

  return (
    <div className="page-container pb-8 animate-enter">
      <Navbar variant="detail" title="Settings" />

      <div className="mt-2 space-y-6 max-w-[600px]">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[2px] text-[var(--text-muted)] mb-3 px-1">
              {group.title}
            </h3>
            <Card hover={false} className="!p-0 divide-y divide-[var(--border)] overflow-hidden">
              {group.items.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-[var(--bg-surface-soft)] transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg-surface-soft)] flex items-center justify-center text-[var(--text-muted)]">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium text-[var(--text-primary)]">
                      {item.label}
                    </p>
                    <p className="text-[12px] text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                  {item.toggle !== undefined ? (
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative ${
                        item.toggle ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform shadow-[var(--shadow-xs)] ${
                          item.toggle ? "translate-x-[22px]" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  ) : (
                    <ChevronRight size={16} className="text-[var(--text-muted)]" />
                  )}
                </button>
              ))}
            </Card>
          </div>
        ))}

        <div className="text-center pt-6 pb-4">
          <p className="text-[12px] text-[var(--text-muted)]">
            SmartDensity v1.0.0
          </p>
          <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
            Making every commute smarter
          </p>
        </div>
      </div>
    </div>
  );
}
