/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: page
// ====================================================

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_contentBlocks {
  __typename: "Page_Components_ComponentBlocks_HeroBanner_contentBlocks";
  contentBlock: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner {
  __typename: "Page_Components_ComponentBlocks_HeroBanner";
  contentBlocks: (page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner_contentBlocks | null)[] | null;
  videoCta: string | null;
  videoUrl: string | null;
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
  boxLinkContent: string | null;
  link: page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink_link | null;
  backgroundColor: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks {
  __typename: "Page_Components_ComponentBlocks_BoxLinks";
  scrollId: string | null;
  boxLink: (page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks_boxLink | null)[] | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock_contentBlockColumnContent {
  __typename: "Page_Components_ComponentBlocks_ContentBlock_contentColumns";
  content: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock {
  __typename: "Page_Components_ComponentBlocks_ContentBlock";
  contentBlockContent: string | null;
  contentBlockColumnContent: (page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock_contentBlockColumnContent | null)[] | null;
  scrollId: string | null;
  contentType: string | null;
  backgroundColor: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list_listItem {
  __typename: "Page_Components_ComponentBlocks_ContentBlockStylizedList_list_ListItem";
  listContent: string | null;
  listBackgroundColor: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list {
  __typename: "Page_Components_ComponentBlocks_ContentBlockStylizedList_list";
  listItem: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list_listItem | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList {
  __typename: "Page_Components_ComponentBlocks_ContentBlockStylizedList";
  contentBlockStylized: string | null;
  list: (page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList_list | null)[] | null;
  headerUnderlineAccent: string | null;
  scrollId: string | null;
  showFooterText: boolean | null;
  footerText: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList_phase {
  __typename: "Page_Components_ComponentBlocks_Phases_phasesList_Phase";
  phaseText: string | null;
  phaseHeader: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList {
  __typename: "Page_Components_ComponentBlocks_Phases_phasesList";
  phase: page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList_phase | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases {
  __typename: "Page_Components_ComponentBlocks_Phases";
  scrollId: string | null;
  accentColor: string | null;
  phasesContent: string | null;
  phasesList: (page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList | null)[] | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon {
  __typename: "Page_Components_ComponentBlocks_WorkWithIon";
  scrollId: string | null;
  workWithIonContent: string | null;
  selectText: string | null;
  cta: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities_opportunitiesCreated {
  __typename: "Page_Components_ComponentBlocks_ProjectBasedOpportunities_OpportunitiesCreated";
  committedLabel: string | null;
  createdLabel: string | null;
  opportunitiesCreated: number | null;
  opportunitiesCommitted: number | null;
  annotation: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities {
  __typename: "Page_Components_ComponentBlocks_ProjectBasedOpportunities";
  scrollId: string | null;
  opportunitiesCreated: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities_opportunitiesCreated | null;
  opportunitiesCreatedContent: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment_deployment {
  __typename: "Page_Components_ComponentBlocks_CommunityInvestment_Deployment";
  deployedLabel: string | null;
  investmentCommittedLabel: string | null;
  deployed: number | null;
  committed: number | null;
  annotation: string | null;
}

export interface page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment {
  __typename: "Page_Components_ComponentBlocks_CommunityInvestment";
  scrollId: string | null;
  deployment: page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment_deployment | null;
  communityInvestmentContent: string | null;
}

export type page_page_components_componentBlocks = page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner | page_page_components_componentBlocks_Page_Components_ComponentBlocks_BoxLinks | page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlock | page_page_components_componentBlocks_Page_Components_ComponentBlocks_ContentBlockStylizedList | page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases | page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon | page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities | page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment;

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

export interface page_siteOptionsPage_annualReport_annualReportDownload {
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

export interface page_siteOptionsPage_annualReport {
  __typename: "SiteOptionsPage_Annualreport";
  annualReportTitle: string | null;
  annualReportDownload: page_siteOptionsPage_annualReport_annualReportDownload | null;
}

export interface page_siteOptionsPage_siteNavigation_navigation_sectionLinks {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation_sectionLinks";
  label: string | null;
  anchorLabel: string | null;
}

export interface page_siteOptionsPage_siteNavigation_navigation_blockLinks_links {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation_blockLinks_links";
  label: string | null;
  pageUrl: string | null;
}

export interface page_siteOptionsPage_siteNavigation_navigation_blockLinks {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation_blockLinks";
  label: string | null;
  links: (page_siteOptionsPage_siteNavigation_navigation_blockLinks_links | null)[] | null;
}

export interface page_siteOptionsPage_siteNavigation_navigation {
  __typename: "SiteOptionsPage_Sitenavigation_Navigation";
  sectionLinks: (page_siteOptionsPage_siteNavigation_navigation_sectionLinks | null)[] | null;
  blockLinks: (page_siteOptionsPage_siteNavigation_navigation_blockLinks | null)[] | null;
  houinnovate: string | null;
}

export interface page_siteOptionsPage_siteNavigation {
  __typename: "SiteOptionsPage_Sitenavigation";
  navigation: page_siteOptionsPage_siteNavigation_navigation | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch_contentBlocks {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch_contentBlocks";
  content: string | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch";
  contentBlocks: (page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch_contentBlocks | null)[] | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_ionLogo {
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

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_socialMedia_socialMediaLink {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_SocialMedia_socialMediaLink";
  label: string | null;
  url: string | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_socialMedia {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_SocialMedia";
  header: string | null;
  socialMediaLink: (page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_socialMedia_socialMediaLink | null)[] | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_ctaLinks {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_ctaLinks";
  cta: string | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict";
  ionLogo: page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_ionLogo | null;
  address: string | null;
  socialMedia: page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_socialMedia | null;
  ctaLinks: (page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict_ctaLinks | null)[] | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_riceUniversityLogo {
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

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_riceSocialMedia_riceSocialMediaLink {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_SocialMedia_socialMediaLink";
  label: string | null;
  url: string | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_riceSocialMedia {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_SocialMedia";
  riceSocialHeader: string | null;
  riceSocialMediaLink: (page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_riceSocialMedia_riceSocialMediaLink | null)[] | null;
}

export interface page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity {
  __typename: "SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity";
  riceUniversityLogo: page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_riceUniversityLogo | null;
  riceAddress: string | null;
  riceSocialMedia: page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity_riceSocialMedia | null;
}

export type page_siteOptionsPage_siteFooter_footerBlocks = page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch | page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict | page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity;

export interface page_siteOptionsPage_siteFooter {
  __typename: "SiteOptionsPage_Sitefooter";
  footerHeader: string | null;
  footerBlocks: (page_siteOptionsPage_siteFooter_footerBlocks | null)[] | null;
}

export interface page_siteOptionsPage {
  __typename: "SiteOptionsPage";
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Annual Report&quot; was set to Show in GraphQL.
   */
  annualReport: page_siteOptionsPage_annualReport | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Site Navigation&quot; was set to Show in GraphQL.
   */
  siteNavigation: page_siteOptionsPage_siteNavigation | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Site Footer&quot; was set to Show in GraphQL.
   */
  siteFooter: page_siteOptionsPage_siteFooter | null;
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
  /**
   * Site Options options.
   */
  siteOptionsPage: page_siteOptionsPage | null;
}

export interface pageVariables {
  id: string;
}
