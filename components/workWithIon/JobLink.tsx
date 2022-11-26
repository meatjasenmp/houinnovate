import Link from "next/link";
import { Opportunity } from "./JobLinks";
import React, { useEffect, useRef } from "react";
import ArrowLinkIcon from "../ArrowLinkIcon";

import { gsap } from "gsap";

interface JobLinkProps {
  job: Opportunity;
  index: number;
}

export const JobLink = ({ job, index }: JobLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (linkRef.current) {
      const duration = 0.1;
      const hold = 0.05;
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          delay: duration * index + hold * index,
          scrollTrigger: {
            trigger: linkRef.current,
          },
        });
        tl.from(linkRef.current, { y: 20, opacity: 0 });
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
        className="flex justify-between items-center bg-innovate-tan font-kraftigBold text-xl p-3.5 mb-1.5 last:mb-0"
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
