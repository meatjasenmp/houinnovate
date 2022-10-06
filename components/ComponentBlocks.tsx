import { Components } from "./helpers";
import HeroBanner from "./HeroBanner";
import BoxLinksBlock from "./BoxLinksBlock";
import ContentBlock from "./ContentBlock";
import ContentBlockStylized from "./ContentBlockStylized";
import Phases from "./Phases";
import WorkWithIon from "./WorkWithIon";
import ProjectBasedOpportunities from "./ProjectBasedOpportunities";
import DirectCommunityInvestment from "./DirectCommunityInvestment";
import {
  page_page_components_componentBlocks,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment,
} from "../pages/api/__generated__/page";

export interface ComponentBlocksProps {
  componentBlocks:
    | (page_page_components_componentBlocks | null)[]
    | null
    | undefined;
}

const ComponentBlocks = ({ componentBlocks }: ComponentBlocksProps) => {
  if (!componentBlocks) return null;

  return (
    <>
      {componentBlocks.map((componentBlock, index) => {
        if (componentBlock) {
          switch (componentBlock.__typename as string) {
            case Components.HERO_BANNER:
              const heroBannerBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner;
              return (
                <HeroBanner blockContent={heroBannerBlockContent} key={index} />
              );
            case Components.BOX_LINKS:
              const boxLinksBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks;
              return (
                <BoxLinksBlock
                  blockContent={boxLinksBlockContent}
                  key={index}
                />
              );
            case Components.CONTENT_BLOCK:
              const contentBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock;
              return (
                <ContentBlock blockContent={contentBlockContent} key={index} />
              );
            case Components.PROJECT_BASED_OPPORTUNITIES:
              const projectBasedOpportunitiesBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities;
              return (
                <ProjectBasedOpportunities
                  key={index}
                  blockContent={projectBasedOpportunitiesBlockContent}
                />
              );
            case Components.CONTENT_BLOCK_STYLIZED:
              const contentBlockStylizedListBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList;
              return (
                <ContentBlockStylized
                  key={index}
                  blockContent={contentBlockStylizedListBlockContent}
                />
              );
            case Components.PHASES:
              const phasesBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases;
              return <Phases key={index} blockContent={phasesBlockContent} />;
            case Components.WORK_WITH_ION:
              const workWithIonBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon;
              return (
                <WorkWithIon
                  key={index}
                  blockContent={workWithIonBlockContent}
                />
              );
            case Components.DIRECT_COMMUNITY_INVESTMENT:
              const communityInvestmentBlockContent =
                componentBlock as page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment;
              return (
                <DirectCommunityInvestment
                  key={index}
                  blockContent={communityInvestmentBlockContent}
                />
              );
          }
        }
      })}
    </>
  );
};

export default ComponentBlocks;
