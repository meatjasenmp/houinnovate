import ContentEditor from "./ContentEditor";
import HeaderText from "./HeaderText";
import {
  backgroundColorMapping,
  HeaderTextSizes,
  textColorMapping,
} from "../styles/helpers";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock } from "../pages/api/__generated__/page";

import styles from "../styles/components/ContentBlock.module.css";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock;
}

const ContentBlock = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent) return null;
  const {
    header,
    contentBlockContent,
    backgroundColor,
    textColor,
    showHeader,
    showSubheader,
    subheader,
  } = blockContent;

  const sectionClassName = [styles.content_block, "full-screen"].join(" ");

  return (
    <section className={sectionClassName}>
      <div className={backgroundColorMapping(backgroundColor)}>
        <article className={textColorMapping(textColor)}>
          {showSubheader && (
            <HeaderText text={subheader} size={HeaderTextSizes.S} />
          )}
          {showHeader && (
            <HeaderText text={header} size={HeaderTextSizes.XXL} />
          )}
          <ContentEditor content={contentBlockContent} />
        </article>
      </div>
    </section>
  );
};

export default ContentBlock;
