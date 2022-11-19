import React, { useEffect, useState } from "react";
import { allOpportunities } from "../../api/opportunities/__generated__/allOpportunities";
import styles from "../../styles/components/JobLink.module.css";
import JobLink from "./JobLink";

export interface Opportunity {
  databaseId: number;
  title: string | null;
}

const JobLinks = ({ data }: { data: allOpportunities | undefined }) => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  const getOpportunities = (data: allOpportunities) => {
    const opportunities: Opportunity[] = [];
    data?.iONJobs?.edges?.forEach((edge) => {
      if (edge?.node) {
        const { title, databaseId } = edge.node;
        opportunities.push({
          title,
          databaseId,
        });
      }
    });
    return opportunities;
  };

  useEffect(() => {
    if (data) {
      setOpportunities(getOpportunities(data));
    }
  }, [data]);

  return (
    <section>
      <div className={styles.jobLinks_count}>
        {opportunities?.length}{" "}
        {opportunities?.length === 1 ? "Result" : "Results"}
      </div>
      <div className={[styles.job_select__links, "job_select"].join(" ")}>
        {opportunities &&
          opportunities.map((job, index) => <JobLink key={index} job={job} />)}
      </div>
    </section>
  );
};

export default JobLinks;
