import Link from "next/link";
import { Opportunity } from "./JobLinks";
import React from "react";
import ArrowLinkIcon from "../ArrowLinkIcon";

interface JobLinkProps {
  job: Opportunity;
}

export const JobLink = ({ job }: JobLinkProps) => {
  if (!job) return <></>;
  const { title, databaseId } = job;
  return (
    <Link
      href={{ pathname: `/jobs/${databaseId}`, query: { pageTitle: title } }}
    >
      <a className="flex justify-between items-center bg-innovate-tan font-kraftigBold text-xl p-3.5 mb-1.5 last:mb-0">
        <span>{title}</span>
        <figure className="w-8">
          <ArrowLinkIcon />
        </figure>
      </a>
    </Link>
  );
};

export default JobLink;
