import ReactModal from "react-modal";
import { ReactNode } from "react";

import styles from "../styles/components/Modal.module.css";
import { ApolloError } from "@apollo/client";

interface HouModalProps {
  children: ReactNode;
  loading: boolean;
  error: ApolloError | undefined;
  isOpen: boolean;
}

const customStyles = {
  overlay: {
    zIndex: 1000,
  },
};

ReactModal.setAppElement("#__next");

const HouModal = ({ isOpen, children, loading, error }: HouModalProps) => {
  if (error) return <></>;
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        contentLabel="test"
        style={customStyles}
        className={styles.hou_modal}
      >
        {children}
      </ReactModal>
    </>
  );
};

export default HouModal;
