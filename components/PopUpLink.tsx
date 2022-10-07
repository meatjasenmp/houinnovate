interface PopUpLinkProps {
  children: ReactNode;
  handleOpenModal: () => void;
}

import { ReactNode } from "react";

const PopUpLink = ({ children, handleOpenModal }: PopUpLinkProps) => {
  return <div onClick={handleOpenModal}>{children}</div>;
};

export default PopUpLink;
