import React, { useEffect, useState } from "react";
import { allOpportunities } from "../../api/opportunities/__generated__/allOpportunities";
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
      <div className="mt-2.5 flex justify-end">
        {opportunities?.length}{" "}
        {opportunities?.length === 1 ? "Result" : "Results"}
      </div>
      <div className="max-w-[1170px] mt-6">
        {opportunities &&
          opportunities.map((job, index) => (
            <JobLink key={index} job={job} index={index} />
          ))}
      </div>
    </section>
  );
};

export default JobLinks;
