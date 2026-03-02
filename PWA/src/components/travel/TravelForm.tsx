"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { DEFAULT_PLACES } from "@/lib/utils/constants";

interface TravelFormProps {
  onSubmit: (data: { source: string; destination: string; arrivalTime: string }) => void;
  isLoading?: boolean;
}

export default function TravelForm({ onSubmit, isLoading }: TravelFormProps) {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const placeOptions = DEFAULT_PLACES.map((p) => ({
    value: p.id,
    label: `${p.name} — ${p.city}`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (source && destination && arrivalTime) {
      onSubmit({ source, destination, arrivalTime });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        label="Source Station"
        options={placeOptions}
        value={source}
        onChange={(e) => setSource(e.target.value)}
        required
      />
      <Select
        label="Destination Station"
        options={placeOptions}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <Input
        label="Desired Arrival Time"
        type="time"
        value={arrivalTime}
        onChange={(e) => setArrivalTime(e.target.value)}
        required
      />
      <Button type="submit" fullWidth disabled={isLoading || !source || !destination || !arrivalTime}>
        {isLoading ? "Planning..." : "Plan My Travel"}
      </Button>
    </form>
  );
}
