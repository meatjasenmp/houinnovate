/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: investmentsByCategory
// ====================================================

export interface investmentsByCategory_communityInvestments_pageInfo {
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

export interface investmentsByCategory_communityInvestments_edges_node_communityAndOpportunityPopUps_opportunityType {
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

export interface investmentsByCategory_communityInvestments_edges_node_communityAndOpportunityPopUps_progress {
  __typename: "CommunityInvestment_Communityandopportunitypopups_Progress";
  progressLabel: string | null;
  showProgressLabel: boolean | null;
  committed: number | null;
  deployed: number | null;
  currentPhase: string | null;
  progressPercentage: number | null;
}

export interface investmentsByCategory_communityInvestments_edges_node_communityAndOpportunityPopUps {
  __typename: "CommunityInvestment_Communityandopportunitypopups";
  alphanumericLabel: string | null;
  opportunityType: investmentsByCategory_communityInvestments_edges_node_communityAndOpportunityPopUps_opportunityType | null;
  progress: investmentsByCategory_communityInvestments_edges_node_communityAndOpportunityPopUps_progress | null;
}

export interface investmentsByCategory_communityInvestments_edges_node {
  __typename: "CommunityInvestment";
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The unique resource identifier path
   */
  databaseId: number;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Community and Opportunity Pop Ups&quot; was set to Show in GraphQL.
   */
  communityAndOpportunityPopUps: investmentsByCategory_communityInvestments_edges_node_communityAndOpportunityPopUps | null;
}

export interface investmentsByCategory_communityInvestments_edges {
  __typename: "RootQueryToCommunityInvestmentConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: investmentsByCategory_communityInvestments_edges_node | null;
}

export interface investmentsByCategory_communityInvestments {
  __typename: "RootQueryToCommunityInvestmentConnection";
  /**
   * Information about pagination in a connection.
   */
  pageInfo: investmentsByCategory_communityInvestments_pageInfo | null;
  /**
   * Edges for the RootQueryToCommunityInvestmentConnection connection
   */
  edges: (investmentsByCategory_communityInvestments_edges | null)[] | null;
}

export interface investmentsByCategory {
  /**
   * Connection between the RootQuery type and the CommunityInvestment type
   */
  communityInvestments: investmentsByCategory_communityInvestments | null;
}

export interface investmentsByCategoryVariables {
  first?: number | null;
  after?: string | null;
  terms?: (string | null)[] | null;
}
