import SelectComponent from "./SelectComponent";
import { Options, optionSelectItems } from "./helpers";
import { useJobSelect } from "../pages/api/job_select";
import { iONJobSelect_iONJobs_edges } from "../pages/api/__generated__/iONJobSelect";
import JobLink from "./JobLink";

import { useEffect, useState } from "react";
import styles from "../styles/components/JobLink.module.css";

const JobSelect = () => {
  const { data, loading, error, fetchMore } = useJobSelect(5);
  const [selectedOptions, setSelectedOptions] = useState<
    Options[] | null | undefined
  >();

  const [selectedOption, setSelectedOption] = useState<Options | null>();

  const [selectedJobs, setSelectedJobs] = useState<
    (iONJobSelect_iONJobs_edges | null)[] | null
  >();

  useEffect(() => {
    if (data?.iONJobs?.edges) {
      setSelectedJobs(data.iONJobs.edges);
    }
  }, [data]);

  if (loading || error || !data) return <></>;

  const { iONJobs } = data;

  const jobsArray: Options[] = [{ value: "all", label: "All Opportunities" }];

  iONJobs?.edges?.map((job) => {
    const { slug, name } = job?.node?.jobPosting?.metaData?.jobType || {};

    jobsArray.push({ value: slug, label: name });
  });

  const ShowMoreButton = () => {
    if (data?.iONJobs?.pageInfo?.hasNextPage) {
      return (
        <div className={styles.show_more}>
          <button
            className={styles.showMoreButton}
            onClick={() => {
              fetchMore({
                variables: {
                  after: data?.iONJobs?.pageInfo?.endCursor,
                  last: null,
                  before: null,
                },
              }).then((res) => {
                if (res?.data?.iONJobs?.edges) {
                  console.log(res.data.iONJobs.edges);
                }
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
      <div style={{ maxWidth: "1170px" }}>
        <SelectComponent
          options={optionSelectItems(jobsArray)}
          setSelectedOptions={setSelectedOptions}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
        <div className={styles.jobLinks_count}>
          {selectedJobs?.length}{" "}
          {selectedJobs?.length === 1 ? "Result" : "Results"}
        </div>
      </div>
      <div className={[styles.job_select__links, "job_select"].join(" ")}>
        {selectedJobs &&
          selectedJobs.map((job, index) => (
            <JobLink key={index} job={job?.node} />
          ))}
      </div>
      <ShowMoreButton />
    </section>
  );
};

export default JobSelect;
