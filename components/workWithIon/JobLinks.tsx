import React, { useEffect, useState } from "react";
import {
  useJobOpportunities,
  useJobOpportunitiesByCategory,
} from "../../pages/api/opportunities";
import { allOpportunities } from "../../pages/api/__generated__/allOpportunities";
import styles from "../../styles/components/JobLink.module.css";
import JobLink from "./JobLink";

export interface Opportunity {
  databaseId: number;
  title: string | null;
}

const JobLinks = () => {
  const { data, loading, error, fetchMore } = useJobOpportunities();

  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [showLoadLoader, setShowLoader] = useState<boolean>(false);

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

  if (loading || error) return <></>;

  const { pageInfo } = data?.iONJobs;

  const Loading = () => {
    if (showLoadLoader) {
      return (
        <div className={styles.spinner}>
          <p>Loading...</p>
        </div>
      );
    }
    return <></>;
  };

  const ShowMoreButton = () => {
    if (pageInfo?.hasNextPage) {
      return (
        <div className={styles.show_more}>
          <button
            className={styles.showMoreButton}
            onClick={() => {
              setShowLoader(true);
              fetchMore({
                variables: {
                  first: 5,
                  after: data?.iONJobs?.pageInfo?.endCursor,
                },
              })
                .then((res) => {
                  if (res?.data?.iONJobs?.edges) {
                    setShowLoader(false);
                  }
                })
                .catch((err) => {
                  console.error(err);
                });
            }}
          >
            Show More
          </button>
        </div>
      );
    }
    return <></>;
  };

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
      <ShowMoreButton />
    </section>
  );
};

export default JobLinks;
