import * as DOMPurify from "dompurify";
import styles from "../styles/components/ContentEditor.module.css";

interface ContentEditorProps {
  content: any;
  contentEditorClass?: string;
  className?: string;
}

const ContentEditor = ({
  content,
  contentEditorClass,
  className,
}: ContentEditorProps) => {
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
    }
  });

  const clean = DOMPurify.sanitize(content);
  const contentEditorClassName = [
    styles.content__editor,
    contentEditorClass,
    className,
  ].join(" ");

  return (
    <article
      className={contentEditorClassName}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default ContentEditor;
