import PopUpLink from "./PopUpLink";
import SelectComponent from "./SelectComponent";
import { Options } from "./helpers";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";

import styles from "../styles/components/PopUpSelect.module.css";

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
        <SelectComponent options={optionsArray} />
        {communityInvestments?.edges &&
          communityInvestments.edges.map((link, index) => (
            <PopUpLink link={link} key={index} />
          ))}
      </>
    </section>
  );
};

export default CommunityInvestmentsSelect;
