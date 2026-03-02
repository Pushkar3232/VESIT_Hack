"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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
    <div className="px-5 pb-6">
      <Navbar variant="detail" title="Settings" />

      <div className="mt-4 space-y-6">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 px-1">
              {group.title}
            </h3>
            <Card className="!p-0 divide-y divide-[var(--color-border)]">
              {group.items.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-[var(--color-surface-alt)] transition-colors"
                >
                  <div className="text-[var(--color-text-muted)]">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium text-[var(--color-text-primary)]">
                      {item.label}
                    </p>
                    <p className="text-[12px] text-[var(--color-text-muted)]">
                      {item.description}
                    </p>
                  </div>
                  {item.toggle !== undefined ? (
                    <div
                      className={`w-10 h-6 rounded-full transition-colors ${
                        item.toggle ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
                      } relative`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                          item.toggle ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </div>
                  ) : (
                    <ChevronRight size={16} className="text-[var(--color-text-muted)]" />
                  )}
                </button>
              ))}
            </Card>
          </div>
        ))}

        <div className="text-center pt-4">
          <p className="text-[12px] text-[var(--color-text-muted)]">
            SmartDensity v1.0.0
          </p>
          <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
            Making every commute smarter
          </p>
        </div>
      </div>
    </div>
  );
}
