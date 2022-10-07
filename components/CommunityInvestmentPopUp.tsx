import HouModal from "./HouModal";
import ContentEditor from "./ContentEditor";
import { useInvestment } from "../pages/api/investment";

import styles from "../styles/components/Modal.module.css";

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
      <HouModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        loading={loading}
        error={error}
      >
        <div className={styles.hou_modal__container}>
          <div className={styles.hou_modal_data_field}>
            {alphanumericLabel && <h5>{alphanumericLabel}</h5>}
            {header && <h1>{header}</h1>}
            <div className={styles.hou_modal_sidebar}>
              {dataFields?.map((dataField, index) => (
                <div className={styles.hou_modal_data_field} key={index}>
                  <h3>{dataField?.dataField?.labelField}</h3>
                  <p>{dataField?.dataField?.contentField}</p>
                </div>
              ))}

              {currentPhase && (
                <div className={styles.hou_modal}>{currentPhase}</div>
              )}
            </div>
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
