import * as DOMPurify from "dompurify";
import styles from "../styles/components/ContentEditor.module.css";

const ContentEditor = ({ content }: { content: any }) => {
  const clean = DOMPurify.sanitize(content);
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    // set all elements owning target to target=_blank
    if ("target" in node) {
      node.setAttribute("target", "_blank");
    }
  });
  return (
    <div
      className={styles.content__editor}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default ContentEditor;
