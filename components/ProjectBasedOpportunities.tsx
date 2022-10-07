import ContentEditor from "./ContentEditor";
import ProgressBar from "./ProgressBar";
import OpportunitySelect from "./OpportunitySelect";

import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities } from "../pages/api/__generated__/page";

interface ProjectBasedOpportunitiesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities;
}

import styles from "../styles/components/ProjectBasedOpportunities.module.css";

const ProjectBasedOpportunities = ({
  blockContent,
}: ProjectBasedOpportunitiesProps) => {
  if (!blockContent) return null;

  const { opportunitiesCreated, opportunitiesCreatedContent } = blockContent;

  return (
    <section className={styles.project_based_opportunities}>
      <ProgressBar
        deployed={opportunitiesCreated?.opportunitiesCreated}
        committed={opportunitiesCreated?.opportunitiesCommitted}
        deployedLabel={opportunitiesCreated?.committedLabel}
        committedLabel={opportunitiesCreated?.committedLabel}
      />
      <ContentEditor content={opportunitiesCreatedContent} textColor="black" />
      <OpportunitySelect />
    </section>
  );
};

export default ProjectBasedOpportunities;
