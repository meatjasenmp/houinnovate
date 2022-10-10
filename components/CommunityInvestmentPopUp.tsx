import HouModal from "./HouModal";
import ContentEditor from "./ContentEditor";
import { useInvestment } from "../pages/api/investment";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import ProgressBar from "./ProgressBar";
import { Phase } from "./ProgressBar";
import { PopUpProps, PopUpTypes } from "./helpers";
import styles from "../styles/components/Modal.module.css";
import { Colors } from "../styles/helpers";
import { completedBackground, phaseCompletedOpacity } from "./helpers";

// TODO: The pop up can probably be a custom hook

const CommunityInvestmentPopUp = ({
  isOpen,
  handleCloseModal,
  id,
}: PopUpProps) => {
  const { data, loading, error } = useInvestment(id);

  const { communityInvestment } = data || {};

  const { communityAndOpportunityPopUps, title } = communityInvestment || {};

  const { progress, alphanumericLabel, contentBlocks, dataFields } =
    communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel } = progress || {};

  const containerClassName = [
    styles.hou_modal__container,
    completedBackground(currentPhase, PopUpTypes.INVESTMENT),
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
                <ContentEditor content={contentBlock?.content} />
                <div className={styles.content_block_border}></div>
              </div>
            ))}
          </div>
          <div className={styles.hou_modal_progress_container}>
            {currentPhase && (
              <h3 style={{ opacity: phaseCompletedOpacity(currentPhase) }}>
                <>
                  {currentPhase} {currentPhase !== Phase.COMPLETED && "Phase"}
                </>
              </h3>
            )}
            {currentPhase !== Phase.COMPLETED && (
              <div className="full-screen">
                <ProgressBar
                  currentPhase={currentPhase}
                  accent={Colors.NEON}
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

export default CommunityInvestmentPopUp;
