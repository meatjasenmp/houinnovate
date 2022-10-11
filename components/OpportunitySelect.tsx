import SelectComponent from "./SelectComponent";
import { Options, optionSelectItems } from "./helpers";
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
  const [currentInvestmentID, setCurrentInvestmentID] = useState<
    string | null
  >();

  const handleOpenModal = (id: string) => {
    setCurrentInvestmentID(id);
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

  return (
    <section>
      <>
        <div style={{ marginTop: "2rem", maxWidth: "600px" }}>
          <SelectComponent
            options={optionSelectItems(optionsArray)}
            container="opportunity_select"
          />
          <div className={styles.pop_up__links_count}>
            {projectBasedOpportunities?.edges?.length}{" "}
            {projectBasedOpportunities?.edges?.length === 1
              ? "Result"
              : "Results"}
          </div>
        </div>
        <div
          className={[
            styles.pop_up__links_container,
            "opportunity_select",
          ].join(" ")}
        >
          {projectBasedOpportunities?.edges &&
            projectBasedOpportunities.edges.map((link, index) => (
              <div
                key={index}
                onClick={() => handleOpenModal(String(link?.node?.databaseId))}
              >
                <OpportunityPopUpSelect link={link} />
                <OpportunityPopUp
                  setCurrentInvestmentID={setCurrentInvestmentID}
                  currentID={String(currentInvestmentID)}
                  id={String(link?.node?.databaseId)}
                />
              </div>
            ))}
        </div>
      </>
    </section>
  );
};

export default OpportunitySelect;
