import Select, { OnChangeValue } from "react-select";
import { Options } from "./helpers";
import styles from "../styles/components/PopUpLink.module.css";

interface SelectComponentProps {
  options: Options[];
}

const handleSelect = (selected: OnChangeValue<Options, false>) => {
  const { value } = selected || {};
  const links = document.querySelectorAll(".pop_up__link");

  if (value === "all") {
    links.forEach((link) => {
      link.classList.remove(styles.pop_up__link_hidden);
    });
    return;
  }

  links.forEach((link) => {
    const id = link.getAttribute("data-select-id");
    if (id === value) {
      link.classList.remove(styles.pop_up__link_hidden);
    } else {
      link.classList.add(styles.pop_up__link_hidden);
    }
  });
};

const SelectComponent = ({ options }: SelectComponentProps) => {
  return <Select options={options} onChange={handleSelect} />;
};

export default SelectComponent;
