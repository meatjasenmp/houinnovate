import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useJob from "../../api/jobs/job";
import ContentEditor from "../ContentEditor";
import { BiArrowToTop } from "@react-icons/all-files/bi/BiArrowToTop";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { formatPostDate } from "../helpers";
import toast from "react-hot-toast";
import OpportunitySignUpForm from "../OpportnunitySignUpForm";
import Link from "next/link";

import {
  iONJobs_iONJob_jobPosting_contact,
  iONJobs_iONJob_jobPosting_dataFields,
  iONJobs_iONJob_jobPosting_metaData,
} from "../../api/__generated__/iONJobs";
import LoadingSpinner from "../LoadingSpinner";

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

const MARGIN_BOTTOM = "mb-6";
const HEADER = "font-kraftigBold mb-0";

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
        className="flex items-end"
        onClick={() => {
          handleShareButton(path);
          linkSavedNotification();
        }}
        data-tip="Link Copied"
        data-event="click"
      >
        <h4 className="mb-0">Share</h4>
        <BiArrowToTop size="2rem" />
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
    <>
      <div ref={contentWrapper}>
        <h1 className="mb-2">{title}</h1>
        <p className="text-xs">Posted {formatPostDate(postDate)}</p>
        <section className={MARGIN_BOTTOM}>
          <ContentEditor content={jobCTA} />
          {contact && (
            <ul>
              <li className="text-black">{contact.name}</li>
              <li className="text-black">{contact?.title}</li>
              <li className="text-innovate-smoke-gray">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="text-innovate-smoke-gray">{contact.phone}</li>
            </ul>
          )}
        </section>

        {dataFields && (
          <section className="mb-6">
            {dataFields.dataField?.map((field, id) => (
              <div className="mb-4 last:mb-0" key={id}>
                <h6 className={HEADER}>{field?.labelField}:</h6>
                <p className="text-sm">{field?.contentField}</p>
              </div>
            ))}
          </section>
        )}
        <ShareButton />
      </div>
    </>
  );
};

const JobContent = ({ data }: JobContentProps) => {
  const { metaData, aaEeo } = data;
  const { downloads, specifications, addenda } = metaData || {};

  return (
    <article>
      {metaData?.status && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Status:</h6>
          <p className="text-sm">{metaData?.status}</p>
        </section>
      )}

      {metaData?.solicitationNumber && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Solicitation Number:</h6>
          <p className="text-sm">{metaData?.solicitationNumber}</p>
        </section>
      )}

      {metaData?.opportunityOpensOn && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Opportunity Opens On:</h6>
          <p>{metaData?.opportunityOpensOn}</p>
        </section>
      )}

      {metaData?.opportunityClosesOn && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Opportunity Opens On:</h6>
          <p className="text-sm">{metaData?.opportunityClosesOn}</p>
        </section>
      )}

      {metaData?.jobType?.name && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Categories:</h6>
          <p className="text-sm">{metaData?.jobType?.name}</p>
        </section>
      )}

      {metaData?.description && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Description:</h6>
          <ContentEditor content={metaData?.description} />
        </section>
      )}

      {downloads && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Files</h6>
          <ul>
            {downloads.map((download, index) => (
              <li key={index}>
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                  href={String(download?.file?.mediaItemUrl)}
                >
                  {download?.downloadLabel}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {specifications && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Specifications</h6>
          <ul>
            {specifications.map((spec, index) => (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  href={String(spec?.specificationFile?.mediaItemUrl)}
                  className="underline"
                >
                  {spec?.specificationDownloadLabel}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {addenda && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>Addenda</h6>
          <ul>
            {addenda.map((add, index) => (
              <li key={index}>
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={String(add?.addendaFile?.mediaItemUrl)}
                  className="underline"
                >
                  {add?.addendaFileLabel}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {aaEeo && (
        <section className={MARGIN_BOTTOM}>
          <h6 className={HEADER}>AA/EEO</h6>
          <ContentEditor content={aaEeo} />
        </section>
      )}
    </article>
  );
};

const ImportantNotice = ({ importantNotice }: ImportantNoticeProps) => {
  if (!importantNotice) return <></>;
  return (
    <section className="border-t border-t-4 border-innovate-red pt-4">
      <ContentEditor content={importantNotice} />
    </section>
  );
};

const SignUpForm = ({ cta }: OpportunitySignUpFormProps) => {
  if (!cta) return <></>;
  return (
    <section className="my-6 bg-innovate-red p-6">
      <OpportunitySignUpForm cta={cta} />
    </section>
  );
};

const LoadingContainer = () => (
  <div className="flex flex-col h-screen items-center justify-center">
    <div className="w-8 h-8">
      <LoadingSpinner fill="#F54932" />
    </div>
  </div>
);

const JobPosting = ({ id }: { id: string }) => {
  const { data, loading, error } = useJob(id);

  if (loading || error) {
    return <LoadingContainer />;
  }

  const { siteOptionsPage, iONJob } = data || {};
  const { title, postDate, jobPosting } = iONJob || {};
  const {
    opportunityImportantNotice,
    jobOpportunityCta,
    aaEeo,
    opportunitySignupCta,
  } = siteOptionsPage?.opportunityPageOptions || {};

  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      <div className="mb-10">
        <Link
          href={{
            pathname: "/",
            query: { scrollTo: "work-with-ion" },
          }}
        >
          <a className="flex items-center">
            <FaArrowLeft size="1.5rem" color="#F54932" />
            <span className="ml-[.75rem] text-sm font-kraftigBold">
              Back to Job Opportunities
            </span>
          </a>
        </Link>
      </div>
      <section className="innovate-lg:flex innovate-lg:mt-32">
        <aside className="innovate-lg:w-2/5 innovate-lg:mr-4 flex-grow xl:w-1/2">
          <Sidebar
            data={{
              title: title,
              postDate: postDate,
              contact: jobPosting?.contact,
              jobCTA: jobOpportunityCta,
              dataFields: jobPosting?.dataFields,
            }}
          />
        </aside>
        <div className="border-t border-innovate-smoke-gray/25 mt-10 pt-10 innovate-lg:w-3/5 innovate-lg:border-0 innovate-lg:mt-0 innovate-lg:pt-0">
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
