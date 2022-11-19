import React, { useEffect, useState } from "react";
import Select, { OnChangeValue } from "react-select";
import {
  Options,
  SelectComponentProps,
  selectStyles,
  setCategories,
} from "../helpers";
import { useInvestmentCategories } from "../../api/investments/investment_categories";

const InvestmentCategorySelect = ({
  selectedOption,
  setSelectedOption,
  setCategory,
}: SelectComponentProps) => {
  const { data: investmentCategories } = useInvestmentCategories();
  const [selectOptions, setSelectOptions] = useState<Options[]>();

  useEffect(() => {
    if (investmentCategories) {
      setSelectOptions(
        setCategories(
          investmentCategories?.communityInvestmentTypes?.edges,
          setSelectedOption,
          setCategory,
          "All Investments"
        )
      );
    }
  }, [investmentCategories]);

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

export default InvestmentCategorySelect;
