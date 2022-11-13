import React from "react";

const UpArrowIcon = ({ color }: { color?: string | null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 45.486 53.621"
    >
      <path
        data-name="Path 88"
        d="M19.328 5.537 2.122 22.743l3.415 3.415 14.791-14.791v40.754h4.83V11.366l14.791 14.791 3.415-3.415L26.158 5.536l-3.415-3.415Z"
        fill={color ? String(color) : "black"}
        stroke={color ? String(color) : "black"}
        strokeWidth="3"
      />
    </svg>
  );
};

export default UpArrowIcon;
