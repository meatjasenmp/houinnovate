import { useJobCategories } from "../../pages/api/job_categories";
import { useEffect, useState } from "react";
import SelectComponentTwo from "../SelectComponentTwo";
import { Options } from "../helpers";
import { jobCategories } from "../../pages/api/__generated__/jobCategories";
import JobLinks from "./JobLinks";

const JobSelect = () => {
  const { data, loading, error } = useJobCategories();
  const [selectedOption, setSelectedOption] = useState<Options>();

  const opportunityCategories: Options[] = [];

  const setCategories = (data: jobCategories) => {
    data?.jobCategories?.edges?.forEach((edge) => {
      if (edge?.node) {
        const { name, slug } = edge.node;
        opportunityCategories.push({
          value: slug,
          label: name,
        });
      }
    });
  };

  useEffect(() => {
    if (data) {
      opportunityCategories.push({ value: "all", label: "All Opportunities" });
      setCategories(data);
    }
  }, [data, opportunityCategories]);

  if (loading || error) return <></>;

  return (
    <section>
      <SelectComponentTwo
        options={opportunityCategories}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <JobLinks />
    </section>
  );
};

export default JobSelect;
