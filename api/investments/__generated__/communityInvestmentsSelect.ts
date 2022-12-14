/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: communityInvestmentsSelect
// ====================================================

export interface communityInvestmentsSelect_communityInvestments_edges_node_communityAndOpportunityPopUps_type {
  __typename: "CommunityInvestmentType";
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

export interface communityInvestmentsSelect_communityInvestments_edges_node_communityAndOpportunityPopUps_progress {
  __typename: "CommunityInvestment_Communityandopportunitypopups_Progress";
  progressLabel: string | null;
  showProgressLabel: boolean | null;
  committed: number | null;
  deployed: number | null;
  currentPhase: string | null;
  progressPercentage: number | null;
}

export interface communityInvestmentsSelect_communityInvestments_edges_node_communityAndOpportunityPopUps {
  __typename: "CommunityInvestment_Communityandopportunitypopups";
  alphanumericLabel: string | null;
  type: communityInvestmentsSelect_communityInvestments_edges_node_communityAndOpportunityPopUps_type | null;
  progress: communityInvestmentsSelect_communityInvestments_edges_node_communityAndOpportunityPopUps_progress | null;
}

export interface communityInvestmentsSelect_communityInvestments_edges_node {
  __typename: "CommunityInvestment";
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
  communityAndOpportunityPopUps: communityInvestmentsSelect_communityInvestments_edges_node_communityAndOpportunityPopUps | null;
}

export interface communityInvestmentsSelect_communityInvestments_edges {
  __typename: "RootQueryToCommunityInvestmentConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: communityInvestmentsSelect_communityInvestments_edges_node | null;
}

export interface communityInvestmentsSelect_communityInvestments {
  __typename: "RootQueryToCommunityInvestmentConnection";
  /**
   * Edges for the RootQueryToCommunityInvestmentConnection connection
   */
  edges: (communityInvestmentsSelect_communityInvestments_edges | null)[] | null;
}

export interface communityInvestmentsSelect {
  /**
   * Connection between the RootQuery type and the CommunityInvestment type
   */
  communityInvestments: communityInvestmentsSelect_communityInvestments | null;
}
