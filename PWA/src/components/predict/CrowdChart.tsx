"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { getCrowdLevel, getCrowdColor } from "@/lib/utils/crowdLevel";
import Card from "@/components/ui/Card";

interface CrowdChartProps {
  data: { hour: string; score: number }[];
}

export default function CrowdChart({ data }: CrowdChartProps) {
  return (
    <Card hover={false}>
      <h3
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[15px] font-semibold text-[var(--text-primary)] mb-5"
      >
        Hourly Forecast
      </h3>
      <ResponsiveContainer width="100%" height={220}>
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
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
              fontSize: 12,
              fontFamily: "var(--font-body)",
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
    </Card>
  );
}
