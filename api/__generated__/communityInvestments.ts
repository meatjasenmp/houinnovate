/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: communityInvestments
// ====================================================

export interface communityInvestments_communityInvestments_edges_node_investment_dataFields_dataField {
  __typename: "CommunityInvestment_Investment_dataFields_DataField";
  labelField: string | null;
  contentField: string | null;
}

export interface communityInvestments_communityInvestments_edges_node_investment_dataFields {
  __typename: "CommunityInvestment_Investment_dataFields";
  dataField: communityInvestments_communityInvestments_edges_node_investment_dataFields_dataField | null;
}

export interface communityInvestments_communityInvestments_edges_node_investment_contentBlocks {
  __typename: "CommunityInvestment_Investment_contentBlocks";
  content: string | null;
}

export interface communityInvestments_communityInvestments_edges_node_investment_progress {
  __typename: "CommunityInvestment_Investment_Progress";
  progressLabel: string | null;
  committed: number | null;
  deployed: number | null;
}

export interface communityInvestments_communityInvestments_edges_node_investment {
  __typename: "CommunityInvestment_Investment";
  alphanumericLabel: string | null;
  header: string | null;
  dataFields: (communityInvestments_communityInvestments_edges_node_investment_dataFields | null)[] | null;
  contentBlocks: (communityInvestments_communityInvestments_edges_node_investment_contentBlocks | null)[] | null;
  reportingPhasePercentage: number | null;
  progress: communityInvestments_communityInvestments_edges_node_investment_progress | null;
}

export interface communityInvestments_communityInvestments_edges_node {
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
   * Added to the GraphQL Schema because the ACF Field Group &quot;Investment&quot; was set to Show in GraphQL.
   */
  investment: communityInvestments_communityInvestments_edges_node_investment | null;
}

export interface communityInvestments_communityInvestments_edges {
  __typename: "RootQueryToCommunityInvestmentConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: communityInvestments_communityInvestments_edges_node | null;
}

export interface communityInvestments_communityInvestments {
  __typename: "RootQueryToCommunityInvestmentConnection";
  /**
   * Edges for the RootQueryToCommunityInvestmentConnection connection
   */
  edges: (communityInvestments_communityInvestments_edges | null)[] | null;
}

export interface communityInvestments {
  /**
   * Connection between the RootQuery type and the CommunityInvestment type
   */
  communityInvestments: communityInvestments_communityInvestments | null;
}
