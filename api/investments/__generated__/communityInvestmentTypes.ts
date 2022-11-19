/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: communityInvestmentTypes
// ====================================================

export interface communityInvestmentTypes_communityInvestmentTypes_edges_node_pages_nodes {
  __typename: "CommunityInvestment";
  /**
   * The globally unique identifier of the community_investment object.
   */
  id: string;
}

export interface communityInvestmentTypes_communityInvestmentTypes_edges_node_pages {
  __typename: "CommunityInvestmentTypeToCommunityInvestmentConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (communityInvestmentTypes_communityInvestmentTypes_edges_node_pages_nodes | null)[] | null;
}

export interface communityInvestmentTypes_communityInvestmentTypes_edges_node {
  __typename: "CommunityInvestmentType";
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
  /**
   * Connection between the CommunityInvestmentType type and the CommunityInvestment type
   */
  pages: communityInvestmentTypes_communityInvestmentTypes_edges_node_pages | null;
}

export interface communityInvestmentTypes_communityInvestmentTypes_edges {
  __typename: "RootQueryToCommunityInvestmentTypeConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: communityInvestmentTypes_communityInvestmentTypes_edges_node | null;
}

export interface communityInvestmentTypes_communityInvestmentTypes {
  __typename: "RootQueryToCommunityInvestmentTypeConnection";
  /**
   * Edges for the RootQueryToCommunityInvestmentTypeConnection connection
   */
  edges: (communityInvestmentTypes_communityInvestmentTypes_edges | null)[] | null;
}

export interface communityInvestmentTypes {
  /**
   * Connection between the RootQuery type and the CommunityInvestmentType type
   */
  communityInvestmentTypes: communityInvestmentTypes_communityInvestmentTypes | null;
}
