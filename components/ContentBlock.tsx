import React, { useEffect, useRef } from "react";
import ContentEditor from "./ContentEditor";
import { backgroundColorMapping } from "../styles/helpers";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock } from "../api/__generated__/page";
import { gsap } from "gsap";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock;
}

enum contentTypes {
  ContentBlock = "content",
  ContentBlockColumn = "columnContent",
}

const ContentBlock = ({ blockContent }: ComponentBlocksProps) => {
  const contentBlockRef = useRef<HTMLDivElement>(null);

  const {
    contentBlockContent,
    backgroundColor,
    contentBlockColumnContent,
    contentType,
    scrollId,
  } = blockContent;

  useEffect(() => {
    if (contentBlockRef.current) {
      const ctx = gsap.context(() => {
        const content = contentBlockRef?.current?.querySelectorAll(
          ".content_block_animated"
        );
        const targets = [...(content || [])];
        const duration = 0.1;
        const hold = 0.1;
        targets.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            scrollTrigger: {
              start: scrollId === "engage" ? "top bottom-=200px" : "top bottom",
              trigger: target,
            },
          });
          tl.from(target, { y: 20, opacity: 0 });
          tl.to(target, { y: 0, opacity: 1 });
        });
      }, contentBlockRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, [contentBlockContent]);

  if (!blockContent) return null;

  return (
    <section className="mt-5 full-screen" id={String(scrollId)}>
      <div
        className={`py-24 px-8 ${scrollId} ${backgroundColorMapping(
          backgroundColor
        )}`}
        ref={contentBlockRef}
      >
        {contentType === contentTypes.ContentBlock && contentBlockContent && (
          <div className="max-w-screen-innovate-lg mx-auto">
            <div className="max-w-screen-innovate-lg content_block_animated">
              <ContentEditor content={contentBlockContent} />
            </div>
          </div>
        )}
        {contentType === contentTypes.ContentBlockColumn && (
          <div>
            <div className="flex flex-col max-w-screen-innovate-lg mx-auto innovate-lg:flex-row innovate-lg:justify-between">
              {contentBlockColumnContent?.map((column, index) => (
                <div
                  className="max-w-lg innovate-lg:mr-10 last:mr-0 content_block_animated"
                  key={index}
                >
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
