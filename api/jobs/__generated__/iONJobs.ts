/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: iONJobs
// ====================================================

export interface iONJobs_iONJob_jobPosting_contact {
  __typename: "IONJob_Jobposting_Contact";
  name: string | null;
  title: string | null;
  email: string | null;
  phone: string | null;
}

export interface iONJobs_iONJob_jobPosting_dataFields_dataField {
  __typename: "IONJob_Jobposting_DataFields_dataField";
  labelField: string | null;
  contentField: string | null;
}

export interface iONJobs_iONJob_jobPosting_dataFields {
  __typename: "IONJob_Jobposting_DataFields";
  dataField: (iONJobs_iONJob_jobPosting_dataFields_dataField | null)[] | null;
}

export interface iONJobs_iONJob_jobPosting_metaData_jobType {
  __typename: "JobCategory";
  /**
   * The unique resource identifier path
   */
  id: string;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string | null;
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface iONJobs_iONJob_jobPosting_metaData_downloads_file {
  __typename: "MediaItem";
  /**
   * The globally unique identifier of the attachment object.
   */
  id: string;
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
  /**
   * Alternative text to display when resource is not displayed
   */
  altText: string | null;
  /**
   * Description of the image (stored as post_content)
   */
  description: string | null;
}

export interface iONJobs_iONJob_jobPosting_metaData_downloads {
  __typename: "IONJob_Jobposting_MetaData_downloads";
  downloadLabel: string | null;
  file: iONJobs_iONJob_jobPosting_metaData_downloads_file | null;
}

export interface iONJobs_iONJob_jobPosting_metaData_specifications_specificationFile {
  __typename: "MediaItem";
  /**
   * The globally unique identifier of the attachment object.
   */
  id: string;
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
  /**
   * Alternative text to display when resource is not displayed
   */
  altText: string | null;
  /**
   * Description of the image (stored as post_content)
   */
  description: string | null;
}

export interface iONJobs_iONJob_jobPosting_metaData_specifications {
  __typename: "IONJob_Jobposting_MetaData_specifications";
  specificationDownloadLabel: string | null;
  specificationFile: iONJobs_iONJob_jobPosting_metaData_specifications_specificationFile | null;
}

export interface iONJobs_iONJob_jobPosting_metaData_addenda_addendaFile {
  __typename: "MediaItem";
  /**
   * The globally unique identifier of the attachment object.
   */
  id: string;
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
  /**
   * Alternative text to display when resource is not displayed
   */
  altText: string | null;
  /**
   * Description of the image (stored as post_content)
   */
  description: string | null;
}

export interface iONJobs_iONJob_jobPosting_metaData_addenda {
  __typename: "IONJob_Jobposting_MetaData_addenda";
  addendaFileLabel: string | null;
  addendaFile: iONJobs_iONJob_jobPosting_metaData_addenda_addendaFile | null;
}

export interface iONJobs_iONJob_jobPosting_metaData {
  __typename: "IONJob_Jobposting_MetaData";
  status: string | null;
  solicitationNumber: string | null;
  opportunityOpensOn: string | null;
  opportunityClosesOn: string | null;
  department: string | null;
  jobType: iONJobs_iONJob_jobPosting_metaData_jobType | null;
  description: string | null;
  downloads: (iONJobs_iONJob_jobPosting_metaData_downloads | null)[] | null;
  specifications: (iONJobs_iONJob_jobPosting_metaData_specifications | null)[] | null;
  addenda: (iONJobs_iONJob_jobPosting_metaData_addenda | null)[] | null;
}

export interface iONJobs_iONJob_jobPosting {
  __typename: "IONJob_Jobposting";
  title: string | null;
  contact: iONJobs_iONJob_jobPosting_contact | null;
  dataFields: iONJobs_iONJob_jobPosting_dataFields | null;
  metaData: iONJobs_iONJob_jobPosting_metaData | null;
}

export interface iONJobs_iONJob {
  __typename: "IONJob";
  /**
   * The globally unique identifier of the ion_jobs object.
   */
  id: string;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * Post publishing date.
   */
  postDate: string | null;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Job Posting&quot; was set to Show in GraphQL.
   */
  jobPosting: iONJobs_iONJob_jobPosting | null;
}

export interface iONJobs_siteOptionsPage_opportunityPageOptions {
  __typename: "SiteOptionsPage_Opportunitypageoptions";
  opportunityImportantNotice: string | null;
  jobOpportunityCta: string | null;
  aaEeo: string | null;
  opportunitySignupCta: string | null;
}

export interface iONJobs_siteOptionsPage {
  __typename: "SiteOptionsPage";
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Opportunity Page Options&quot; was set to Show in GraphQL.
   */
  opportunityPageOptions: iONJobs_siteOptionsPage_opportunityPageOptions | null;
}

export interface iONJobs {
  /**
   * An object of the IONJob Type. 
   */
  iONJob: iONJobs_iONJob | null;
  /**
   * Site Options options.
   */
  siteOptionsPage: iONJobs_siteOptionsPage | null;
}

export interface iONJobsVariables {
  id: string;
}
