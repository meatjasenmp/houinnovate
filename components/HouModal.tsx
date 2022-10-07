import ReactModal from "react-modal";
import { ReactNode } from "react";

import styles from "../styles/components/Modal.module.css";
import { ApolloError } from "@apollo/client";

interface HouModalProps {
  children: ReactNode;
  loading: boolean;
  error: ApolloError | undefined;
  handleCloseModal: () => void;
  isOpen: boolean;
}

ReactModal.setAppElement("#__next");

const HouModal = ({
  handleCloseModal,
  isOpen,
  children,
  loading,
  error,
}: HouModalProps) => {
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
        <button onClick={handleCloseModal}>Close</button>
        {children}
      </ReactModal>
    </>
  );
};

export default HouModal;
