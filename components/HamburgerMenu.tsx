import React from "react";

const HamburgerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46">
      <g>
        <g>
          <path stroke="none" d="M0 0h46v46H0z" />
          <path fill="none" d="M.5.5h45v45H.5z" />
        </g>
        <g fill="none" stroke="#fff" strokeWidth="3">
          <path d="M13 15h20" />
          <path d="M13 23h20" />
          <path d="M13 31h20" />
        </g>
      </g>
    </svg>
  );
};

const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <HamburgerIcon />
    </div>
  );
};

export default HamburgerMenu;
