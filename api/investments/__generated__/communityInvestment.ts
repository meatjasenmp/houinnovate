/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: communityInvestment
// ====================================================

export interface communityInvestment_communityInvestment_communityAndOpportunityPopUps_dataFields_dataField {
  __typename: "CommunityInvestment_Communityandopportunitypopups_dataFields_DataField";
  labelField: string | null;
  contentField: string | null;
}

export interface communityInvestment_communityInvestment_communityAndOpportunityPopUps_dataFields {
  __typename: "CommunityInvestment_Communityandopportunitypopups_dataFields";
  dataField: communityInvestment_communityInvestment_communityAndOpportunityPopUps_dataFields_dataField | null;
}

export interface communityInvestment_communityInvestment_communityAndOpportunityPopUps_contentBlocks {
  __typename: "CommunityInvestment_Communityandopportunitypopups_contentBlocks";
  content: string | null;
}

export interface communityInvestment_communityInvestment_communityAndOpportunityPopUps_progress_phases {
  __typename: "CommunityInvestment_Communityandopportunitypopups_Progress_Phases";
  phasePercentageType: string | null;
  opportunityPhases: string | null;
  investmentPhases: string | null;
}

export interface communityInvestment_communityInvestment_communityAndOpportunityPopUps_progress {
  __typename: "CommunityInvestment_Communityandopportunitypopups_Progress";
  showProgressLabel: boolean | null;
  progressLabel: string | null;
  committed: number | null;
  deployed: number | null;
  phases: communityInvestment_communityInvestment_communityAndOpportunityPopUps_progress_phases | null;
}

export interface communityInvestment_communityInvestment_communityAndOpportunityPopUps {
  __typename: "CommunityInvestment_Communityandopportunitypopups";
  alphanumericLabel: string | null;
  dataFields: (communityInvestment_communityInvestment_communityAndOpportunityPopUps_dataFields | null)[] | null;
  contentBlocks: (communityInvestment_communityInvestment_communityAndOpportunityPopUps_contentBlocks | null)[] | null;
  progress: communityInvestment_communityInvestment_communityAndOpportunityPopUps_progress | null;
}

export interface communityInvestment_communityInvestment {
  __typename: "CommunityInvestment";
  /**
   * The unique identifier stored in the database
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
   * Added to the GraphQL Schema because the ACF Field Group &quot;Community and Opportunity Pop Ups&quot; was set to Show in GraphQL.
   */
  communityAndOpportunityPopUps: communityInvestment_communityInvestment_communityAndOpportunityPopUps | null;
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
