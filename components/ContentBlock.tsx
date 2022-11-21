import ContentEditor from "./ContentEditor";
import { backgroundColorMapping } from "../styles/helpers";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock } from "../api/__generated__/page";

import { useScrollToSection } from "./helpers";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock;
}

enum contentTypes {
  ContentBlock = "content",
  ContentBlockColumn = "columnContent",
}

const ContentBlock = ({ blockContent }: ComponentBlocksProps) => {
  const {
    contentBlockContent,
    backgroundColor,
    contentBlockColumnContent,
    contentType,
    scrollId,
  } = blockContent;

  useScrollToSection(scrollId);

  return (
    <section className="mt-5 full-screen" id={String(scrollId)}>
      <div className={`py-10 px-8 ${backgroundColorMapping(backgroundColor)}`}>
        {contentType === contentTypes.ContentBlock && contentBlockContent && (
          <div className="max-w-[990px] mx-auto">
            <ContentEditor content={contentBlockContent} />
          </div>
        )}
        {contentType === contentTypes.ContentBlockColumn && (
          <div>
            <div className="flex flex-col max-w-[990px] mx-auto">
              {contentBlockColumnContent?.map((column, index) => (
                <div key={index}>
                  <ContentEditor content={column?.content} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentBlock;
