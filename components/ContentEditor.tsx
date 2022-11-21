import * as DOMPurify from "dompurify";

interface ContentEditorProps {
  content: any;
}

const ContentEditor = ({ content }: ContentEditorProps) => {
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
    }
  });

  const clean = DOMPurify.sanitize(content);

  return <article dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default ContentEditor;
