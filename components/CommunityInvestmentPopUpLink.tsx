import { communityInvestmentsSelect_communityInvestments_edges } from "../pages/api/__generated__/communityInvestmentsSelect";

interface PopUpLinkProps {
  link: communityInvestmentsSelect_communityInvestments_edges | null;
}

import styles from "../styles/components/PopUpLink.module.css";

const CommunityInvestmentPopUpLink = ({ link }: PopUpLinkProps) => {
  const { node } = link || {};
  const { databaseId, title, communityAndOpportunityPopUps } = node || {};
  const { progress, alphanumericLabel, investmentType } =
    communityAndOpportunityPopUps || {};

  const popUpLinkClassNames = [styles.pop_up__link, "pop_up__link"].join(" ");
  const container = ["prose", styles.pop_up__link_container].join(" ");

  return (
    <div
      className={popUpLinkClassNames}
      data-id={databaseId}
      data-select-id={investmentType?.slug}
    >
      <div className={container}>
        {alphanumericLabel && <span>{alphanumericLabel}</span>}
        {title && <h2>{title}</h2>}
        {progress?.progressLabel && <h5>{progress.progressLabel}</h5>}
      </div>
      <div className={styles.pop_up__link_progress}>
        <div className={styles.pop_up__link_progress_bar} />
      </div>
    </div>
  );
};

export default CommunityInvestmentPopUpLink;
