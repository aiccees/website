"use client";

import { useState, useEffect } from "react";
import { aicess } from "@/components/data_models/conferences";

// Counter animation hook
function useCountAnimation(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

// Stats component with animated counters
function StatsCard({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const animatedValue = useCountAnimation(value);

  return (
    <div>
      <div className="text-5xl lg:text-7xl text-center font-bold text-gray-800 mb-2">
        {animatedValue.toLocaleString("en-US")}
        {suffix}
      </div>
      <div className="text-2xl text-center text-green-700 font-medium">{label}</div>
    </div>
  );
}

// The numbers come from the same list as the homepage "About AICCEES" stats
// (src/components/data_models/conferences.ts), so both always match.
export default function AboutStats() {
  return (
    <div className="container mx-auto grid grid-cols-2 px-6 md:grid-cols-3 place-items-center gap-6 mb-14 mt-10 relative z-10">
      {aicess.aicessStats.map((item) => (
        <StatsCard
          key={item.id}
          value={Number(item.number.replace(/,/g, ""))}
          label={item.description}
          suffix={item.id === 1 ? "+" : ""}
        />
      ))}
    </div>
  );
} 