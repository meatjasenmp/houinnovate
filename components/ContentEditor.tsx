import * as DOMPurify from "dompurify";
import styles from "../styles/components/ContentEditor.module.css";

const ContentEditor = ({ content }: { content: any }) => {
  const clean = DOMPurify.sanitize(content);
  return (
    <div
      className={styles.content__editor}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default ContentEditor;
