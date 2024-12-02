import { useEffect, useState } from "react";

interface AnalogClockProps {
  timezone: string;
  currentTime: Date;
}

const AnalogClock = ({ timezone, currentTime }: AnalogClockProps) => {
  const [time, setTime] = useState<Date>(currentTime);

  useEffect(() => {
    const date = new Date(currentTime.toLocaleString("en-US", { timeZone: timezone }));
    setTime(date);
  }, [currentTime, timezone]);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours * 30) + (minutes / 2);
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="w-24 h-24 rounded-full bg-worldclock-clock shadow-lg relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-3 bg-gray-800"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-35px)`,
            }}
          />
        ))}
        
        {/* Clock hands */}
        <div
          className="absolute w-1 h-4 bg-gray-800 rounded-full origin-bottom transform -translate-y-2"
          style={{ transform: `rotate(${hourDegrees}deg) translateY(-8px)` }}
        />
        <div
          className="absolute w-0.5 h-6 bg-gray-600 rounded-full origin-bottom transform -translate-y-3"
          style={{ transform: `rotate(${minuteDegrees}deg) translateY(-12px)` }}
        />
        <div
          className="absolute w-0.5 h-7 bg-worldclock-accent rounded-full origin-bottom transform -translate-y-3.5"
          style={{ transform: `rotate(${secondDegrees}deg) translateY(-14px)` }}
        />
        
        {/* Center dot */}
        <div className="absolute w-2 h-2 bg-worldclock-accent rounded-full" />
      </div>
    </div>
  );
};

export default AnalogClock;