import SelectComponent from "./SelectComponent";
import { Options } from "./helpers";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";
import CommunityInvestmentPopUp from "./CommunityInvestmentPopUp";
import ProgressBar from "./ProgressBar";

import styles from "../styles/components/PopUpLink.module.css";

import { communityInvestmentsSelect_communityInvestments_edges } from "../pages/api/__generated__/communityInvestmentsSelect";
import { useState, useRef, useEffect } from "react";
import { Colors } from "../styles/helpers";
import { optionSelectItems } from "./helpers";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";

interface PopUpSelectProps {
  link: communityInvestmentsSelect_communityInvestments_edges | null;
}

const CommunityPopUpSelect = ({ link }: PopUpSelectProps) => {
  const { node } = link || {};

  const { title, communityAndOpportunityPopUps } = node || {};

  const { progress, alphanumericLabel, investmentType } =
    communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel } = progress || {};

  const popUpLinkClassNames = [styles.pop_up__link, "pop_up__link"].join(" ");

  return (
    <div className={popUpLinkClassNames} data-select-id={investmentType?.slug}>
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
        <ProgressBar currentPhase={currentPhase} accent={Colors.NEON} />
      </div>
    </div>
  );
};

const CommunityInvestmentsSelect = () => {
  const [currentInvestmentID, setCurrentInvestmentID] = useState<
    string | null
  >();

  const handleOpenModal = (id: string) => {
    setCurrentInvestmentID(id);
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
        <div style={{ marginTop: "2rem", maxWidth: "600px" }}>
          <SelectComponent options={optionSelectItems(optionsArray)} />
          <div className={styles.pop_up__links_count}>
            {communityInvestments?.edges?.length}{" "}
            {communityInvestments?.edges?.length === 1 ? "Result" : "Results"}
          </div>
        </div>
        <div className={styles.pop_up__links_container}>
          {communityInvestments?.edges &&
            communityInvestments.edges.map((link, index) => (
              <div
                key={index}
                onClick={() => handleOpenModal(String(link?.node?.databaseId))}
              >
                <CommunityPopUpSelect link={link} />
                <CommunityInvestmentPopUp
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

export default CommunityInvestmentsSelect;
