import Link from "next/link";
import { iONJobSelect_iONJobs_edges_node } from "../pages/api/__generated__/iONJobSelect";
import styles from "../styles/components/JobLink.module.css";
import React from "react";
import ArrowLinkIcon from "./ArrowLinkIcon";

interface JobLinkProps {
  job: iONJobSelect_iONJobs_edges_node | null | undefined;
}

export const JobLink = ({ job }: JobLinkProps) => {
  if (!job) return <></>;
  const { title, databaseId } = job;
  return (
    <Link
      href={{ pathname: `/jobs/${databaseId}`, query: { pageTitle: title } }}
    >
      <a className={styles.jobLink}>
        <span className={styles.jobLink_text}>{title}</span>
        <figure className={styles.job_link_arrow}>
          <ArrowLinkIcon />
        </figure>
      </a>
    </Link>
  );
};

export default JobLink;
