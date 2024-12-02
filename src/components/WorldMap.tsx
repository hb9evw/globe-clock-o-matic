const WorldMap = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      {/* Simple world map SVG representation */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          className="text-worldclock-text"
          d="M200,250 Q400,200 500,250 T800,250"
        />
        {/* Add more path elements for a basic world map outline */}
        <path
          className="text-worldclock-text"
          d="M300,200 Q400,150 500,200 T700,200"
        />
        <path
          className="text-worldclock-text"
          d="M250,300 Q400,250 500,300 T750,300"
        />
      </svg>
    </div>
  );
};

export default WorldMap;