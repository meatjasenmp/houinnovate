import ReactModal from "react-modal";
import { useState } from "react";

interface PopUpProps {
  handleCloseModal: () => void;
  isOpen: boolean;
  id: string | undefined;
}

ReactModal.setAppElement("#__next");

const CommunityInvestmentPopUp = ({
  isOpen,
  id,
  handleCloseModal,
}: PopUpProps) => {
  return (
    <>
      <ReactModal isOpen={isOpen} contentLabel="test">
        <button onClick={handleCloseModal}>Close</button>
      </ReactModal>
    </>
  );
};

export default CommunityInvestmentPopUp;
