/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: jobCategories
// ====================================================

export interface jobCategories_jobCategories_edges_node_iONJobs_nodes {
  __typename: "IONJob";
  /**
   * The globally unique identifier of the ion_jobs object.
   */
  id: string;
}

export interface jobCategories_jobCategories_edges_node_iONJobs {
  __typename: "JobCategoryToIONJobConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (jobCategories_jobCategories_edges_node_iONJobs_nodes | null)[] | null;
}

export interface jobCategories_jobCategories_edges_node {
  __typename: "JobCategory";
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
   * Connection between the JobCategory type and the IONJob type
   */
  iONJobs: jobCategories_jobCategories_edges_node_iONJobs | null;
}

export interface jobCategories_jobCategories_edges {
  __typename: "RootQueryToJobCategoryConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: jobCategories_jobCategories_edges_node | null;
}

export interface jobCategories_jobCategories {
  __typename: "RootQueryToJobCategoryConnection";
  /**
   * Edges for the RootQueryToJobCategoryConnection connection
   */
  edges: (jobCategories_jobCategories_edges | null)[] | null;
}

export interface jobCategories {
  /**
   * Connection between the RootQuery type and the JobCategory type
   */
  jobCategories: jobCategories_jobCategories | null;
}
