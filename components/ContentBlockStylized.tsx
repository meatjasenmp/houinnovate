import React, { useEffect, useLayoutEffect, useRef } from "react";
import ContentEditor from "./ContentEditor";
import { backgroundColorMapping, accentColor } from "../styles/helpers";
import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list_listItem,
} from "../api/__generated__/page";

import { gsap } from "gsap";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList;
}

interface ListItemProps {
  listItem:
    | page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list_listItem
    | null
    | undefined;
}

const ListItem = ({ listItem }: ListItemProps) => {
  if (!listItem) return null;

  const { listContent, listBackgroundColor } = listItem;

  return (
    <li
      className={`mb-2 last:mb-0 p-4 ${backgroundColorMapping(
        listBackgroundColor
      )}`}
    >
      <p className={`text-innovate-${accentColor(listBackgroundColor)}`}>
        {listContent}
      </p>
    </li>
  );
};

const ContentBlockStylized = ({ blockContent }: ComponentBlocksProps) => {
  const contentWrapper = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentWrapper.current) {
      const content = contentWrapper.current;
      const headers = content.querySelectorAll("h1");

      headers.forEach((item) => {
        const headerItem = item as HTMLElement;
        const words = headerItem.innerText.split(" ");

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (i === 0) {
            headerItem.innerHTML = `<span class="underline text-underline-${headerUnderlineAccent}">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-${headerUnderlineAccent}">${word}</span>`;
          }
        }
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        const article = sectionRef.current?.querySelector("article");
        const articleTargets = [...(article?.querySelectorAll("h1, p") || [])];
        const duration = 0.1;
        const hold = 0.05;
        articleTargets?.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            scrollTrigger: {
              trigger: target,
            },
          });
          tl.from(target, { y: 20, opacity: 0 });
          tl.to(target, { y: 0, opacity: 1 });
        });

        const footer = sectionRef.current?.querySelector("footer");
        const listTargets = [
          ...(sectionRef.current?.querySelectorAll("li") || []),
          footer,
        ];
        const listDuration = 0.1;
        const listHold = 0.05;
        listTargets?.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: listDuration * index + listHold * index,
            scrollTrigger: {
              trigger: target,
            },
          });
          tl.from(target, { x: 20, opacity: 0 });
          tl.to(target, { x: 0, opacity: 1 });
        });
      }, sectionRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, []);

  if (!blockContent) return null;

  const {
    contentBlockStylized,
    list,
    showFooterText,
    footerText,
    scrollId,
    headerUnderlineAccent,
  } = blockContent;

  return (
    <section
      className="py-8 innovate-lg:py-24"
      id={String(scrollId)}
      ref={sectionRef}
    >
      <div className="flex flex-col max-w-screen-innovate-lg mx-auto innovate-lg:flex-row">
        <div className="max-w-lg innovate-lg:mr-10" ref={contentWrapper}>
          <ContentEditor content={contentBlockStylized} />
        </div>
        <div className="flex-grow">
          {list && list.length > 0 && (
            <ul className="mt-5 innovate-lg:mt-0">
              {list.map((listItem, index) => (
                <ListItem listItem={listItem?.listItem} key={index} />
              ))}
            </ul>
          )}
          {showFooterText && (
            <footer className="mt-4 pt-4 border-t-[6px] border-black">
              <ContentEditor content={footerText} />
            </footer>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentBlockStylized;
