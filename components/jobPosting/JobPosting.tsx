import React from "react";
import { useRouter } from "next/router";
import useJob from "../../pages/api/job";
import ContentEditor from "../ContentEditor";
import { BiArrowToTop } from "@react-icons/all-files/bi/BiArrowToTop";
import { formatPostDate } from "../helpers";

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
    dataFields: iONJobs_iONJob_jobPosting_dataFields | null | undefined;
  };
}

interface JobContentProps {
  data: {
    metaData: iONJobs_iONJob_jobPosting_metaData | null | undefined;
  };
}

const handleShareButton = (url: string | null | undefined) => {
  if (!url) return;
  return navigator.clipboard.writeText(url);
};

const ShareButton = () => {
  const router = useRouter();
  const path = router.asPath;
  return (
    <button
      className={styles.shareButton}
      onClick={() => handleShareButton(path)}
    >
      <h4>Share</h4>
      <BiArrowToTop size="1.5rem" />
    </button>
  );
};

const Sidebar = ({ data }: SidebarProps) => {
  const { title, postDate, contact, dataFields, jobCTA } = data;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <h2 className={styles.sidebar__title}>{title}</h2>
        <section className={styles.jobCTA}>
          <ContentEditor content={jobCTA} />
        </section>
        <p className={styles.sidebar__date}>
          Posted {formatPostDate(postDate)}
        </p>
        {contact && (
          <section className={styles.jobContact}>
            <ul>
              <li>{contact.name}</li>
              <li>{contact?.title}</li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>{contact.phone}</li>
            </ul>
          </section>
        )}
        {dataFields && (
          <section className={styles.jobDataFields}>
            <ul>
              {dataFields.dataField?.map((field, id) => (
                <div className={styles.jobDataField} key={id}>
                  <h5>{field?.labelField}</h5>
                  <p>{field?.contentField}</p>
                </div>
              ))}
            </ul>
          </section>
        )}
        <ShareButton />
      </div>
    </aside>
  );
};

const JobContent = ({ data }: JobContentProps) => {
  const { metaData } = data;
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
          dataFields: jobPosting?.dataFields,
        }}
      />
      <JobContent
        data={{
          metaData: jobPosting?.metaData,
        }}
      />
      <ImportantNotice siteOptions={opportunityImportantNotice} />
    </section>
  );
};

export default JobPosting;
