import React from "react";

interface ShowMoreButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  classNames: string;
}
// className="rounded-full py-2 px-4 text-xs text-white flex items-center bg-innovate-red mt-3 relative z-[10] innovate-lg:px-5 innovate-lg:py-3 innovate-lg:text-sm"
const ShowMoreButton = ({
  children,
  onClick,
  classNames,
}: ShowMoreButtonProps) => {
  return (
    <button
      className={`rounded-full py-2 px-4 text-xs text-white flex items-center mt-3 relative z-[10] innovate-lg:px-5 innovate-lg:py-3 innovate-lg:text-sm ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ShowMoreButton;
