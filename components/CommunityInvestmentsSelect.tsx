import SelectComponent from "./SelectComponent";
import { Options, optionSelectItems } from "./helpers";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";
import CommunityInvestmentPopUp from "./CommunityInvestmentPopUp";

import styles from "../styles/components/PopUpLink.module.css";

import { communityInvestmentsSelect_communityInvestments_edges } from "../pages/api/__generated__/communityInvestmentsSelect";
import { useEffect, useState } from "react";
import { PopUpTypes } from "./helpers";
import PopUpLinks from "./PopUpLinks";

const CommunityInvestmentsSelect = () => {
  const [currentInvestmentID, setCurrentInvestmentID] = useState<
    string | null
  >();
  const [selectedOptions, setSelectedOptions] = useState<
    Options[] | null | undefined
  >();
  const [selectedOption, setSelectedOption] = useState<Options | null>();
  const [selectedPopups, setSelectedPopUps] = useState<
    | (communityInvestmentsSelect_communityInvestments_edges | null)[]
    | null
    | undefined
  >();

  useEffect(() => {
    setSelectedPopUps(findSelectedOptions(communityInvestments?.edges));
  }, [selectedOptions]);

  const handleOpenModal = (id: string) => {
    setCurrentInvestmentID(id);
  };

  const findSelectedOptions = (
    popups:
      | (communityInvestmentsSelect_communityInvestments_edges | null)[]
      | null
      | undefined
  ) => {
    if (!popups) return;

    if (selectedOption?.value === "all") {
      return communityInvestments?.edges;
    }

    const array: (communityInvestmentsSelect_communityInvestments_edges | null)[] =
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

  const { data, loading, error } = useCommunityInvestmentsSelect();
  if (loading || error || !data) return <></>;

  const { communityInvestments } = data;

  // TODO: Make this a helper function so it's multi-use (allLabel: string, options: [value: string; label: string; ]) => return [];
  const optionsArray: Options[] = [{ value: "all", label: "All Commitments" }];

  communityInvestments?.edges?.map((investment) => {
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
          className={[styles.pop_up__links_container, "community_select"].join(
            " "
          )}
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
                  popUpType={PopUpTypes.INVESTMENT}
                />
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
