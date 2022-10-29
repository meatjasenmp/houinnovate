import ContentEditor from "./ContentEditor";
import { backgroundColorMapping } from "../styles/helpers";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock } from "../pages/api/__generated__/page";

import styles from "../styles/components/ContentBlock.module.css";

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

  const sectionClassName = [styles.content_block, "full-screen"].join(" ");

  return (
    <section className={sectionClassName} id={String(scrollId)}>
      <div className={backgroundColorMapping(backgroundColor)}>
        {contentType === contentTypes.ContentBlock && contentBlockContent && (
          <div className={styles.content_block_wrapper}>
            <ContentEditor content={contentBlockContent} />
          </div>
        )}
        {contentType === contentTypes.ContentBlockColumn && (
          <div className={styles.content_block__columns}>
            <div className={styles.content_block__columns_wrapper}>
              {contentBlockColumnContent?.map((column, index) => (
                <div key={index} className={styles.content_block_column}>
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
