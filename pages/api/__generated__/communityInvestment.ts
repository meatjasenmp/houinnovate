/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: communityInvestment
// ====================================================

export interface communityInvestment_communityInvestment_investment_dataFields_dataField {
  __typename: "CommunityInvestment_Investment_dataFields_DataField";
  labelField: string | null;
  contentField: string | null;
}

export interface communityInvestment_communityInvestment_investment_dataFields {
  __typename: "CommunityInvestment_Investment_dataFields";
  dataField: communityInvestment_communityInvestment_investment_dataFields_dataField | null;
}

export interface communityInvestment_communityInvestment_investment_contentBlocks {
  __typename: "CommunityInvestment_Investment_contentBlocks";
  content: string | null;
}

export interface communityInvestment_communityInvestment_investment_progress {
  __typename: "CommunityInvestment_Investment_Progress";
  progressLabel: string | null;
  committed: number | null;
  deployed: number | null;
}

export interface communityInvestment_communityInvestment_investment {
  __typename: "CommunityInvestment_Investment";
  alphanumericLabel: string | null;
  header: string | null;
  dataFields: (communityInvestment_communityInvestment_investment_dataFields | null)[] | null;
  contentBlocks: (communityInvestment_communityInvestment_investment_contentBlocks | null)[] | null;
  reportingPhasePercentage: number | null;
  progress: communityInvestment_communityInvestment_investment_progress | null;
}

export interface communityInvestment_communityInvestment {
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
  investment: communityInvestment_communityInvestment_investment | null;
}

export interface communityInvestment {
  /**
   * An object of the CommunityInvestment Type. 
   */
  communityInvestment: communityInvestment_communityInvestment | null;
}

export interface communityInvestmentVariables {
  id: string;
}
