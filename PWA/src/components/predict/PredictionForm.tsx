"use client";

import { useState } from "react";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { DEFAULT_PLACES } from "@/lib/utils/constants";
import { Calendar, Clock, MapPin } from "lucide-react";

interface PredictionFormProps {
  onSubmit: (data: { placeId: string; date: string; time: string }) => void;
  isLoading?: boolean;
}

export default function PredictionForm({ onSubmit, isLoading }: PredictionFormProps) {
  const [placeId, setPlaceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const placeOptions = DEFAULT_PLACES.map((p) => ({
    value: p.id,
    label: `${p.name} — ${p.city}`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (placeId && date && time) {
      onSubmit({ placeId, date, time });
    }
  };

  return (
    <Card hover={false}>
      <h3
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[16px] font-bold text-[var(--text-primary)] mb-5"
      >
        Select Parameters
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Select
          label="Place / Station"
          options={placeOptions}
          value={placeId}
          onChange={(e) => setPlaceId(e.target.value)}
          required
        />
        <Input
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Input
          label="Time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <Button type="submit" fullWidth disabled={isLoading || !placeId || !date || !time}>
          {isLoading ? "Predicting..." : "Predict Crowd Density"}
        </Button>
      </form>
    </Card>
  );
}
