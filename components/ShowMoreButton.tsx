import React from "react";

interface ShowMoreButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ShowMoreButton = ({ children, onClick }: ShowMoreButtonProps) => {
  return (
    <button
      className="rounded-full bg-black text-white py-2 px-4 mt-6 text-xs"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ShowMoreButton;
