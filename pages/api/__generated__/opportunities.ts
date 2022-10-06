/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: opportunities
// ====================================================

export interface opportunities_opportunityTypes_edges_node {
  __typename: "OpportunityType";
  /**
   * The unique resource identifier path
   */
  databaseId: number;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string | null;
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface opportunities_opportunityTypes_edges {
  __typename: "RootQueryToOpportunityTypeConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: opportunities_opportunityTypes_edges_node | null;
}

export interface opportunities_opportunityTypes {
  __typename: "RootQueryToOpportunityTypeConnection";
  /**
   * Edges for the RootQueryToOpportunityTypeConnection connection
   */
  edges: (opportunities_opportunityTypes_edges | null)[] | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity_contactInfo {
  __typename: "ProjectBasedOpportunity_Opportunity_ContactInfo";
  name: string | null;
  email: string | null;
  phone: string | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity_dataFields_dataField {
  __typename: "ProjectBasedOpportunity_Opportunity_DataFields_dataField";
  labelField: string | null;
  contentField: string | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity_dataFields {
  __typename: "ProjectBasedOpportunity_Opportunity_DataFields";
  dataField: (opportunities_projectBasedOpportunities_nodes_opportunity_dataFields_dataField | null)[] | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData_category {
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

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData_downloads_file {
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

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData_downloads {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData_downloads";
  downloadLabel: string | null;
  file: opportunities_projectBasedOpportunities_nodes_opportunity_metaData_downloads_file | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData_specifications_specificationFile {
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

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData_specifications {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData_specifications";
  specificationDownloadLabel: string | null;
  specificationFile: opportunities_projectBasedOpportunities_nodes_opportunity_metaData_specifications_specificationFile | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData_addenda_addendaFile {
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

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData_addenda {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData_addenda";
  addendaDownloadLabel: string | null;
  addendaFile: opportunities_projectBasedOpportunities_nodes_opportunity_metaData_addenda_addendaFile | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity_metaData {
  __typename: "ProjectBasedOpportunity_Opportunity_MetaData";
  status: string | null;
  solicitationNumber: string | null;
  opportunityOpensOn: string | null;
  opportunityClosesOn: string | null;
  description: string | null;
  category: (opportunities_projectBasedOpportunities_nodes_opportunity_metaData_category | null)[] | null;
  downloads: (opportunities_projectBasedOpportunities_nodes_opportunity_metaData_downloads | null)[] | null;
  specifications: (opportunities_projectBasedOpportunities_nodes_opportunity_metaData_specifications | null)[] | null;
  addenda: (opportunities_projectBasedOpportunities_nodes_opportunity_metaData_addenda | null)[] | null;
  aaeeo: string | null;
  importantNotice: string | null;
}

export interface opportunities_projectBasedOpportunities_nodes_opportunity {
  __typename: "ProjectBasedOpportunity_Opportunity";
  title: string | null;
  contactInfo: opportunities_projectBasedOpportunities_nodes_opportunity_contactInfo | null;
  dataFields: opportunities_projectBasedOpportunities_nodes_opportunity_dataFields | null;
  metaData: opportunities_projectBasedOpportunities_nodes_opportunity_metaData | null;
}

export interface opportunities_projectBasedOpportunities_nodes {
  __typename: "ProjectBasedOpportunity";
  /**
   * The unique resource identifier path
   */
  databaseId: number;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Opportunity&quot; was set to Show in GraphQL.
   */
  opportunity: opportunities_projectBasedOpportunities_nodes_opportunity | null;
}

export interface opportunities_projectBasedOpportunities {
  __typename: "RootQueryToProjectBasedOpportunityConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (opportunities_projectBasedOpportunities_nodes | null)[] | null;
}

export interface opportunities {
  /**
   * Connection between the RootQuery type and the OpportunityType type
   */
  opportunityTypes: opportunities_opportunityTypes | null;
  /**
   * Connection between the RootQuery type and the ProjectBasedOpportunity type
   */
  projectBasedOpportunities: opportunities_projectBasedOpportunities | null;
}
