import ContentEditor from "./ContentEditor";
import CommittedDeployedProgressBar from "./CommittedDeployedProgressBar";
import OpportunitySelect from "./OpportunitySelect";

import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities } from "../pages/api/__generated__/page";

interface ProjectBasedOpportunitiesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities;
}

import styles from "../styles/components/ProjectBasedOpportunities.module.css";
import { Colors } from "../styles/helpers";

const ProjectBasedOpportunities = ({
  blockContent,
}: ProjectBasedOpportunitiesProps) => {
  if (!blockContent) return null;

  const { opportunitiesCreated, opportunitiesCreatedContent } = blockContent;

  return (
    <section className={styles.project_based_opportunities}>
      <CommittedDeployedProgressBar
        deployed={opportunitiesCreated?.opportunitiesCreated}
        committed={opportunitiesCreated?.opportunitiesCommitted}
        deployedLabel={opportunitiesCreated?.createdLabel}
        committedLabel={opportunitiesCreated?.committedLabel}
        accent={Colors.BLUE}
      />
      <ContentEditor content={opportunitiesCreatedContent} />
      <OpportunitySelect />
    </section>
  );
};

export default ProjectBasedOpportunities;
