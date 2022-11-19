import React, { useEffect, useState } from "react";
import Select, { OnChangeValue } from "react-select";
import {
  Options,
  SelectComponentProps,
  selectStyles,
  setCategories,
} from "../helpers";
import { useJobCategories } from "../../api/jobs/job_categories";

const JobCategorySelect = ({
  selectedOption,
  setSelectedOption,
  setCategory,
}: SelectComponentProps) => {
  const { data: jobCategories } = useJobCategories();
  const [selectOptions, setSelectOptions] = useState<Options[]>();

  useEffect(() => {
    if (jobCategories) {
      setSelectOptions(
        setCategories(
          jobCategories.jobCategories?.edges,
          setSelectedOption,
          setCategory,
          "All Jobs"
        )
      );
    }
  }, [jobCategories]);

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

export default JobCategorySelect;
