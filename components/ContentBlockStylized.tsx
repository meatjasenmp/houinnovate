import React, { useEffect, useRef } from "react";
import ContentEditor from "./ContentEditor";
import { backgroundColorMapping, accentColor } from "../styles/helpers";
import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list_listItem,
} from "../api/__generated__/page";

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
    <section className="pb-4 py-8" id={String(scrollId)}>
      <div className="flex flex-col innovate-lg:flex-row">
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
            <div className="mt-4 pt-4 border-t-[6px] border-black">
              <ContentEditor content={footerText} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentBlockStylized;
