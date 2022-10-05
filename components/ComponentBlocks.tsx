import { Components } from "./helpers";
import HeroBanner from "./HeroBanner";
import BoxLinksBlock from "./BoxLinksBlock";
import ContentBlock from "./ContentBlock";
import {
  page_page_components_componentBlocks,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock,
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
          }
        }
      })}
    </>
  );
};

export default ComponentBlocks;
