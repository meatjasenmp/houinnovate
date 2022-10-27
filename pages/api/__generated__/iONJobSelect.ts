/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: iONJobSelect
// ====================================================

export interface iONJobSelect_iONJobs_edges_node_jobPosting_metaData_jobType {
  __typename: "JobCategory";
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string | null;
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface iONJobSelect_iONJobs_edges_node_jobPosting_metaData {
  __typename: "IONJob_Jobposting_MetaData";
  jobType: iONJobSelect_iONJobs_edges_node_jobPosting_metaData_jobType | null;
}

export interface iONJobSelect_iONJobs_edges_node_jobPosting {
  __typename: "IONJob_Jobposting";
  metaData: iONJobSelect_iONJobs_edges_node_jobPosting_metaData | null;
}

export interface iONJobSelect_iONJobs_edges_node {
  __typename: "IONJob";
  /**
   * The unique resource identifier path
   */
  databaseId: number;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Job Posting&quot; was set to Show in GraphQL.
   */
  jobPosting: iONJobSelect_iONJobs_edges_node_jobPosting | null;
}

export interface iONJobSelect_iONJobs_edges {
  __typename: "RootQueryToIONJobConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: iONJobSelect_iONJobs_edges_node | null;
}

export interface iONJobSelect_iONJobs {
  __typename: "RootQueryToIONJobConnection";
  /**
   * Edges for the RootQueryToIONJobConnection connection
   */
  edges: (iONJobSelect_iONJobs_edges | null)[] | null;
}

export interface iONJobSelect {
  /**
   * Connection between the RootQuery type and the IONJob type
   */
  iONJobs: iONJobSelect_iONJobs | null;
}
