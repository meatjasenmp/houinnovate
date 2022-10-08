import { PopUpProps, PopUpTypes } from "./helpers";
import HouModal from "./HouModal";
import { useOpportunity } from "../pages/api/opportunity";
import ContentEditor from "./ContentEditor";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import ProgressBar from "./ProgressBar";
import { Phase } from "./ProgressBar";
import { completedBackground, phaseCompletedOpacity } from "./helpers";

import styles from "../styles/components/Modal.module.css";
import { Colors } from "../styles/helpers";

const OpportunityPopUp = ({ isOpen, handleCloseModal, id }: PopUpProps) => {
  const { data, loading, error } = useOpportunity(id);

  const { projectBasedOpportunity } = data || {};

  const { communityAndOpportunityPopUps, title } =
    projectBasedOpportunity || {};

  const { progress, alphanumericLabel, contentBlocks, dataFields } =
    communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel } = progress || {};

  // TODO: Need to clean this up
  const textColor = () => {
    if (currentPhase === Phase.COMPLETED) {
      return "white";
    }
    return "black";
  };

  const containerClassName = [
    styles.hou_modal__container,
    completedBackground(currentPhase, PopUpTypes.OPPORTUNITY),
    `prose prose-${textColor()}`,
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
            {title && <h1>{title}</h1>}
            <div className={styles.hou_modal_data_fields}>
              {showProgressLabel && progressLabel && (
                <div className={styles.hou_modal_data_field}>
                  <span>Funding:</span>
                  <span>{progressLabel}</span>
                </div>
              )}
              {dataFields?.map((dataField, index) => (
                <div className={styles.hou_modal_data_field} key={index}>
                  <span>{dataField?.dataField?.labelField}:</span>
                  <span>{dataField?.dataField?.contentField}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.hou_modal__content}>
            {contentBlocks?.map((contentBlock, index) => (
              <div className={styles.hou_modal__content_block} key={index}>
                <ContentEditor
                  content={contentBlock?.content}
                  textColor={textColor()}
                />
                <div
                  className={styles.content_block_border}
                  style={{ backgroundColor: textColor() }}
                ></div>
              </div>
            ))}
          </div>
          <div className={styles.hou_modal_progress_container}>
            {currentPhase && (
              <h4 style={{ opacity: phaseCompletedOpacity(currentPhase) }}>
                <>
                  {currentPhase} {currentPhase !== Phase.COMPLETED && "Phase"}
                </>
              </h4>
            )}
            {currentPhase !== Phase.COMPLETED && (
              <div className="full-screen">
                <ProgressBar
                  currentPhase={currentPhase}
                  accent={Colors.BLUE}
                  height="35px"
                />
              </div>
            )}
          </div>
        </div>
      </HouModal>
    </>
  );
};

export default OpportunityPopUp;
