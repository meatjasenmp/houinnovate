/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: opportunityTypes
// ====================================================

export interface opportunityTypes_opportunityTypes_edges_node_pages_nodes {
  __typename: "ProjectBasedOpportunity";
  /**
   * The globally unique identifier of the projects object.
   */
  id: string;
}

export interface opportunityTypes_opportunityTypes_edges_node_pages {
  __typename: "OpportunityTypeToProjectBasedOpportunityConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: opportunityTypes_opportunityTypes_edges_node_pages_nodes[];
}

export interface opportunityTypes_opportunityTypes_edges_node {
  __typename: "OpportunityType";
  /**
   * The unique identifier stored in the database
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
   * Connection between the OpportunityType type and the ProjectBasedOpportunity type
   */
  pages: opportunityTypes_opportunityTypes_edges_node_pages | null;
}

export interface opportunityTypes_opportunityTypes_edges {
  __typename: "RootQueryToOpportunityTypeConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: opportunityTypes_opportunityTypes_edges_node;
}

export interface opportunityTypes_opportunityTypes {
  __typename: "RootQueryToOpportunityTypeConnection";
  /**
   * Edges for the RootQueryToOpportunityTypeConnection connection
   */
  edges: opportunityTypes_opportunityTypes_edges[];
}

export interface opportunityTypes {
  /**
   * Connection between the RootQuery type and the OpportunityType type
   */
  opportunityTypes: opportunityTypes_opportunityTypes | null;
}
