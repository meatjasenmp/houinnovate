import React from "react";

const ArrowLinkIcon = ({ color }: { color?: string | null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 60.984 60.984"
    >
      <path
        data-name="Path 70"
        d="M40.497 15.638H16.07l-.001 4.85h21l-23.291 23.29 3.428 3.428 23.29-23.29.001 21 4.847-.003.002-24.426v-4.85Z"
        fill={color ? String(color) : "black"}
        stroke={color ? String(color) : "black"}
      />
    </svg>
  );
};

export default ArrowLinkIcon;
