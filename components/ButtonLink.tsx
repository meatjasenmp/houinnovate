import {
  page_page_components_componentBlocks_content_pageLinkButton,
  page_page_components_componentBlocks_content_pageLinkButton_link,
} from "../pages/api/__generated__/page";
import { ReactNode } from "react";

interface ButtonLinkProps {
  link:
    | page_page_components_componentBlocks_content_pageLinkButton
    | null
    | undefined;
}

const ButtonLink = ({ link }: ButtonLinkProps) => {
  const { target, title, url } =
    link?.link as page_page_components_componentBlocks_content_pageLinkButton_link;
  const { label } =
    link as page_page_components_componentBlocks_content_pageLinkButton;

  if (!url || !label) return null;

  const linkTarget = target === "_blank" ? "_blank" : "_self";
  const linkTitle = title || label;

  return (
    <a href={url} target={linkTarget} title={linkTitle} className="button">
      {label}
    </a>
  );
};

export default ButtonLink;
