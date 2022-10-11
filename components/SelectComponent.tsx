import Select, { OnChangeValue } from "react-select";
import { Options } from "./helpers";
import styles from "../styles/components/PopUpLink.module.css";
import { useEffect, useState } from "react";

interface SelectComponentProps {
  options: Options[];
  container: string;
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
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
    backgroundColor: state.isSelected && "#BEBEBE",
    fontFamily: "Sohne-Kraftig-Bold, sans-serif",
  }),
};

const SelectComponent = ({ options, container }: SelectComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<Options | null>(null);

  const selectContainer = document.querySelector(`.${container}`);

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  const handleSelect = (selected: OnChangeValue<Options, false>) => {
    setSelectedOption(selected as Options);
    const { value } = selected || {};
    const links = selectContainer?.querySelectorAll(".pop_up__link");

    if (value === "all") {
      links?.forEach((link) => {
        link.classList.remove(styles.pop_up__link_hidden);
      });
      return;
    }

    links?.forEach((link) => {
      const id = link.getAttribute("data-select-id");
      if (id === value) {
        link.classList.remove(styles.pop_up__link_hidden);
      } else {
        link.classList.add(styles.pop_up__link_hidden);
      }
    });
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
