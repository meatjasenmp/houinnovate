/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projectOpportunitiesByCategory
// ====================================================

export interface projectOpportunitiesByCategory_projectBasedOpportunities_pageInfo {
  __typename: "WPPageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_opportunityType {
  __typename: "OpportunityType";
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

export interface projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_Progress_Phases";
  phasePercentageType: string | null;
  opportunityPhases: string | null;
  investmentPhases: string | null;
}

export interface projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_Progress";
  progressLabel: string | null;
  showProgressLabel: boolean | null;
  committed: number | null;
  deployed: number | null;
  phases: projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases | null;
}

export interface projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups";
  alphanumericLabel: string | null;
  opportunityType: projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_opportunityType | null;
  progress: projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress | null;
}

export interface projectOpportunitiesByCategory_projectBasedOpportunities_edges_node {
  __typename: "ProjectBasedOpportunity";
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The unique identifier stored in the database
   */
  databaseId: number;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Community and Opportunity Pop Ups&quot; was set to Show in GraphQL.
   */
  communityAndOpportunityPopUps: projectOpportunitiesByCategory_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps | null;
}

export interface projectOpportunitiesByCategory_projectBasedOpportunities_edges {
  __typename: "RootQueryToProjectBasedOpportunityConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: projectOpportunitiesByCategory_projectBasedOpportunities_edges_node;
}

export interface projectOpportunitiesByCategory_projectBasedOpportunities {
  __typename: "RootQueryToProjectBasedOpportunityConnection";
  /**
   * Information about pagination in a connection.
   */
  pageInfo: projectOpportunitiesByCategory_projectBasedOpportunities_pageInfo | null;
  /**
   * Edges for the RootQueryToProjectBasedOpportunityConnection connection
   */
  edges: projectOpportunitiesByCategory_projectBasedOpportunities_edges[];
}

export interface projectOpportunitiesByCategory {
  /**
   * Connection between the RootQuery type and the ProjectBasedOpportunity type
   */
  projectBasedOpportunities: projectOpportunitiesByCategory_projectBasedOpportunities | null;
}

export interface projectOpportunitiesByCategoryVariables {
  first?: number | null;
  after?: string | null;
  terms?: (string | null)[] | null;
}
