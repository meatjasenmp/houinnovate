import { communityInvestmentsSelect_communityInvestments_edges } from "../pages/api/__generated__/communityInvestmentsSelect";
import CommunityInvestmentPopUp from "./CommunityInvestmentPopUp";

interface PopUpLinkProps {
  link: communityInvestmentsSelect_communityInvestments_edges | null;
}

import styles from "../styles/components/PopUpLink.module.css";
import { useState } from "react";

const CommunityInvestmentPopUpLink = ({ link }: PopUpLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { node } = link || {};
  const { databaseId, title, communityAndOpportunityPopUps } = node || {};
  const { progress, alphanumericLabel, investmentType } =
    communityAndOpportunityPopUps || {};

  const popUpLinkClassNames = [styles.pop_up__link, "pop_up__link"].join(" ");
  const container = ["prose", styles.pop_up__link_container].join(" ");
  const currentID = String(databaseId);

  const handleCommunityInvestmentPopUp = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={popUpLinkClassNames}
        data-id={databaseId}
        data-select-id={investmentType?.slug}
        onClick={handleCommunityInvestmentPopUp}
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
      <CommunityInvestmentPopUp
        id={currentID}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default CommunityInvestmentPopUpLink;
