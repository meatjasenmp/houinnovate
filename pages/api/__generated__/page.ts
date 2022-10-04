/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: page
// ====================================================

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_video {
  __typename: "MediaItem";
  /**
   * The globally unique identifier of the attachment object.
   */
  id: string;
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_image {
  __typename: "MediaItem";
  /**
   * The globally unique identifier of the attachment object.
   */
  id: string;
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
  /**
   * Alternative text to display when resource is not displayed
   */
  altText: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content_pageLinkButton_link {
  __typename: "AcfLink";
  /**
   * The target of the link (_blank, etc)
   */
  target: string | null;
  /**
   * The title of the link
   */
  title: string | null;
  /**
   * The url of the link
   */
  url: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content_pageLinkButton {
  __typename: "Page_Components_ComponentBlocks_HeroBanner_Content_PageLinkButton";
  label: string | null;
  link: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content_pageLinkButton_link | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content {
  __typename: "Page_Components_ComponentBlocks_HeroBanner_Content";
  contentEditor: string | null;
  pageLinkSelect: boolean | null;
  pageLinkButton: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content_pageLinkButton | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner {
  __typename: "Page_Components_ComponentBlocks_HeroBanner";
  type: string | null;
  video: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_video | null;
  image: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_image | null;
  header: string | null;
  content: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_content | null;
  videoCta: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_image {
  __typename: "MediaItem";
  /**
   * The globally unique identifier of the attachment object.
   */
  id: string;
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
  /**
   * Alternative text to display when resource is not displayed
   */
  altText: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link_pageLink {
  __typename: "AcfLink";
  /**
   * The url of the link
   */
  url: string | null;
  /**
   * The title of the link
   */
  title: string | null;
  /**
   * The target of the link (_blank, etc)
   */
  target: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link {
  __typename: "Page_Components_ComponentBlocks_BoxLinks_boxLink_Link";
  linkType: string | null;
  pageLink: page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link_pageLink | null;
  anchorLink: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink {
  __typename: "Page_Components_ComponentBlocks_BoxLinks_boxLink";
  image: page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_image | null;
  header: string | null;
  copy: string | null;
  link: page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link | null;
  backgroundColor: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks {
  __typename: "Page_Components_ComponentBlocks_BoxLinks";
  boxLink: (page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink | null)[] | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock {
  __typename: "Page_Components_ComponentBlocks_ContentBlock";
  header: string | null;
  contentBlockContent: string | null;
  backgroundColor: string | null;
  textColor: string | null;
}

export type page_page_components_componentBlocks = page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner | page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks | page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock;

export interface page_page_components {
  __typename: "Page_Components";
  componentBlocks: (page_page_components_componentBlocks | null)[] | null;
}

export interface page_page {
  __typename: "Page";
  /**
   * The globally unique identifier of the page object.
   */
  id: string;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Components&quot; was set to Show in GraphQL.
   */
  components: page_page_components | null;
}

export interface page_generalSettings {
  __typename: "GeneralSettings";
  /**
   * Site title.
   */
  title: string | null;
  /**
   * Site tagline.
   */
  description: string | null;
}

export interface page {
  /**
   * An object of the page Type. 
   */
  page: page_page | null;
  /**
   * Fields of the &#039;GeneralSettings&#039; settings group
   */
  generalSettings: page_generalSettings | null;
}

export interface pageVariables {
  id: string;
}
