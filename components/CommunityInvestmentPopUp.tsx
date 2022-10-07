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

  if (error) return <></>;

  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO: Abstract Modal into its own component

  console.log(data);

  return (
    <>
      <HouModal isOpen={isOpen} handleCloseModal={handleCloseModal} id={id}>
        <p>Test</p>
      </HouModal>
    </>
  );
};

export default CommunityInvestmentPopUp;
