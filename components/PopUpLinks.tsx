import { communityInvestmentsSelect_communityInvestments_edges_node } from "../pages/api/__generated__/communityInvestmentsSelect";
import styles from "../styles/components/PopUpLink.module.css";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";
import ProgressBar from "./ProgressBar";
import { Colors } from "../styles/helpers";
import { projectOpportunitiesSelect_projectBasedOpportunities_edges_node } from "../pages/api/__generated__/projectOpportunitiesSelect";

export enum PopUpType {
  OPPORTUNITY = "opportunity",
  INVESTMENT = "investment",
}

interface PopUpSelectProps {
  link:
    | communityInvestmentsSelect_communityInvestments_edges_node
    | projectOpportunitiesSelect_projectBasedOpportunities_edges_node
    | null
    | undefined;
  popUpType: PopUpType;
}

const PopUpLinks = ({ link, popUpType }: PopUpSelectProps) => {
  if (!link) return <></>;

  const { title, communityAndOpportunityPopUps } = link || {};

  const { progress, alphanumericLabel, type } =
    communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel } = progress || {};

  const popUpLinkClassNames = [
    styles.pop_up__link,
    styles.pop_up__link_container,
    "pop_up__link",
  ].join(" ");

  return (
    <>
      <div className={popUpLinkClassNames} data-select-id={type?.slug}>
        <div className={styles.content}>
          {alphanumericLabel && <span>{alphanumericLabel}.</span>}
          {title && <h2>{title}</h2>}
          {showProgressLabel && progressLabel && <h5>{progressLabel}</h5>}
        </div>
        <div className={styles.progress}>
          <div className={styles.progress_content}>
            <figure className={styles.current_phase}>
              <span className={styles.current_phase_text}>
                {currentPhase} Phase
              </span>
              <FiArrowUpRight color="black" size="3rem" />
            </figure>
          </div>
          <ProgressBar
            currentPhase={currentPhase}
            accent={
              popUpType === PopUpType.INVESTMENT ? Colors.NEON : Colors.BLUE
            }
          />
        </div>
      </div>
    </>
  );
};

export default PopUpLinks;
