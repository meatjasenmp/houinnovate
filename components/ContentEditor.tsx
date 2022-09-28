import * as DOMPurify from "dompurify";

const ContentEditor = ({ content }: { content: any }) => {
  const clean = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default ContentEditor;
