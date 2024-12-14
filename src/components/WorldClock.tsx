import { useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";
import WorldMap from "./WorldMap";
import TimeZoneDisplay from "./TimeZoneDisplay";

const MAJOR_TIMEZONES = [
  { name: "New York", timezone: "America/New_York", position: "left-48 top-1/3", color: "#4A90E2" },
  { name: "London", timezone: "Europe/London", position: "left-[calc(33.33%+60px)] top-1/4", color: "#50E3C2" },
  { name: "Berlin", timezone: "Europe/Berlin", position: "left-1/2 top-1/4", color: "#F5A623" },
  { name: "Tokyo", timezone: "Asia/Tokyo", position: "right-24 top-1/3", color: "#D0021B" },
  { name: "Sydney", timezone: "Australia/Sydney", position: "right-12 bottom-12", color: "#9013FE" },
  { name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires", position: "left-1/3 bottom-12", color: "#33C3F0" },
];

const WorldClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-worldclock-text mb-8 text-center">
        World Clock
      </h1>
      <div className="relative w-full aspect-[2/1] bg-worldclock-map rounded-lg overflow-hidden">
        <WorldMap />
        {MAJOR_TIMEZONES.map((tz) => (
          <div
            key={tz.name}
            className={`absolute ${tz.position} transform -translate-x-1/2 -translate-y-1/2`}
          >
            <DigitalClock timezone={tz.timezone} currentTime={currentTime} color={tz.color} />
            <TimeZoneDisplay name={tz.name} timezone={tz.timezone} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;