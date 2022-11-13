import React from "react";

const DownloadIcon = ({ color }: { color?: string | null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 28.244 33.828"
    >
      <path
        data-name="Path 47"
        d="m16.367 26.31 11.715-11.715-2.325-2.325-10.072 10.069V-.001h-3.288v22.34L2.323 12.269l-2.325 2.325 11.715 11.715 2.325 2.325Z"
        fill="#fff"
      />
      <path
        data-name="Line 41"
        fill="none"
        stroke={color ? String(color) : "black"}
        strokeWidth="3"
        d="M.244 32.328h28"
      />
    </svg>
  );
};

export default DownloadIcon;
