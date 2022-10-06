import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link,
} from "../pages/api/__generated__/page";
import { backgroundColorMapping, Colors, LinkType } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import ImageBlock from "./ImageBlock";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";

import styles from "../styles/components/BoxLinks.module.css";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks;
}

interface BoxLinkProps {
  content: page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink | null;
}

interface AnchorLinkProps {
  anchorLink: string | null;
}

interface PageLinkProps {
  pageLink: string | null | undefined;
  target: string | null | undefined;
}

const BoxLinkContent = ({ content }: BoxLinkProps) => {
  if (!content) return null;
  const { image, backgroundColor, boxLinkContent } =
    content as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink;

  const iconColor = () => {
    if (backgroundColor === Colors.NEON || backgroundColor === Colors.PINK) {
      return "black";
    }
    return "white";
  };

  return (
    <div className={styles.box_link}>
      <figure className={styles.block_link__image}>
        <ImageBlock image={image} height="590" width="1212" />
      </figure>
      <article>
        <ContentEditor content={boxLinkContent} />
      </article>
      <figure className={styles.link_icon}>
        <FiArrowUpRight color={iconColor()} size="3rem" />
      </figure>
    </div>
  );
};

const BoxPageLink = ({
  content,
  pageLink,
  target,
}: BoxLinkProps & PageLinkProps) => {
  const linkTarget = target ? target : "_self";
  const pageLinkUrl = pageLink ? pageLink : "#";
  return (
    <a href={pageLinkUrl} target={linkTarget}>
      <BoxLinkContent content={content} />
    </a>
  );
};

const BoxPageLinkAnchor = ({
  content,
  anchorLink,
}: BoxLinkProps & AnchorLinkProps) => {
  return (
    <a data-scroll={anchorLink} href="#">
      <BoxLinkContent content={content} />
    </a>
  );
};

const BoxLinksBlock = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent.boxLink) return null;
  return (
    <section className={styles.box_links}>
      <>
        {blockContent.boxLink.map((boxLink, index) => {
          const { link, backgroundColor } =
            boxLink as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink;
          const { linkType, anchorLink, pageLink } =
            link as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link;

          return (
            <div
              className={backgroundColorMapping(backgroundColor)}
              key={index}
            >
              {linkType === LinkType.PAGE ? (
                <BoxPageLink
                  content={boxLink}
                  pageLink={pageLink?.url}
                  target={pageLink?.target}
                />
              ) : (
                <BoxPageLinkAnchor content={boxLink} anchorLink={anchorLink} />
              )}
            </div>
          );
        })}
      </>
    </section>
  );
};

export default BoxLinksBlock;
