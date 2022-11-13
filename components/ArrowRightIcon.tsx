import React from "react";

const ArrowRightIcon = ({ color }: { color?: string | null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 53.621 45.485"
    >
      <path
        data-name="Path 8"
        d="M48.084 19.328 30.878 2.122l-3.415 3.415 14.791 14.791H1.5v4.83h40.755L27.464 39.949l3.415 3.415 17.206-17.206 3.415-3.415Z"
        stroke={color ? String(color) : "black"}
        fill={color ? String(color) : "black"}
        strokeWidth="3"
      />
    </svg>
  );
};

export default ArrowRightIcon;
