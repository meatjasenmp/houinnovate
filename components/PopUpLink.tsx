import CommunityInvestmentPopUp from "./CommunityInvestmentPopUp";

interface PopUpLinkProps {
  children: ReactNode;
  currentID: number | undefined;
}

import { ReactNode, useState } from "react";

const PopUpLink = ({ children, currentID }: PopUpLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (e: { stopPropagation: () => void }) => {
    setIsOpen(false);
    e.stopPropagation();
  };

  return (
    <div onClick={handleOpenModal}>
      {children}
      <CommunityInvestmentPopUp
        id={String(currentID)}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default PopUpLink;
