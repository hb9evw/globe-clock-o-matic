import { useEffect, useState } from "react";

interface DigitalClockProps {
  timezone: string;
  currentTime: Date;
  color: string;
}

const DigitalClock = ({ timezone, currentTime, color }: DigitalClockProps) => {
  const [time, setTime] = useState<Date>(currentTime);

  useEffect(() => {
    const date = new Date(currentTime.toLocaleString("en-US", { timeZone: timezone }));
    setTime(date);
  }, [currentTime, timezone]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="w-32 h-16 rounded-lg shadow-lg flex items-center justify-center" style={{ backgroundColor: color }}>
      <div className="text-white font-mono text-lg font-bold">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default DigitalClock;