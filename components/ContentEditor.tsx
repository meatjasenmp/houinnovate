import * as DOMPurify from "dompurify";
import styles from "../styles/components/ContentEditor.module.css";

const ContentEditor = ({ content }: { content: any }) => {
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
    }
  });
  const clean = DOMPurify.sanitize(content);
  const className = [styles.content__editor, "prose prose-white"].join(" ");
  return (
    <article
      className={className}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default ContentEditor;
