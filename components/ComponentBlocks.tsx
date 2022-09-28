import { Components } from "./helpers";
import HeroBanner from "./HeroBanner";
import { page_page_components_componentBlocks } from "../pages/api/__generated__/page";

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
        if (componentBlock?.content) {
          switch (componentBlock.content.__typename) {
            case Components.HERO_BANNER:
              return <HeroBanner blockContent={componentBlock} key={index} />;
          }
        }
      })}
    </>
  );
};

export default ComponentBlocks;
