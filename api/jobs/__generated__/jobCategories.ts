/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: jobCategories
// ====================================================

export interface jobCategories_jobCategories_edges_node_pages_nodes {
  __typename: "IONJob";
  /**
   * The globally unique identifier of the ion_jobs object.
   */
  id: string;
}

export interface jobCategories_jobCategories_edges_node_pages {
  __typename: "JobCategoryToIONJobConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: jobCategories_jobCategories_edges_node_pages_nodes[];
}

export interface jobCategories_jobCategories_edges_node {
  __typename: "JobCategory";
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
   * Connection between the JobCategory type and the IONJob type
   */
  pages: jobCategories_jobCategories_edges_node_pages | null;
}

export interface jobCategories_jobCategories_edges {
  __typename: "RootQueryToJobCategoryConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: jobCategories_jobCategories_edges_node;
}

export interface jobCategories_jobCategories {
  __typename: "RootQueryToJobCategoryConnection";
  /**
   * Edges for the RootQueryToJobCategoryConnection connection
   */
  edges: jobCategories_jobCategories_edges[];
}

export interface jobCategories {
  /**
   * Connection between the RootQuery type and the JobCategory type
   */
  jobCategories: jobCategories_jobCategories | null;
}
