interface TimeZoneDisplayProps {
  name: string;
  timezone: string;
}

const TimeZoneDisplay = ({ name, timezone }: TimeZoneDisplayProps) => {
  return (
    <div className="text-center mt-2">
      <h3 className="text-worldclock-text text-sm font-semibold">{name}</h3>
      <p className="text-worldclock-text/70 text-xs">{timezone.replace("_", " ")}</p>
    </div>
  );
};

export default TimeZoneDisplay;