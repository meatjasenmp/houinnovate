/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projectBasedOpportunity
// ====================================================

export interface projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_dataFields_dataField {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_dataFields_DataField";
  labelField: string | null;
  contentField: string | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_dataFields {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_dataFields";
  dataField: projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_dataFields_dataField | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_contentBlocks {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_contentBlocks";
  content: string | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_progress_phases {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_Progress_Phases";
  phasePercentageType: string | null;
  opportunityPhases: string | null;
  investmentPhases: string | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_progress {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups_Progress";
  showProgressLabel: boolean | null;
  progressLabel: string | null;
  committed: number | null;
  deployed: number | null;
  currentPhase: string | null;
  progressPercentage: number | null;
  phases: projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_progress_phases | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps {
  __typename: "ProjectBasedOpportunity_Communityandopportunitypopups";
  alphanumericLabel: string | null;
  dataFields: (projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_dataFields | null)[] | null;
  contentBlocks: (projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_contentBlocks | null)[] | null;
  progress: projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps_progress | null;
}

export interface projectBasedOpportunity_projectBasedOpportunity {
  __typename: "ProjectBasedOpportunity";
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
  communityAndOpportunityPopUps: projectBasedOpportunity_projectBasedOpportunity_communityAndOpportunityPopUps | null;
}

export interface projectBasedOpportunity {
  /**
   * An object of the ProjectBasedOpportunity Type. 
   */
  projectBasedOpportunity: projectBasedOpportunity_projectBasedOpportunity | null;
}

export interface projectBasedOpportunityVariables {
  id: string;
}
