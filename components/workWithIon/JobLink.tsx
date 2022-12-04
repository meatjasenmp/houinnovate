import React, { useEffect, useRef } from "react";
import ArrowLinkIcon from "../ArrowLinkIcon";
import styles from "../../styles/components/JobLink.module.css";
import { gsap } from "gsap";
import { ModalType } from "../helpers";
import { allOpportunities_iONJobs_edges } from "../../api/jobs/__generated__/allOpportunities";

interface JobLinkProps {
  job: allOpportunities_iONJobs_edges;
  index: number;
  setCurrentID: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JobLink = ({
  job,
  index,
  setCurrentID,
  setIsOpen,
}: JobLinkProps) => {
  const linkRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (linkRef.current) {
      const duration = 0.02;
      const hold = 0.01;
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          delay: duration * index + hold * index,
          scrollTrigger: {
            trigger: linkRef.current,
          },
        });
        tl.to(linkRef.current, { y: 0, opacity: 1 });
      }, linkRef.current);

      return () => {
        ctx.revert();
      };
    }
  }, [job]);

  if (!job) return <></>;
  const { title, databaseId, slug } = job.node;

  const handleClick = () => {
    setCurrentID(databaseId);
    setIsOpen(true);
    history.pushState(
      null,
      "",
      `/?job=${slug}&modalType=${ModalType.JOB}&id=${databaseId}`
    );
  };

  return (
    <button
      onClick={handleClick}
      ref={linkRef}
      className={[
        "w-full flex translate-y-3 opacity-0 justify-between items-center bg-innovate-tan font-kraftigBold text-xl p-3.5 mb-1.5 last:mb-0",
        styles.job_link,
      ].join(" ")}
    >
      <span>{title}</span>
      <figure className="w-8">
        <ArrowLinkIcon />
      </figure>
    </button>
  );
};

export default JobLink;
