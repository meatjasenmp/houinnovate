/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allInvestments
// ====================================================

export interface allInvestments_communityInvestments_pageInfo {
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

export interface allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_opportunityType {
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

export interface allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases {
  __typename: "CommunityInvestment_Communityandopportunitypopups_Progress_Phases";
  phasePercentageType: string | null;
  opportunityPhases: string | null;
  investmentPhases: string | null;
}

export interface allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress {
  __typename: "CommunityInvestment_Communityandopportunitypopups_Progress";
  progressLabel: string | null;
  showProgressLabel: boolean | null;
  committed: number | null;
  deployed: number | null;
  currentPhase: string | null;
  progressPercentage: number | null;
  phases: allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases | null;
}

export interface allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps {
  __typename: "CommunityInvestment_Communityandopportunitypopups";
  alphanumericLabel: string | null;
  opportunityType: allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_opportunityType | null;
  progress: allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress | null;
}

export interface allInvestments_communityInvestments_edges_node {
  __typename: "CommunityInvestment";
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
  communityAndOpportunityPopUps: allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps | null;
}

export interface allInvestments_communityInvestments_edges {
  __typename: "RootQueryToCommunityInvestmentConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: allInvestments_communityInvestments_edges_node;
}

export interface allInvestments_communityInvestments {
  __typename: "RootQueryToCommunityInvestmentConnection";
  /**
   * Information about pagination in a connection.
   */
  pageInfo: allInvestments_communityInvestments_pageInfo | null;
  /**
   * Edges for the RootQueryToCommunityInvestmentConnection connection
   */
  edges: allInvestments_communityInvestments_edges[];
}

export interface allInvestments {
  /**
   * Connection between the RootQuery type and the CommunityInvestment type
   */
  communityInvestments: allInvestments_communityInvestments | null;
}

export interface allInvestmentsVariables {
  first?: number | null;
  after?: string | null;
}
