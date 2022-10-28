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
  importantNotice: string | null | undefined;
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
  const { downloads, specifications, addenda } = metaData || {};
  return (
    <article className={styles.jobPost}>
      <section className={styles.status}>
        <h5>Status:</h5>
        <p>{metaData?.status}</p>
      </section>

      <section className={styles.solicitation}>
        <h5>Solicitation Number:</h5>
        <p>{metaData?.solicitationNumber}</p>
      </section>

      <section className={styles.opportunityOpen}>
        <h5>Opportunity Opens On:</h5>
        <p>{metaData?.opportunityOpensOn}</p>
      </section>

      <section className={styles.opportunityClosed}>
        <h5>Opportunity Opens On:</h5>
        <p>{metaData?.opportunityClosesOn}</p>
      </section>

      <section className={styles.categories}>
        <h5>Categories:</h5>
        <p>{metaData?.jobType?.name}</p>
      </section>

      <section className={styles.description}>
        <h5>Description:</h5>
        <ContentEditor content={metaData?.description} />
      </section>

      <section className={styles.files}>
        <h5>Files:</h5>
        <ul className={styles.downloads}>
          {downloads &&
            downloads.map((download, index) => (
              <li key={index}>
                <a key={index} href={String(download?.file?.mediaItemUrl)}>
                  {download?.downloadLabel}
                </a>
              </li>
            ))}
        </ul>
      </section>

      <section className={styles.specifications}>
        <h5>Specifications:</h5>
        <ul className={styles.downloads}>
          {specifications &&
            specifications.map((spec, index) => (
              <li key={index}>
                <a
                  key={index}
                  href={String(spec?.specificationFile?.mediaItemUrl)}
                >
                  {spec?.specificationDownloadLabel}
                </a>
              </li>
            ))}
        </ul>
      </section>

      <section className={styles.addenda}>
        <h5>Addenda:</h5>
        <ul className={styles.downloads}>
          {addenda &&
            addenda.map((add, index) => (
              <li key={index}>
                <a key={index} href={String(add?.addendaFile?.mediaItemUrl)}>
                  {add?.addendaFileLabel}
                </a>
              </li>
            ))}
        </ul>
      </section>
    </article>
  );
};

const ImportantNotice = ({ importantNotice }: ImportantNoticeProps) => {
  return (
    <section className={styles.importantNotice}>
      <ContentEditor content={importantNotice} />
    </section>
  );
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
      <div className={styles.jobPostContainer}>
        <JobContent
          data={{
            metaData: jobPosting?.metaData,
          }}
        />
        <ImportantNotice importantNotice={opportunityImportantNotice} />
      </div>
    </section>
  );
};

export default JobPosting;
