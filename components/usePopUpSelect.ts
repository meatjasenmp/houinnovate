import { useEffect, useState } from "react";
import { Options } from "./helpers";
import {
  projectOpportunitiesSelect_projectBasedOpportunities,
  projectOpportunitiesSelect_projectBasedOpportunities_edges,
} from "../api/__generated__/projectOpportunitiesSelect";

const usePopUpSelect = (
  projects:
    | projectOpportunitiesSelect_projectBasedOpportunities
    | null
    | undefined
) => {
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
    setSelectedPopUps(findSelectedOptions(projects?.edges));
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
      return projects?.edges;
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

  const optionsArray: Options[] = [{ value: "all", label: "All Commitments" }];

  projects?.edges?.map((investment) => {
    const { slug, name } =
      investment?.node?.communityAndOpportunityPopUps?.type || {};

    optionsArray.push({ value: slug, label: name });
  });

  return {
    currentInvestmentID,
    setCurrentInvestmentID,
    setSelectedOptions,
    selectedOption,
    setSelectedOption,
    selectedPopups,
    handleOpenModal,
    optionsArray,
  };
};

export default usePopUpSelect;
