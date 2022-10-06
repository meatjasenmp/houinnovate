/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: communityInvestmentsSelect
// ====================================================

export interface communityInvestmentsSelect_communityInvestmentTypes_edges_node {
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
}

export interface communityInvestmentsSelect_communityInvestmentTypes_edges {
  __typename: "RootQueryToCommunityInvestmentTypeConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: communityInvestmentsSelect_communityInvestmentTypes_edges_node | null;
}

export interface communityInvestmentsSelect_communityInvestmentTypes {
  __typename: "RootQueryToCommunityInvestmentTypeConnection";
  /**
   * Edges for the RootQueryToCommunityInvestmentTypeConnection connection
   */
  edges: (communityInvestmentsSelect_communityInvestmentTypes_edges | null)[] | null;
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
   * Connection between the RootQuery type and the CommunityInvestmentType type
   */
  communityInvestmentTypes: communityInvestmentsSelect_communityInvestmentTypes | null;
  /**
   * Connection between the RootQuery type and the CommunityInvestment type
   */
  communityInvestments: communityInvestmentsSelect_communityInvestments | null;
}