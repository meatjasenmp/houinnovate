/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projectOpportunitiesSelect
// ====================================================

export interface projectOpportunitiesSelect_opportunityTypes_edges_node {
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

export interface projectOpportunitiesSelect_opportunityTypes_edges {
  __typename: "RootQueryToOpportunityTypeConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: projectOpportunitiesSelect_opportunityTypes_edges_node | null;
}

export interface projectOpportunitiesSelect_opportunityTypes {
  __typename: "RootQueryToOpportunityTypeConnection";
  /**
   * Edges for the RootQueryToOpportunityTypeConnection connection
   */
  edges: (projectOpportunitiesSelect_opportunityTypes_edges | null)[] | null;
}

export interface projectOpportunitiesSelect_projectBasedOpportunities_nodes {
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
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
}

export interface projectOpportunitiesSelect_projectBasedOpportunities {
  __typename: "RootQueryToProjectBasedOpportunityConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (projectOpportunitiesSelect_projectBasedOpportunities_nodes | null)[] | null;
}

export interface projectOpportunitiesSelect {
  /**
   * Connection between the RootQuery type and the OpportunityType type
   */
  opportunityTypes: projectOpportunitiesSelect_opportunityTypes | null;
  /**
   * Connection between the RootQuery type and the ProjectBasedOpportunity type
   */
  projectBasedOpportunities: projectOpportunitiesSelect_projectBasedOpportunities | null;
}
