import HouModal from "./HouModal";
import ContentEditor from "./ContentEditor";
import { useInvestment } from "../pages/api/investment";

import styles from "../styles/components/Modal.module.css";

export interface PopUpProps {
  isOpen: boolean;
  id: string;
  handleCloseModal: (e: { stopPropagation: () => void }) => void;
}

const CommunityInvestmentPopUp = ({
  isOpen,
  handleCloseModal,
  id,
}: PopUpProps) => {
  const { data, loading, error } = useInvestment(id);

  const { communityInvestment } = data || {};

  const { communityAndOpportunityPopUps } = communityInvestment || {};

  const {
    progress,
    alphanumericLabel,
    contentBlocks,
    dataFields,
    header,
    reportingPhasePercentage,
  } = communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel } = progress || {};

  return (
    <>
      <HouModal isOpen={isOpen} loading={loading} error={error}>
        <div className={styles.hou_modal__container}>
          <button onClick={handleCloseModal}>Close</button>
          <div className={styles.hou_modal_sidebar}>
            {alphanumericLabel && <h5>{alphanumericLabel}</h5>}
            {header && <h1>{header}</h1>}
            <div className={styles.hou_modal_data_field}>
              {dataFields?.map((dataField, index) => (
                <div className={styles.hou_modal_data_field} key={index}>
                  <h3>{dataField?.dataField?.labelField}</h3>
                  <p>{dataField?.dataField?.contentField}</p>
                </div>
              ))}
            </div>
            {currentPhase && (
              <div className={styles.hou_modal}>{currentPhase}</div>
            )}
          </div>
          <div className={styles.hou_modal__content}>
            {contentBlocks?.map((contentBlock, index) => (
              <div className={styles.hou_modal__content_block} key={index}>
                <ContentEditor content={contentBlock?.content} />
              </div>
            ))}
          </div>
        </div>
      </HouModal>
    </>
  );
};

export default CommunityInvestmentPopUp;
