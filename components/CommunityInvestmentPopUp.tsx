import HouModal from "./HouModal";
import ContentEditor from "./ContentEditor";
import { useInvestment } from "../pages/api/investment";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import ProgressBar from "./ProgressBar";

import styles from "../styles/components/Modal.module.css";
import { Colors } from "../styles/helpers";

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

  const containerClassName = [
    styles.hou_modal__container,
    "prose prose-black",
  ].join(" ");

  return (
    <>
      <HouModal isOpen={isOpen} loading={loading} error={error}>
        <div className={containerClassName}>
          <button
            className={styles.hou_modal_close_button}
            onClick={handleCloseModal}
          >
            <IoClose size="2rem" />
          </button>
          <div className={styles.hou_modal_sidebar}>
            {alphanumericLabel && <h5>{alphanumericLabel}.</h5>}
            {header && <h1>{header}</h1>}
            <div className={styles.hou_modal_data_fields}>
              <div className={styles.hou_modal_data_field}>
                {dataFields?.map((dataField, index) => (
                  <div className={styles.hou_modal_data_field} key={index}>
                    <p>{dataField?.dataField?.labelField}:</p>
                    <p>{dataField?.dataField?.contentField}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.hou_modal__content}>
            {contentBlocks?.map((contentBlock, index) => (
              <div className={styles.hou_modal__content_block} key={index}>
                <ContentEditor
                  content={contentBlock?.content}
                  textColor="black"
                />
                <div className={styles.content_block_border}></div>
              </div>
            ))}
          </div>
          <div className={styles.hou_modal_progress_container}>
            {currentPhase && <h4>{currentPhase} Phase</h4>}
            <div className="full-screen">
              <ProgressBar
                currentPhase={currentPhase}
                accent={Colors.NEON}
                height="35px"
              />
            </div>
          </div>
        </div>
      </HouModal>
    </>
  );
};

export default CommunityInvestmentPopUp;
