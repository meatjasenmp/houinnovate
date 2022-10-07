import PopUpLink from "./PopUpLink";
import Select from "react-select";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";

import styles from "../styles/components/PopUpSelect.module.css";
interface options {
  value?: string | null | undefined;
  label?: string | null | undefined;
}

const CommunityInvestmentsSelect = () => {
  const { data, loading, error } = useCommunityInvestmentsSelect();
  if (loading || error || !data) return <></>;

  const { communityInvestments, communityInvestmentTypes } = data;
  const optionsArray: options[] = [];

  communityInvestmentTypes?.edges?.map((investmentType) => {
    const { node } = investmentType || {};
    const { name } = node || {};
    optionsArray.push({ value: name, label: name });
  });

  return (
    <section>
      <>
        <Select options={optionsArray} />
        {communityInvestments?.edges &&
          communityInvestments.edges.map((link, index) => (
            <PopUpLink link={link} key={index} />
          ))}
      </>
    </section>
  );
};

export default CommunityInvestmentsSelect;
