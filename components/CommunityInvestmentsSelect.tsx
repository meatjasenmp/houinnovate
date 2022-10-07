import CommunityInvestmentPopUpLink from "./CommunityInvestmentPopUpLink";
import SelectComponent from "./SelectComponent";
import { Options } from "./helpers";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";

import styles from "../styles/components/PopUpSelect.module.css";

const CommunityInvestmentsSelect = () => {
  const { data, loading, error } = useCommunityInvestmentsSelect();
  if (loading || error || !data) return <></>;

  const { communityInvestments } = data;

  const optionsArray: Options[] = [];

  communityInvestments?.edges?.map((investment) => {
    const { slug, name } =
      investment?.node?.communityAndOpportunityPopUps?.investmentType || {};

    optionsArray.push({ value: slug, label: name });
  });

  return (
    <section>
      <>
        <SelectComponent options={optionsArray} />
        {communityInvestments?.edges &&
          communityInvestments.edges.map((link, index) => (
            <CommunityInvestmentPopUpLink link={link} key={index} />
          ))}
      </>
    </section>
  );
};

export default CommunityInvestmentsSelect;
