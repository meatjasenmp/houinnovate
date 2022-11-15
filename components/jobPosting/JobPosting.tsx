import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useJob from "../../pages/api/job";
import ContentEditor from "../ContentEditor";
import { BiArrowToTop } from "@react-icons/all-files/bi/BiArrowToTop";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { formatPostDate } from "../helpers";
import toast, { Toaster } from "react-hot-toast";
import OpportunitySignUpForm from "../OpportnunitySignUpForm";
import Link from "next/link";

import styles from "../../styles/components/JobPosting.module.css";
import {
  iONJobs_iONJob_jobPosting_contact,
  iONJobs_iONJob_jobPosting_dataFields,
  iONJobs_iONJob_jobPosting_metaData,
} from "../../pages/api/__generated__/iONJobs";

interface ImportantNoticeProps {
  importantNotice: string | null | undefined;
}

export interface OpportunitySignUpFormProps {
  cta: string | null | undefined;
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
    aaEeo: string | null | undefined;
  };
}

const linkSavedNotification = () => toast("Link copied to clipboard!");

const handleShareButton = (url: string | null | undefined) => {
  if (!url) return;
  return navigator.clipboard.writeText(url);
};

const ShareButton = () => {
  const router = useRouter();
  const path = `${window.location.origin}${router.asPath}`;
  return (
    <>
      <button
        className={styles.shareButton}
        onClick={() => {
          handleShareButton(path);
          linkSavedNotification();
        }}
        data-tip="Link Copied"
        data-event="click"
      >
        <h4>Share</h4>
        <BiArrowToTop />
      </button>
    </>
  );
};

const Sidebar = ({ data }: SidebarProps) => {
  const { title, postDate, contact, dataFields, jobCTA } = data;

  const contentWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentWrapper.current) {
      const content = contentWrapper.current;
      const headers = content.querySelectorAll("h1");

      headers.forEach((item) => {
        const headerItem = item as HTMLElement;
        const words = headerItem.innerText.split(" ");

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (i === 0) {
            headerItem.innerHTML = `<span class="underline text-underline-red">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-red">${word}</span>`;
          }
        }
      });
    }
  }, []);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__content} ref={contentWrapper}>
        <h1 className={styles.sidebar__title}>{title}</h1>
        <p className={styles.sidebar__date}>
          Posted {formatPostDate(postDate)}
        </p>
        <section className={styles.jobCTA}>
          <ContentEditor content={jobCTA} />
        </section>
        {contact && (
          <section className={styles.jobContact}>
            <ul>
              <li className="text-black">{contact.name}</li>
              <li className="text-black">{contact?.title}</li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>{contact.phone}</li>
            </ul>
          </section>
        )}
        {dataFields && (
          <section className={styles.jobDataFields}>
            {dataFields.dataField?.map((field, id) => (
              <div className={styles.jobDataField} key={id}>
                <h5>{field?.labelField}:</h5>
                <p>{field?.contentField}</p>
              </div>
            ))}
          </section>
        )}
        <ShareButton />
      </div>
    </aside>
  );
};

const JobContent = ({ data }: JobContentProps) => {
  const { metaData, aaEeo } = data;
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
        <h5>Files</h5>
        <ul className={styles.downloads}>
          {downloads &&
            downloads.map((download, index) => (
              <li key={index}>
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={String(download?.file?.mediaItemUrl)}
                >
                  {download?.downloadLabel}
                </a>
              </li>
            ))}
        </ul>
      </section>

      <section className={styles.specifications}>
        <h5>Specifications</h5>
        <ul className={styles.downloads}>
          {specifications &&
            specifications.map((spec, index) => (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noreferrer"
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
        <h5>Addenda</h5>
        <ul className={styles.downloads}>
          {addenda &&
            addenda.map((add, index) => (
              <li key={index}>
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={String(add?.addendaFile?.mediaItemUrl)}
                >
                  {add?.addendaFileLabel}
                </a>
              </li>
            ))}
        </ul>
      </section>

      <section className="styles aaEeo">
        <h5>AA/EEO</h5>
        <ContentEditor content={aaEeo} />
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

const SignUpForm = ({ cta }: OpportunitySignUpFormProps) => {
  return (
    <section>
      <OpportunitySignUpForm cta={cta} />
    </section>
  );
};

const JobPosting = ({ id }: { id: string }) => {
  const { data, loading, error } = useJob(id);

  if (!data || loading || error) return <></>;

  const { siteOptionsPage, iONJob } = data || {};
  const { title, postDate, jobPosting } = iONJob || {};
  const {
    opportunityImportantNotice,
    jobOpportunityCta,
    aaEeo,
    opportunitySignupCta,
  } = siteOptionsPage?.opportunityPageOptions || {};

  return (
    <div>
      <div className={styles.back_button}>
        <Link href="/">
          <a>
            <FaArrowLeft size="1.5rem" color="#F54932" />
            <span>Back to Job Opportunities</span>
          </a>
        </Link>
      </div>
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
              aaEeo: aaEeo,
            }}
          />
          <ImportantNotice importantNotice={opportunityImportantNotice} />
          <SignUpForm cta={opportunitySignupCta} />
        </div>
      </section>
    </div>
  );
};

export default JobPosting;
