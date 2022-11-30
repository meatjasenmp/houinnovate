import React, { useEffect, useRef } from "react";
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

  return (
    <div
      className={[
        "relative flex flex-col flex-1 h-full",
        styles.block_link,
      ].join(" ")}
    >
      <div>
        <figure
          className={["w-full h-[275px]", styles.block_link__image].join(" ")}
        >
          <ImageBlock image={image} priority={true} height="590" width="1212" />
        </figure>
        <article className="p-6 max-w-lg xl:max-w-xl">
          <ContentEditor content={boxLinkContent} />
        </article>
      </div>
      <figure
        className={[
          "w-12 h-12 relative right-[.7rem] bottom-[.7rem] self-end mt-auto duration-300 ease-linear",
          styles.arrow_icon,
        ].join(" ")}
      >
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
    <a className="block h-full" href={pageLinkUrl} target={linkTarget}>
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
      className="block h-full"
      onClick={() => handleScroll(anchorLink)}
    >
      <BoxLinkContent content={content} />
    </ScrollLink>
  );
};

const BoxLinksBlock = ({ blockContent }: ComponentBlocksProps) => {
  const boxLinkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxLinkRef.current) {
      const ctx = gsap.context(() => {
        const targets = gsap.utils.toArray(".box_link_animated");
        const duration = 0.1;
        const hold = 0.05;
        targets.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            scrollTrigger: {
              trigger: target,
              markers: true,
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
  }, [blockContent]);

  if (!blockContent.boxLink) return null;

  return (
    <section
      className={[
        "grid gap-[.8rem] md:grid-cols-2 auto-rows-fr box_links_container",
        styles.box_links,
      ].join(" ")}
      ref={boxLinkRef}
    >
      <>
        {blockContent.boxLink.map((boxLink, index) => {
          const { link, backgroundColor } =
            boxLink as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink;
          const { linkType, anchorLink, pageLink } =
            link as page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link;

          return (
            <div
              className={`${backgroundColorMapping(
                backgroundColor
              )} box_link_animated`}
              key={index}
              data-id={index}
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
