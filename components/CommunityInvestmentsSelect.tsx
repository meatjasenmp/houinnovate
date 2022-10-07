import PopUpLink from "./PopUpLink";
import SelectComponent from "./SelectComponent";
import { Options, selectOptions } from "./helpers";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";
import CommunityInvestmentPopUp from "./CommunityInvestmentPopUp";

import styles from "../styles/components/PopUpSelect.module.css";

import { communityInvestmentsSelect_communityInvestments_edges } from "../pages/api/__generated__/communityInvestmentsSelect";
import { useState } from "react";

interface PopUpSelectProps {
  link: communityInvestmentsSelect_communityInvestments_edges | null;
}

const PopUpSelect = ({ link }: PopUpSelectProps) => {
  const { node } = link || {};
  const { title, communityAndOpportunityPopUps } = node || {};
  const { progress, alphanumericLabel, investmentType } =
    communityAndOpportunityPopUps || {};

  const popUpLinkClassNames = [styles.pop_up__link, "pop_up__link"].join(" ");
  const container = ["prose", styles.pop_up__link_container].join(" ");

  return (
    <div className={popUpLinkClassNames} data-select-id={investmentType?.slug}>
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

const CommunityInvestmentsSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (e: { stopPropagation: () => void }) => {
    setIsOpen(false);
    e.stopPropagation();
  };

  const { data, loading, error } = useCommunityInvestmentsSelect();
  if (loading || error || !data) return <></>;

  const { communityInvestments } = data;

  // TODO: Make this a helper function so it's multi-use (allLabel: string, options: [value: string; label: string; ]) => return [];
  const optionsArray: Options[] = [{ value: "all", label: "All Commitments" }];

  communityInvestments?.edges?.map((investment) => {
    const { slug, name } =
      investment?.node?.communityAndOpportunityPopUps?.investmentType || {};

    optionsArray.push({ value: slug, label: name });
  });

  return (
    <section>
      <>
        <SelectComponent options={optionsArray} />
        {communityInvestments?.edges &&
          communityInvestments.edges.map((link, index) => (
            <PopUpLink key={index} handleOpenModal={handleOpenModal}>
              <PopUpSelect link={link} />
              <CommunityInvestmentPopUp
                id={String(link?.node?.databaseId)}
                isOpen={isOpen}
                handleCloseModal={handleCloseModal}
              />
            </PopUpLink>
          ))}
      </>
    </section>
  );
};

export default CommunityInvestmentsSelect;
