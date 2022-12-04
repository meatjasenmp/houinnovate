/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allOpportunities
// ====================================================

export interface allOpportunities_iONJobs_pageInfo {
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

export interface allOpportunities_iONJobs_edges_node {
  __typename: "IONJob";
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
}

export interface allOpportunities_iONJobs_edges {
  __typename: "RootQueryToIONJobConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: allOpportunities_iONJobs_edges_node;
}

export interface allOpportunities_iONJobs {
  __typename: "RootQueryToIONJobConnection";
  /**
   * Information about pagination in a connection.
   */
  pageInfo: allOpportunities_iONJobs_pageInfo | null;
  /**
   * Edges for the RootQueryToIONJobConnection connection
   */
  edges: allOpportunities_iONJobs_edges[];
}

export interface allOpportunities {
  /**
   * Connection between the RootQuery type and the IONJob type
   */
  iONJobs: allOpportunities_iONJobs | null;
}

export interface allOpportunitiesVariables {
  first?: number | null;
  after?: string | null;
}
