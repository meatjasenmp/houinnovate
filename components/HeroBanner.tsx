import { page_page_components_componentBlocks } from "../pages/api/__generated__/page";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks;
}

const HeroBanner = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent) return null;
  const { type, video, image, header, content, videoCta } = blockContent;
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      {header && <h1>{header}</h1>}
    </div>
  );
};

export default HeroBanner;
