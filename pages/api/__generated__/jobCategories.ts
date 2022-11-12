/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: jobCategories
// ====================================================

export interface jobCategories_jobCategories_pageInfo {
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
   * Information about pagination in a connection.
   */
  pageInfo: jobCategories_jobCategories_pageInfo | null;
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
