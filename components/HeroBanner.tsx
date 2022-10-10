import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner,
} from "../pages/api/__generated__/page";
import { BackgroundColors } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import VideoBlock from "./VideoBlock";
import ImageBlock from "./ImageBlock";
import Button from "./Button";
import { BiPlay } from "@react-icons/all-files/bi/BiPlay";

import styles from "../styles/components/HeroBanner.module.css";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner;
}

const HeroBanner = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent) return null;

  const { type, video, image, content, videoCta } = blockContent;
  const { contentEditor } =
    content as page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content;

  return (
    <section className={styles.hero__banner_section}>
      <div className={styles.hero__banner}>
        <div className={styles.hero__banner_background}>
          {type === "video" && <VideoBlock video={video} />}
          {type === "image" && (
            <ImageBlock width="1920" height="1080" image={image} />
          )}
        </div>

        <article className="relative z-10">
          <>
            {contentEditor && <ContentEditor content={contentEditor} />}
            {videoCta && (
              <Button
                bgColor={BackgroundColors.RED}
                label={videoCta}
                icon={<BiPlay />}
                className={styles.hero__banner_button}
              />
            )}
          </>
        </article>
      </div>
    </section>
  );
};

export default HeroBanner;
