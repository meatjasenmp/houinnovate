/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: navigation
// ====================================================

export interface navigation_siteOptionsPage_siteNavigation_navigation_sectionLinks {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation_sectionLinks";
  label: string | null;
  anchorLabel: string | null;
}

export interface navigation_siteOptionsPage_siteNavigation_navigation_blockLinks_links {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation_blockLinks_links";
  label: string | null;
  pageUrl: string | null;
}

export interface navigation_siteOptionsPage_siteNavigation_navigation_blockLinks {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation_blockLinks";
  label: string | null;
  links: (navigation_siteOptionsPage_siteNavigation_navigation_blockLinks_links | null)[] | null;
}

export interface navigation_siteOptionsPage_siteNavigation_navigation {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation";
  sectionLinks: (navigation_siteOptionsPage_siteNavigation_navigation_sectionLinks | null)[] | null;
  blockLinks: (navigation_siteOptionsPage_siteNavigation_navigation_blockLinks | null)[] | null;
  houinnovate: string | null;
}

export interface navigation_siteOptionsPage_siteNavigation {
  __typename: "SiteOptionsPage_Sitenavigation";
  navigation: navigation_siteOptionsPage_siteNavigation_navigation | null;
}

export interface navigation_siteOptionsPage {
  __typename: "SiteOptionsPage";
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Site Navigation&quot; was set to Show in GraphQL.
   */
  siteNavigation: navigation_siteOptionsPage_siteNavigation | null;
}

export interface navigation {
  /**
   * Site Options options.
   */
  siteOptionsPage: navigation_siteOptionsPage | null;
}
