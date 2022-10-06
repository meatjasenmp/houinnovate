import PopUpLink from "./PopUpLink";
import { useCommunityInvestmentsSelect } from "../pages/api/community_investments_select";

import styles from "../styles/components/PopUpSelect.module.css";

const CommunityInvestmentsSelect = () => {
  const { data, loading, error } = useCommunityInvestmentsSelect();
  if (loading || error) return <></>;
  console.log(data);
  return <section></section>;
};

export default CommunityInvestmentsSelect;
