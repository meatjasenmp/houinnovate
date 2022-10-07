import ReactModal from "react-modal";
import { useInvestment } from "../pages/api/investment";

interface PopUpProps {
  handleCloseModal: () => void;
  isOpen: boolean;
  id: string;
}

import styles from "../styles/components/Modal.module.css";

ReactModal.setAppElement("#__next");

const CommunityInvestmentPopUp = ({
  isOpen,
  id,
  handleCloseModal,
}: PopUpProps) => {
  const { data, loading, error } = useInvestment(id);

  if (error) return <></>;

  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO: Abstract Modal into its own component

  console.log(data);

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        contentLabel="test"
        className={styles.hou_modal}
      >
        <p>{id}</p>
        <button onClick={handleCloseModal}>Close</button>
      </ReactModal>
    </>
  );
};

export default CommunityInvestmentPopUp;
