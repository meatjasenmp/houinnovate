import PopUpLink from "./PopUpLink";
import SelectComponent from "./SelectComponent";
import { Options } from "./helpers";
import { useProjectOpportunitiesSelect } from "../pages/api/project_opportunities_select";
import OpportunityPopUp from "./OpportunityPopUp";
import ProgressBar from "./ProgressBar";

import styles from "../styles/components/PopUpLink.module.css";

import { useState } from "react";
import { Colors } from "../styles/helpers";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";

import { projectOpportunitiesSelect_projectBasedOpportunities_edges } from "../pages/api/__generated__/projectOpportunitiesSelect";

interface PopUpSelectProps {
  link: projectOpportunitiesSelect_projectBasedOpportunities_edges | null;
}

const OpportunityPopUpSelect = ({ link }: PopUpSelectProps) => {
  const { node } = link || {};

  const { title, communityAndOpportunityPopUps } = node || {};

  const { progress, alphanumericLabel, opportunityType } =
    communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel } = progress || {};

  const popUpLinkClassNames = [styles.pop_up__link, "pop_up__link"].join(" ");

  return (
    <div className={popUpLinkClassNames} data-select-id={opportunityType?.slug}>
      <div className={styles.pop_up__link_container}>
        {alphanumericLabel && <span>{alphanumericLabel}.</span>}
        {title && <h2>{title}</h2>}
        {showProgressLabel && progressLabel && <h5>{progressLabel}</h5>}
        <div>
          <figure className={styles.current_phase}>
            <p className={styles.current_phase_text}>{currentPhase} Phase</p>
            <FiArrowUpRight color="black" size="3rem" />
          </figure>
        </div>
      </div>
      <div className={styles.pop_up__link_progress}>
        <ProgressBar currentPhase={currentPhase} accent={Colors.BLUE} />
      </div>
    </div>
  );
};

const OpportunitySelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (e: { stopPropagation: () => void }) => {
    setIsOpen(false);
    e.stopPropagation();
  };

  const { data, loading, error } = useProjectOpportunitiesSelect();
  if (loading || error || !data) return <></>;

  const { projectBasedOpportunities } = data;

  const optionsArray: Options[] = [{ value: "all", label: "All Commitments" }];

  projectBasedOpportunities?.edges?.map((opportunity) => {
    const { slug, name } =
      opportunity?.node?.communityAndOpportunityPopUps?.opportunityType || {};
    optionsArray.push({ value: slug, label: name });
  });

  console.log(projectBasedOpportunities);

  return (
    <section>
      <>
        <SelectComponent options={optionsArray} />
        <div className={styles.pop_up__links_count}>
          {projectBasedOpportunities?.edges?.length} Results
        </div>
        <div className={styles.pop_up__links_container}>
          {projectBasedOpportunities?.edges &&
            projectBasedOpportunities.edges.map((link, index) => (
              <PopUpLink key={index} handleOpenModal={handleOpenModal}>
                <OpportunityPopUpSelect link={link} />
                <OpportunityPopUp
                  id={String(link?.node?.databaseId)}
                  isOpen={isOpen}
                  handleCloseModal={handleCloseModal}
                />
              </PopUpLink>
            ))}
        </div>
      </>
    </section>
  );
};

export default OpportunitySelect;
