import React from "react";
import useJob from "../../pages/api/job";

import styles from "../../styles/components/JobPosting.module.css";
import {
  iONJobs_iONJob_jobPosting_contact,
  iONJobs_iONJob_jobPosting_dataFields,
  iONJobs_iONJob_jobPosting_metaData,
} from "../../pages/api/__generated__/iONJobs";

interface ImportantNoticeProps {
  siteOptions: string | null | undefined;
}

interface SidebarProps {
  data: {
    title: string | null | undefined;
    postDate: string | null | undefined;
    contact: iONJobs_iONJob_jobPosting_contact | null | undefined;
    jobCTA: string | null | undefined;
  };
}

interface JobContentProps {
  data: {
    dataFields: iONJobs_iONJob_jobPosting_dataFields | null | undefined;
    metaData: iONJobs_iONJob_jobPosting_metaData | null | undefined;
  };
}

const Sidebar = ({ data }: SidebarProps) => {
  const { title, postDate, contact } = data;
  return <></>;
};

const JobContent = ({ data }: JobContentProps) => {
  const { dataFields, metaData } = data;
  return <></>;
};

const ImportantNotice = ({ siteOptions }: ImportantNoticeProps) => {
  if (!siteOptions) return <></>;
  return <></>;
};

const JobPosting = ({ id }: { id: string }) => {
  const { data, loading, error } = useJob(id);

  if (!data || loading || error) return <></>;

  const { siteOptionsPage, iONJob } = data || {};
  const { title, postDate, jobPosting } = iONJob || {};
  const { opportunityImportantNotice, jobOpportunityCta } =
    siteOptionsPage?.opportunityPageOptions || {};

  return (
    <section className={styles.job_posting}>
      <Sidebar
        data={{
          title: title,
          postDate: postDate,
          contact: jobPosting?.contact,
          jobCTA: jobOpportunityCta,
        }}
      />
      <JobContent
        data={{
          dataFields: jobPosting?.dataFields,
          metaData: jobPosting?.metaData,
        }}
      />
      <ImportantNotice siteOptions={opportunityImportantNotice} />
    </section>
  );
};

export default JobPosting;
