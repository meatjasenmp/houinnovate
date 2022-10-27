/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: iONJob
// ====================================================

export interface iONJob_iONJob_jobPosting_dataFields_dataField {
  __typename: "IONJob_Jobposting_DataFields_dataField";
  labelField: string | null;
  contentField: string | null;
}

export interface iONJob_iONJob_jobPosting_dataFields {
  __typename: "IONJob_Jobposting_DataFields";
  dataField: (iONJob_iONJob_jobPosting_dataFields_dataField | null)[] | null;
}

export interface iONJob_iONJob_jobPosting_metaData_jobType {
  __typename: "JobCategory";
  /**
   * The unique resource identifier path
   */
  id: string;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string | null;
}

export interface iONJob_iONJob_jobPosting_metaData_downloads_file {
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

export interface iONJob_iONJob_jobPosting_metaData_downloads {
  __typename: "IONJob_Jobposting_MetaData_downloads";
  downloadLabel: string | null;
  file: iONJob_iONJob_jobPosting_metaData_downloads_file | null;
}

export interface iONJob_iONJob_jobPosting_metaData_specifications_specificationFile {
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

export interface iONJob_iONJob_jobPosting_metaData_specifications {
  __typename: "IONJob_Jobposting_MetaData_specifications";
  specificationDownloadLabel: string | null;
  specificationFile: iONJob_iONJob_jobPosting_metaData_specifications_specificationFile | null;
}

export interface iONJob_iONJob_jobPosting_metaData_addenda_addendaFile {
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

export interface iONJob_iONJob_jobPosting_metaData_addenda {
  __typename: "IONJob_Jobposting_MetaData_addenda";
  addendaFileLabel: string | null;
  addendaFile: iONJob_iONJob_jobPosting_metaData_addenda_addendaFile | null;
}

export interface iONJob_iONJob_jobPosting_metaData {
  __typename: "IONJob_Jobposting_MetaData";
  status: string | null;
  solicitationNumber: string | null;
  opportunityOpensOn: string | null;
  opportunityClosesOn: string | null;
  department: string | null;
  jobType: iONJob_iONJob_jobPosting_metaData_jobType | null;
  description: string | null;
  downloads: (iONJob_iONJob_jobPosting_metaData_downloads | null)[] | null;
  specifications: (iONJob_iONJob_jobPosting_metaData_specifications | null)[] | null;
  addenda: (iONJob_iONJob_jobPosting_metaData_addenda | null)[] | null;
}

export interface iONJob_iONJob_jobPosting {
  __typename: "IONJob_Jobposting";
  title: string | null;
  dataFields: iONJob_iONJob_jobPosting_dataFields | null;
  metaData: iONJob_iONJob_jobPosting_metaData | null;
}

export interface iONJob_iONJob {
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
   * Added to the GraphQL Schema because the ACF Field Group &quot;Job Posting&quot; was set to Show in GraphQL.
   */
  jobPosting: iONJob_iONJob_jobPosting | null;
}

export interface iONJob_siteOptionsPage_opportunityPageOptions {
  __typename: "SiteOptionsPage_Opportunitypageoptions";
  opportunityImportantNotice: string | null;
}

export interface iONJob_siteOptionsPage {
  __typename: "SiteOptionsPage";
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Opportunity Page Options&quot; was set to Show in GraphQL.
   */
  opportunityPageOptions: iONJob_siteOptionsPage_opportunityPageOptions | null;
}

export interface iONJob {
  /**
   * An object of the IONJob Type. 
   */
  iONJob: iONJob_iONJob | null;
  /**
   * Site Options options.
   */
  siteOptionsPage: iONJob_siteOptionsPage | null;
}

export interface iONJobVariables {
  id: string;
}
