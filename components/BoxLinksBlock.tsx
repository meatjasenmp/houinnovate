import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link,
} from "../api/__generated__/page";
import { backgroundColorMapping, LinkType } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import ImageBlock from "./ImageBlock";
import { accentColor } from "../styles/helpers";
import { Link as ScrollLink } from "react-scroll";
import { handleScroll } from "./helpers";
import ArrowLinkIcon from "./ArrowLinkIcon";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "../styles/components/BoxLinks.module.css";
import { useEffect, useRef } from "react";

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

  return (
    <div className={styles.box_link}>
      <div className={styles.box_link_content}>
        <figure className={styles.block_link__image}>
          <ImageBlock image={image} priority={true} height="590" width="1212" />
        </figure>
        <article>
          <ContentEditor content={boxLinkContent} />
        </article>
      </div>
      <figure className={styles.link_icon}>
        <ArrowLinkIcon color={accentColor(backgroundColor)} />
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
    <ScrollLink
      href="#"
      to={String(anchorLink)}
      containerId="page-wrap"
      onClick={() => handleScroll(anchorLink)}
    >
      <BoxLinkContent content={content} />
    </ScrollLink>
  );
};

const BoxLinksBlock = ({ blockContent }: ComponentBlocksProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const boxLinkRef = useRef<HTMLDivElement>(null);
  const boxLinkStyles = [styles.box_links, "box_links_container"].join(" ");

  useEffect(() => {
    if (boxLinkRef.current) {
      const ctx = gsap.context(() => {
        const targets = gsap.utils.toArray(".box_link_animated");
        const duration = 0.25;
        const hold = 0.05;
        targets.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            scrollTrigger: {
              trigger: target,
            },
          });
          tl.from(target, { y: 20, opacity: 0 });
          tl.to(target, { y: 0, opacity: 1 });
        });
      }, boxLinkRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, []);

  if (!blockContent.boxLink) return null;
  return (
    <section className={boxLinkStyles} ref={boxLinkRef}>
      <>
        {blockContent.boxLink.map((boxLink, index) => {
          const { link, backgroundColor } =
            boxLink as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink;
          const { linkType, anchorLink, pageLink } =
            link as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link;
          const boxLinkStyles = [
            backgroundColorMapping(backgroundColor),
            "box_link_animated",
          ].join(" ");

          return (
            <div className={boxLinkStyles} key={index} data-id={index}>
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
