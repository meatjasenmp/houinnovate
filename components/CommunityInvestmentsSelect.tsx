import PopUpLink from "./PopUpLink";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";

import styles from "../styles/components/PopUpSelect.module.css";

const CommunityInvestmentsSelect = () => {
  const { data, loading, error } = useCommunityInvestmentsSelect();
  if (loading || error || !data) return <></>;

  const { communityInvestments } = data;
  return (
    <section>
      {communityInvestments?.edges &&
        communityInvestments.edges.map((link, index) => (
          <PopUpLink link={link} key={index} />
        ))}
    </section>
  );
};

export default CommunityInvestmentsSelect;
