import ContentEditor from "./ContentEditor";
import CommittedDeployedProgressBar from "./CommittedDeployedProgressBar";
import OpportunitySelect from "./OpportunitySelect";

import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities } from "../pages/api/__generated__/page";

interface ProjectBasedOpportunitiesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities;
}

import styles from "../styles/components/ProjectBasedOpportunities.module.css";
import { Colors } from "../styles/helpers";
import { useEffect, useRef } from "react";

const ProjectBasedOpportunities = ({
  blockContent,
}: ProjectBasedOpportunitiesProps) => {
  const contentWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentWrapper.current) {
      const content = contentWrapper.current;
      const headers = content.querySelectorAll("h3");

      headers.forEach((item) => {
        const headerItem = item as HTMLElement;
        const words = headerItem.innerText.split(" ");

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (i === 0) {
            headerItem.innerHTML = `<span class="underline text-underline-${Colors.BLUE}">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-${Colors.BLUE}">${word}</span>`;
          }
        }
      });
    }
  }, []);

  if (!blockContent) return null;

  const { opportunitiesCreated, opportunitiesCreatedContent, scrollId } =
    blockContent;

  return (
    <section
      className={styles.project_based_opportunities}
      id={String(scrollId)}
    >
      <div className={styles.project_based_opportunities_wrapper}>
        <CommittedDeployedProgressBar
          deployed={opportunitiesCreated?.opportunitiesCreated}
          committed={opportunitiesCreated?.opportunitiesCommitted}
          deployedLabel={opportunitiesCreated?.createdLabel}
          committedLabel={opportunitiesCreated?.committedLabel}
          annotation={opportunitiesCreated?.annotation}
          accent={Colors.BLUE}
        />
        <div
          className={styles.project_based_opportunities_content}
          ref={contentWrapper}
        >
          <ContentEditor content={opportunitiesCreatedContent} />
        </div>
        <OpportunitySelect />
      </div>
    </section>
  );
};

export default ProjectBasedOpportunities;
