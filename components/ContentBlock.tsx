import ContentEditor from "./ContentEditor";
import { backgroundColorMapping, accentColor } from "../styles/helpers";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock } from "../pages/api/__generated__/page";

import styles from "../styles/components/ContentBlock.module.css";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock;
}

const ContentBlock = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent) return null;
  const { contentBlockContent, backgroundColor } = blockContent;

  const sectionClassName = [styles.content_block, "full-screen"].join(" ");

  return (
    <section className={sectionClassName}>
      <div className={backgroundColorMapping(backgroundColor)}>
        <ContentEditor content={contentBlockContent} />
      </div>
    </section>
  );
};

export default ContentBlock;
