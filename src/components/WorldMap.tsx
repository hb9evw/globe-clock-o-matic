const WorldMap = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Simplified world map outline */}
        <path
          className="text-worldclock-text"
          d="M217,179v-1l-1-2l-2-1v-2l-1-1v-2l1-1l1-1v-1l-1-1l-1-1l-1-1h-2l-1,1l-2,1l-1,2h-1l-1-1v-1l-1-1h-1l-1,1l-1,1v1l-1,1h-1l-1-1v-1l-1-1h-1l-1,1l-1,1v1l-1,1h-1"
        />
        <path
          className="text-worldclock-text"
          d="M750,200 Q800,180 850,200 T950,200 M700,250 Q750,230 800,250 T900,250"
        />
        <path
          className="text-worldclock-text"
          d="M150,250 Q250,220 350,250 T550,250 M100,300 Q200,270 300,300 T500,300"
        />
        <path
          className="text-worldclock-text"
          d="M400,150 Q500,120 600,150 T800,150"
        />
        <path
          className="text-worldclock-text"
          d="M300,350 Q400,320 500,350 T700,350"
        />
        {/* Europe */}
        <path
          className="text-worldclock-text"
          d="M480,140 Q520,130 560,140 T640,140"
        />
        {/* Asia */}
        <path
          className="text-worldclock-text"
          d="M600,180 Q700,160 800,180 T900,180"
        />
        {/* Australia */}
        <path
          className="text-worldclock-text"
          d="M800,350 Q850,330 900,350 T950,350"
        />
        {/* Africa */}
        <path
          className="text-worldclock-text"
          d="M450,250 Q500,230 550,250 T650,250"
        />
        {/* Americas */}
        <path
          className="text-worldclock-text"
          d="M200,200 Q250,180 300,200 T400,200"
        />
      </svg>
    </div>
  );
};

export default WorldMap;