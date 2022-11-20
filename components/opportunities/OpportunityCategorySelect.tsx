import React, { useEffect, useState } from "react";
import Select, { OnChangeValue } from "react-select";
import {
  Options,
  SelectComponentProps,
  selectStyles,
  setCategories,
} from "../helpers";
import { useOpportunityCategories } from "../../api/opportunities/opportunity_categories";

const OpportunityCategorySelect = ({
  selectedOption,
  setSelectedOption,
  setCategory,
}: SelectComponentProps) => {
  const { data: opportunityCategories } = useOpportunityCategories();
  const [selectOptions, setSelectOptions] = useState<Options[]>();

  useEffect(() => {
    if (opportunityCategories) {
      setSelectOptions(
        setCategories(
          opportunityCategories?.opportunityTypes?.edges,
          setSelectedOption,
          setCategory,
          "All Commitments"
        )
      );
    }
  }, [opportunityCategories]);

  const handleSelect = (selected: OnChangeValue<Options, false>) => {
    setSelectedOption(selected as Options);
    setCategory(selected?.value);
  };

  if (selectOptions && selectOptions.length > 0) {
    return (
      <Select
        options={selectOptions}
        styles={selectStyles}
        value={selectedOption}
        onChange={handleSelect}
        isSearchable={false}
      />
    );
  }

  return <></>;
};

export default OpportunityCategorySelect;
