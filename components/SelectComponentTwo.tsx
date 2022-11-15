import React, { Dispatch, SetStateAction, useEffect } from "react";
import Select, { OnChangeValue } from "react-select";
import { Options } from "./helpers";

interface SelectComponentProps {
  options: Options[] | undefined;
  selectedOption: Options | null | undefined;
  setSelectedOption: Dispatch<SetStateAction<Options | undefined>>;
  setCategory: Dispatch<SetStateAction<string | null | undefined>>;
}

const selectStyles = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#000",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: 0,
    borderRadius: 0,
    fontFamily: "Sohne-Kraftig-Bold, sans-serif",
    borderColor: "#000 !important",
    borderBottom: "2px solid #000",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#E0E0E0",
    borderRadius: 0,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: "2.5rem",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
    fontSize: "2rem",
    backgroundColor: state.isSelected && "#BEBEBE",
    fontFamily: "Sohne-Kraftig-Bold, sans-serif",
  }),
};

const SelectComponentTwo = ({
  options,
  selectedOption,
  setSelectedOption,
  setCategory,
}: SelectComponentProps) => {
  useEffect(() => {
    if (options && options.length > 0) {
      setSelectedOption(options[0]);
    }
  }, [options]);

  const handleSelect = (selected: OnChangeValue<Options, false>) => {
    setSelectedOption(selected as Options);
    setCategory(selected?.value);
  };

  if (options && options.length > 0) {
    return (
      <Select
        options={options}
        styles={selectStyles}
        value={selectedOption}
        onChange={handleSelect}
        isSearchable={false}
      />
    );
  }

  return <></>;
};

export default SelectComponentTwo;
