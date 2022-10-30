import ContentEditor from "./ContentEditor";
import { backgroundColorMapping, accentColor } from "../styles/helpers";
import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list_listItem,
} from "../pages/api/__generated__/page";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList;
}

interface ListItemProps {
  listItem:
    | page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list_listItem
    | null
    | undefined;
}

import styles from "../styles/components/ContentBlockStylizedList.module.css";
import { useEffect, useRef } from "react";

const ListItem = ({ listItem }: ListItemProps) => {
  if (!listItem) return null;

  const { listContent, listBackgroundColor } = listItem;

  const listItemClassName = [
    backgroundColorMapping(listBackgroundColor),
    styles.list_item,
  ].join(" ");

  return (
    <li className={listItemClassName}>
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
    <section className={styles.content_block_stylized} id={String(scrollId)}>
      <div className={styles.content_block_stylized_wrapper}>
        <div className={styles.content_wrapper} ref={contentWrapper}>
          <ContentEditor content={contentBlockStylized} />
        </div>
        <div className={styles.list_wrapper}>
          {list && list.length > 0 && (
            <ul className={styles.list}>
              {list.map((listItem, index) => (
                <ListItem listItem={listItem?.listItem} key={index} />
              ))}
            </ul>
          )}
          {showFooterText && (
            <div className={styles.footer}>
              <ContentEditor content={footerText} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentBlockStylized;
