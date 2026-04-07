import { useEffect, useState } from "react";

export interface CountdownProps {
  targetIso: string;
}

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getParts(endMs: number): Parts {
  const diff = Math.max(0, endMs - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ targetIso }: CountdownProps) {
  const endMs = new Date(targetIso).getTime();
  const [parts, setParts] = useState<Parts>(() => getParts(endMs));

  useEffect(() => {
    const id = window.setInterval(() => setParts(getParts(endMs)), 1000);
    return () => window.clearInterval(id);
  }, [endMs]);

  const cells: { label: string; value: number }[] = [
    { label: "Días", value: parts.days },
    { label: "Horas", value: parts.hours },
    { label: "Min", value: parts.minutes },
    { label: "Seg", value: parts.seconds },
  ];

  return (
    <div className="countdown">
      {cells.map(({ label, value }) => (
        <div key={label} className="countdown__cell">
          <span className="countdown__num">{String(value).padStart(2, "0")}</span>
          <span className="countdown__lbl">{label}</span>
        </div>
      ))}
    </div>
  );
}
