import SelectComponent from "./SelectComponent";
import { Options, optionSelectItems } from "./helpers";
import { useProjectOpportunitiesSelect } from "../pages/api/project_opportunities_select";
import OpportunityPopUp from "./OpportunityPopUp";

import styles from "../styles/components/PopUpLink.module.css";

import { useEffect, useState } from "react";

import { projectOpportunitiesSelect_projectBasedOpportunities_edges } from "../pages/api/__generated__/projectOpportunitiesSelect";
import { PopUpTypes } from "./helpers";
import PopUpLinks from "./PopUpLinks";

const OpportunitySelect = () => {
  const [currentInvestmentID, setCurrentInvestmentID] = useState<
    string | null
  >();

  const [selectedOptions, setSelectedOptions] = useState<
    Options[] | null | undefined
  >();

  const [selectedOption, setSelectedOption] = useState<Options | null>();

  const [selectedPopups, setSelectedPopUps] = useState<
    | (projectOpportunitiesSelect_projectBasedOpportunities_edges | null)[]
    | null
    | undefined
  >();

  useEffect(() => {
    setSelectedPopUps(findSelectedOptions(projectBasedOpportunities?.edges));
  }, [selectedOptions]);

  const handleOpenModal = (id: string) => {
    setCurrentInvestmentID(id);
  };

  const findSelectedOptions = (
    popups:
      | (projectOpportunitiesSelect_projectBasedOpportunities_edges | null)[]
      | null
      | undefined
  ) => {
    if (!popups) return;

    if (selectedOption?.value === "all") {
      return projectBasedOpportunities?.edges;
    }

    const array: (projectOpportunitiesSelect_projectBasedOpportunities_edges | null)[] =
      [];

    popups.find((edge) => {
      if (
        edge?.node?.communityAndOpportunityPopUps?.type?.slug ===
        selectedOption?.value
      ) {
        array.push(edge);
      }
    });

    return array;
  };

  const { data, loading, error } = useProjectOpportunitiesSelect();
  if (loading || error || !data) return <></>;

  const { projectBasedOpportunities } = data;

  const optionsArray: Options[] = [{ value: "all", label: "All Commitments" }];

  projectBasedOpportunities?.edges?.map((investment) => {
    const { slug, name } =
      investment?.node?.communityAndOpportunityPopUps?.type || {};

    optionsArray.push({ value: slug, label: name });
  });

  return (
    <section>
      <>
        <div style={{ marginTop: "2rem", maxWidth: "600px" }}>
          <SelectComponent
            options={optionSelectItems(optionsArray)}
            setSelectedOptions={setSelectedOptions}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
          <div className={styles.pop_up__links_count}>
            {selectedPopups?.length}{" "}
            {selectedPopups?.length === 1 ? "Result" : "Results"}
          </div>
        </div>
        <div
          className={[
            styles.pop_up__links_container,
            "opportunity_select",
          ].join(" ")}
        >
          {selectedPopups &&
            selectedPopups.map((link, index) => (
              <div
                key={index}
                onClick={() => handleOpenModal(String(link?.node?.databaseId))}
                className={styles.pop_up__link_container}
              >
                <PopUpLinks
                  link={link?.node}
                  popUpType={PopUpTypes.OPPORTUNITY}
                />
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
