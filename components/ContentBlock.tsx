import ContentEditor from "./ContentEditor";
import HeaderText from "./HeaderText";
import {
  HeaderTextSizes,
  backgroundColorMapping,
  textColorMapping,
  Colors,
} from "../styles/helpers";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock } from "../pages/api/__generated__/page";

import styles from "../styles/ContentBlock.module.css";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock;
}

const ContentBlock = ({ blockContent }: ComponentBlocksProps) => {
  if (!blockContent) return null;
  console.log(blockContent);
  return <></>;
};

export default ContentBlock;
