import ContentEditor from "./ContentEditor";
import CommittedDeployedProgressBar from "./CommittedDeployedProgressBar";
import CommunityInvestmentsSelect from "./CommunityInvestmentsSelect";

import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment } from "../pages/api/__generated__/page";
import styles from "../styles/components/DirectCommunityInvestment.module.css";
import { Colors } from "../styles/helpers";
import { useEffect, useRef } from "react";

interface DirectCommunityInvestmentProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment;
}

const DirectCommunityInvestment = ({
  blockContent,
}: DirectCommunityInvestmentProps) => {
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
            headerItem.innerHTML = `<span class="underline text-underline-${Colors.NEON}">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-${Colors.NEON}">${word}</span>`;
          }
        }
      });
    }
  }, []);

  if (!blockContent) return null;

  const { communityInvestmentContent, deployment, scrollId } = blockContent;

  return (
    <section className={styles.community_investment} id={String(scrollId)}>
      <div className={styles.community_investment_wrapper}>
        <CommittedDeployedProgressBar
          deployed={deployment?.deployed}
          committed={deployment?.committed}
          deployedLabel={deployment?.deployedLabel}
          committedLabel={deployment?.investmentCommittedLabel}
          accent={Colors.NEON}
          annotation={deployment?.annotation}
        />
        <div
          className={styles.community_investment_content}
          ref={contentWrapper}
        >
          <ContentEditor content={communityInvestmentContent} />
        </div>
        <CommunityInvestmentsSelect />
      </div>
    </section>
  );
};

export default DirectCommunityInvestment;
