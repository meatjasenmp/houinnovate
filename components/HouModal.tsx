import ReactModal from "react-modal";
import { ReactNode } from "react";
import { PopUpProps } from "./CommunityInvestmentPopUp";

import styles from "../styles/components/Modal.module.css";

interface HouModalProps {
  children: ReactNode;
}

ReactModal.setAppElement("#__next");

const HouModal = ({
  handleCloseModal,
  isOpen,
  id,
  children,
}: HouModalProps & PopUpProps) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        contentLabel="test"
        className={styles.hou_modal}
      >
        <p>{id}</p>
        {children}
        <button onClick={handleCloseModal}>Close</button>
      </ReactModal>
    </>
  );
};

export default HouModal;
