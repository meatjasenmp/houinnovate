import Select, { OnChangeValue } from "react-select";
import { Options } from "./helpers";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface SelectComponentProps {
  options: Options[];
  selectedOption: Options | null | undefined;
  setSelectedOption: Dispatch<SetStateAction<Options | null | undefined>>;
  setSelectedOptions: Dispatch<SetStateAction<Options[] | null | undefined>>;
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

const SelectComponent = ({
  options,
  setSelectedOptions,
  setSelectedOption,
  selectedOption,
}: SelectComponentProps) => {
  useEffect(() => {
    setSelectedOptions(options);
    setSelectedOption(options[0]);
  }, []);

  const handleSelect = (selected: OnChangeValue<Options, false>) => {
    setSelectedOption(selected as Options);
    setSelectedOptions(options);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleSelect}
      styles={selectStyles}
    />
  );
};

export default SelectComponent;
