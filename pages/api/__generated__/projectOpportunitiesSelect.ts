/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projectOpportunitiesSelect
// ====================================================

export interface projectOpportunitiesSelect_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_opportunityType {
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

export interface projectOpportunitiesSelect_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_Progress";
  progressLabel: string | null;
  showProgressLabel: boolean | null;
  committed: number | null;
  deployed: number | null;
  currentPhase: string | null;
}

export interface projectOpportunitiesSelect_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups";
  alphanumericLabel: string | null;
  opportunityType: projectOpportunitiesSelect_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_opportunityType | null;
  progress: projectOpportunitiesSelect_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress | null;
}

export interface projectOpportunitiesSelect_projectBasedOpportunities_edges_node {
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
   * Added to the GraphQL Schema because the ACF Field Group &quot;Community and Opportunity Pop Ups&quot; was set to Show in GraphQL.
   */
  communityAndOpportunityPopUps: projectOpportunitiesSelect_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps | null;
}

export interface projectOpportunitiesSelect_projectBasedOpportunities_edges {
  __typename: "RootQueryToProjectBasedOpportunityConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: projectOpportunitiesSelect_projectBasedOpportunities_edges_node | null;
}

export interface projectOpportunitiesSelect_projectBasedOpportunities {
  __typename: "RootQueryToProjectBasedOpportunityConnection";
  /**
   * Edges for the RootQueryToProjectBasedOpportunityConnection connection
   */
  edges: (projectOpportunitiesSelect_projectBasedOpportunities_edges | null)[] | null;
}

export interface projectOpportunitiesSelect {
  /**
   * Connection between the RootQuery type and the ProjectBasedOpportunity type
   */
  projectBasedOpportunities: projectOpportunitiesSelect_projectBasedOpportunities | null;
}
