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
  if (!blockContent) return null;

  const { contentBlockStylized, list, showFooterText, footerText } =
    blockContent;

  return (
    <section className={styles.content_block_stylized}>
      <div className={styles.content_block_stylized_wrapper}>
        <div className={styles.content_wrapper}>
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
