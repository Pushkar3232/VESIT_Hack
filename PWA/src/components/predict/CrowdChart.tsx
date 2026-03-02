"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { getCrowdLevel, getCrowdColor } from "@/lib/utils/crowdLevel";

interface CrowdChartProps {
  data: { hour: string; score: number }[];
}

export default function CrowdChart({ data }: CrowdChartProps) {
  return (
    <div className="bg-white rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-card)]">
      <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] mb-4">
        Hourly Forecast
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis
            dataKey="hour"
            tick={{ fontSize: 10, fill: "#999999" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 10, fill: "#999999" }}
            axisLine={false}
            tickLine={false}
            width={30}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontSize: 12,
            }}
            formatter={(value: number | undefined) => [`${value ?? 0}/100`, "Crowd Score"]}
          />
          <Bar dataKey="score" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getCrowdColor(getCrowdLevel(entry.score))}
                opacity={0.85}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
