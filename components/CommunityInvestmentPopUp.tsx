import HouModal from "./HouModal";
import { useInvestment } from "../pages/api/investment";

export interface PopUpProps {
  handleCloseModal: () => void;
  isOpen: boolean;
  id: string;
}

const CommunityInvestmentPopUp = ({
  isOpen,
  id,
  handleCloseModal,
}: PopUpProps) => {
  const { data, loading, error } = useInvestment(id);

  console.log(data);

  return (
    <>
      <HouModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        id={id}
        loading={loading}
        error={error}
      >
        <p>Test</p>
      </HouModal>
    </>
  );
};

export default CommunityInvestmentPopUp;
