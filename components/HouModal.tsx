import ReactModal from "react-modal";
import { ReactNode } from "react";
import { PopUpProps } from "./CommunityInvestmentPopUp";

import styles from "../styles/components/Modal.module.css";
import { ApolloError } from "@apollo/client";

interface HouModalProps {
  children: ReactNode;
  loading: boolean;
  error: ApolloError | undefined;
}

ReactModal.setAppElement("#__next");

const HouModal = ({
  handleCloseModal,
  isOpen,
  id,
  children,
  loading,
  error,
}: HouModalProps & PopUpProps) => {
  if (error) return <></>;
  if (loading) {
    return <div>Loading...</div>;
  }
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
