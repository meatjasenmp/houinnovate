import {
  page_page_components_componentBlocks,
  page_page_components_componentBlocks_content,
} from "../pages/api/__generated__/page";
import ContentEditor from "../styles/components/ContentEditor";

import styles from "../styles/components/HeroBanner.module.css";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks;
}

const HeroBanner = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent) return null;

  const { type, video, image, header, content, videoCta } = blockContent;
  const { contentEditor, pageLinkSelect, pageLinkButton } =
    content as page_page_components_componentBlocks_content;

  return (
    <section className="flex flex-1 justify-center items-center flex-col">
      <div className={styles.hero__banner}>
        <article>
          <>
            {header && <h1>{header}</h1>}
            {contentEditor && <ContentEditor content={contentEditor} />}
          </>
        </article>
      </div>
    </section>
  );
};

export default HeroBanner;
