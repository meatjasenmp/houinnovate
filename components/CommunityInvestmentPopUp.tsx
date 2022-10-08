import HouModal from "./HouModal";
import ContentEditor from "./ContentEditor";
import { useInvestment } from "../pages/api/investment";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import ProgressBar from "./ProgressBar";
import { Phase } from "./ProgressBar";

import styles from "../styles/components/Modal.module.css";
import { backgroundColorMapping, Colors } from "../styles/helpers";

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

  const { progress, alphanumericLabel, contentBlocks, dataFields, header } =
    communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel } = progress || {};

  const completedBackground = () => {
    if (currentPhase === Phase.COMPLETED) {
      return backgroundColorMapping(Colors.NEON);
    }
    return backgroundColorMapping(Colors.WHITE);
  };

  const containerPaddingBottom = () => {
    if (currentPhase === Phase.COMPLETED) {
      return "2rem";
    }
    return "0";
  };

  const containerClassName = [
    styles.hou_modal__container,
    completedBackground(),
    "prose prose-black",
  ].join(" ");

  return (
    <>
      <HouModal isOpen={isOpen} loading={loading} error={error}>
        <div
          className={containerClassName}
          style={{ paddingBottom: containerPaddingBottom() }}
        >
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
                <span>Funding:</span>
                <span>{progressLabel}</span>
              </div>
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
                  textColor="black"
                />
                <div className={styles.content_block_border}></div>
              </div>
            ))}
          </div>
          {currentPhase !== Phase.COMPLETED && (
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
          )}
        </div>
      </HouModal>
    </>
  );
};

export default CommunityInvestmentPopUp;
