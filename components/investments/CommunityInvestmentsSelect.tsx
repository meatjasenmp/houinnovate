import InvestmentCategorySelect from "./InvestmentCategorySelect";
import { useState } from "react";
import { Options } from "../helpers";
const CommunityInvestmentsSelect = () => {
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [currentCategory, setCurrentCategory] = useState<
    string | null | undefined
  >();

  return (
    <InvestmentCategorySelect
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      setCategory={setCurrentCategory}
    />
  );
};

export default CommunityInvestmentsSelect;
