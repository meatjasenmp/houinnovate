import { PopUpProps, PopUpTypes } from "./helpers";
import { useOpportunity } from "../pages/api/opportunity";
import ContentEditor from "./ContentEditor";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import ProgressBar from "./ProgressBar";
import { Phase } from "./ProgressBar";
import { completedBackground } from "./helpers";

import styles from "../styles/components/Modal.module.css";
import { Colors } from "../styles/helpers";
import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: 1000,
  },
};

ReactModal.setAppElement("#__next");

const OpportunityPopUp = ({
  id,
  currentID,
  setCurrentInvestmentID,
}: PopUpProps) => {
  const { data, loading, error } = useOpportunity(id);

  if (loading || error) return <></>;

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
  ].join(" ");

  const handleCloseModal = (e: { stopPropagation: () => void }) => {
    setCurrentInvestmentID(null);
    e.stopPropagation();
  };

  return (
    <>
      <ReactModal
        isOpen={Boolean(currentID === id)}
        contentLabel="test"
        style={customStyles}
        className={styles.hou_modal}
      >
        <div className={containerClassName}>
          <button
            className={styles.hou_modal_close_button}
            onClick={handleCloseModal}
          >
            <IoClose size="2rem" />
          </button>
          <div className={styles.content_wrapper}>
            <div className={styles.content_wrapper_flex_wrap}>
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
                    <ContentEditor content={contentBlock?.content} />
                    <div
                      className={styles.content_block_border}
                      style={{
                        backgroundColor: textColor(),
                        display: index === 0 ? "block" : "none",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.hou_modal_progress_container}>
              {currentPhase && (
                <h3>
                  <>
                    {currentPhase} {currentPhase !== Phase.COMPLETED && "Phase"}
                  </>
                </h3>
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
        </div>
      </ReactModal>
    </>
  );
};

export default OpportunityPopUp;
