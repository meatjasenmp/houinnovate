import * as DOMPurify from "dompurify";
import styles from "../styles/components/ContentEditor.module.css";

interface ContentEditorProps {
  content: any;
  textColor?: string;
}

const ContentEditor = ({ content, textColor }: ContentEditorProps) => {
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
    }
  });

  const selectedTextColor = textColor ? textColor : "white";

  const clean = DOMPurify.sanitize(content);
  const className = [
    styles.content__editor,
    `prose prose-${selectedTextColor}`,
  ].join(" ");

  return (
    <article
      className={className}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default ContentEditor;
