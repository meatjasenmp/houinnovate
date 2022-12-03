import Link from "next/link";
import { Opportunity } from "./JobLinks";
import React, { useEffect, useRef } from "react";
import ArrowLinkIcon from "../ArrowLinkIcon";
import styles from "../../styles/components/JobLink.module.css";
import { gsap } from "gsap";

interface JobLinkProps {
  job: Opportunity;
  index: number;
}

export const JobLink = ({ job, index }: JobLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

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
  const { title, databaseId } = job;
  return (
    <Link
      href={{ pathname: `/jobs/${databaseId}`, query: { pageTitle: title } }}
    >
      <a
        ref={linkRef}
        className={[
          "flex translate-y-3 opacity-0 justify-between items-center bg-innovate-tan font-kraftigBold text-xl p-3.5 mb-1.5 last:mb-0",
          styles.job_link,
        ].join(" ")}
      >
        <span>{title}</span>
        <figure className="w-8">
          <ArrowLinkIcon />
        </figure>
      </a>
    </Link>
  );
};

export default JobLink;
