/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projectBasedOpportunity
// ====================================================

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_contactInfo {
  __typename: "ProjectBasedOpportunity_Opportunity_ContactInfo";
  name: string | null;
  email: string | null;
  phone: string | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_dataFields_dataField {
  __typename: "ProjectBasedOpportunity_Opportunity_DataFields_dataField";
  labelField: string | null;
  contentField: string | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_dataFields {
  __typename: "ProjectBasedOpportunity_Opportunity_DataFields";
  dataField: (projectBasedOpportunity_projectBasedOpportunity_opportunity_dataFields_dataField | null)[] | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_category {
  __typename: "JobCategory";
  /**
   * The unique resource identifier path
   */
  id: string;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string | null;
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_downloads_file {
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

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_downloads {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData_downloads";
  downloadLabel: string | null;
  file: projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_downloads_file | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_specifications_specificationFile {
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

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_specifications {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData_specifications";
  specificationDownloadLabel: string | null;
  specificationFile: projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_specifications_specificationFile | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_addenda_addendaFile {
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

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_addenda {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData_addenda";
  addendaDownloadLabel: string | null;
  addendaFile: projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_addenda_addendaFile | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData";
  status: string | null;
  solicitationNumber: string | null;
  opportunityOpensOn: string | null;
  opportunityClosesOn: string | null;
  description: string | null;
  category: (projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_category | null)[] | null;
  downloads: (projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_downloads | null)[] | null;
  specifications: (projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_specifications | null)[] | null;
  addenda: (projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData_addenda | null)[] | null;
  aaeeo: string | null;
  importantNotice: string | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_opportunity {
  __typename: "ProjectBasedOpportunity_Opportunity";
  title: string | null;
  contactInfo: projectBasedOpportunity_projectBasedOpportunity_opportunity_contactInfo | null;
  dataFields: projectBasedOpportunity_projectBasedOpportunity_opportunity_dataFields | null;
  metaData: projectBasedOpportunity_projectBasedOpportunity_opportunity_metaData | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity {
  __typename: "ProjectBasedOpportunity";
  /**
   * The unique resource identifier path
   */
  databaseId: number;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Opportunity&quot; was set to Show in GraphQL.
   */
  opportunity: projectBasedOpportunity_projectBasedOpportunity_opportunity | null;
}

export interface projectBasedOpportunity {
  /**
   * An object of the ProjectBasedOpportunity Type. 
   */
  projectBasedOpportunity: projectBasedOpportunity_projectBasedOpportunity | null;
}

export interface projectBasedOpportunityVariables {
  id: string;
}
