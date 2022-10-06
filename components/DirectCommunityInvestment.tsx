import ContentEditor from "./ContentEditor";
import ProgressBar from "./ProgressBar";

import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment } from "../pages/api/__generated__/page";

interface DirectCommunityInvestmentProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment;
}

import styles from "../styles/components/DirectCommunityInvestment.module.css";

const DirectCommunityInvestment = ({
  blockContent,
}: DirectCommunityInvestmentProps) => {
  if (!blockContent) return null;

  const { communityInvestmentContent, deployment } = blockContent;

  return (
    <section className={styles.community_investment}>
      <ProgressBar
        deployed={deployment?.deployed}
        committed={deployment?.committed}
        deployedLabel={deployment?.deployedLabel}
        committedLabel={deployment?.investmentCommittedLabel}
      />
      <ContentEditor content={communityInvestmentContent} textColor="black" />
    </section>
  );
};

export default DirectCommunityInvestment;
