import PopUpLink from "./PopUpLink";
import Select, { OnChangeValue } from "react-select";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";

import styles from "../styles/components/PopUpSelect.module.css";

interface Options {
  value?: string | null | undefined;
  label?: string | null | undefined;
}

const handleSelect = (selected: OnChangeValue<Options, false>) => {
  const { value } = selected || {};
  const links = document.querySelectorAll(".pop_up__link");

  links.forEach((link) => {
    const id = link.getAttribute("data-select-id");
    if (id === value) {
      link.classList.remove(styles.pop_up__link_hidden);
    } else {
      link.classList.add(styles.pop_up__link_hidden);
    }
  });
};

const CommunityInvestmentsSelect = () => {
  const { data, loading, error } = useCommunityInvestmentsSelect();
  if (loading || error || !data) return <></>;

  const { communityInvestments, communityInvestmentTypes } = data;
  const optionsArray: Options[] = [];

  communityInvestmentTypes?.edges?.map((investmentType) => {
    const { node } = investmentType || {};
    const { name, slug } = node || {};
    optionsArray.push({ value: slug, label: name });
  });

  return (
    <section>
      <>
        <Select options={optionsArray} onChange={handleSelect} />
        {communityInvestments?.edges &&
          communityInvestments.edges.map((link, index) => (
            <PopUpLink link={link} key={index} />
          ))}
      </>
    </section>
  );
};

export default CommunityInvestmentsSelect;
