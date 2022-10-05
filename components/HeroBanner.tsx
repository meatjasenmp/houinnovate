import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner,
} from "../pages/api/__generated__/page";
import { BackgroundColors, HeaderTextSizes } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import VideoBlock from "./VideoBlock";
import ImageBlock from "./ImageBlock";
import HeaderText from "./HeaderText";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { BiPlay } from "@react-icons/all-files/bi/BiPlay";

import styles from "../styles/components/HeroBanner.module.css";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner;
}

const HeroBanner = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent) return null;

  const { type, video, image, header, content, videoCta } = blockContent;
  const { contentEditor, pageLinkSelect, pageLinkButton } =
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
            {header && <HeaderText size={HeaderTextSizes.XL} text={header} />}
            {contentEditor && <ContentEditor content={contentEditor} />}
            {videoCta && (
              <Button
                bgColor={BackgroundColors.RED}
                label={videoCta}
                icon={<BiPlay />}
              />
            )}
            {pageLinkSelect && <ButtonLink link={pageLinkButton} />}
          </>
        </article>
      </div>
    </section>
  );
};

export default HeroBanner;
