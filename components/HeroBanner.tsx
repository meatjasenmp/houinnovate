import {
  page_page_components_componentBlocks,
  page_page_components_componentBlocks_content,
} from "../pages/api/__generated__/page";
import { HeaderTextSizes } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import VideoBlock from "./VideoBlock";
import ImageBlock from "./ImageBlock";
import HeaderText from "./HeaderText";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

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
    <section className="w-screen">
      <div className={styles.hero__banner}>
        <div className={styles.hero__banner_background}>
          {type === "video" && <VideoBlock video={video} />}
          {type === "image" && <ImageBlock image={image} />}
        </div>

        <article className="relative z-10">
          <>
            {header && <HeaderText size={HeaderTextSizes.XXL} text={header} />}
            {contentEditor && <ContentEditor content={contentEditor} />}
            {videoCta && <Button label={videoCta} />}
            {pageLinkSelect && <ButtonLink link={pageLinkButton} />}
          </>
        </article>
      </div>
    </section>
  );
};

export default HeroBanner;
