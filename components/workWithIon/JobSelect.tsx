import { useJobCategories } from "../../pages/api/job_categories";
import {
  useJobOpportunities,
  useJobOpportunitiesByCategory,
} from "../../pages/api/opportunities";
import React, { useEffect, useState } from "react";
import SelectComponentTwo from "../SelectComponentTwo";
import { Options } from "../helpers";
import { jobCategories } from "../../pages/api/__generated__/jobCategories";
import JobLinks from "./JobLinks";
import styles from "../../styles/components/JobLink.module.css";
import { allOpportunities } from "../../pages/api/__generated__/allOpportunities";

const JobSelect = () => {
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [showLoadLoader, setShowLoader] = useState<boolean>(false);
  const [opportunities, setOpportunities] = useState<
    allOpportunities | undefined
  >();
  const [currentCategory, setCurrentCategory] = useState<
    string | null | undefined
  >();

  const { data, loading, error } = useJobCategories();
  const {
    data: opportunitiesData,
    loading: opportunitiesLoading,
    error: opportunitiesError,
    fetchMore,
  } = useJobOpportunities();

  const {
    data: opportunitiesByCategoryData,
    loading: opportunitiesByCategoryLoading,
    error: opportunitiesByCategoryError,
    getOpportunities,
  } = useJobOpportunitiesByCategory(String(currentCategory));

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

  useEffect(() => {
    if (opportunitiesData) {
      setOpportunities(opportunitiesData);
    }
  }, [opportunitiesData]);

  useEffect(() => {
    if (opportunitiesByCategoryData) {
      setOpportunities(opportunitiesByCategoryData);
    }
  }, [opportunitiesByCategoryData]);

  useEffect(() => {
    if (currentCategory !== "all") {
      getOpportunities().then((data) => {
        setOpportunities(data.data);
      });
      return;
    }
  }, [currentCategory]);

  if (loading || error) return <></>;

  const { pageInfo } = opportunitiesData?.iONJobs || {};

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
        <>
          <div className={styles.show_more}>
            <button
              className={styles.showMoreButton}
              onClick={() => {
                setShowLoader(true);
                fetchMore({
                  variables: {
                    first: 5,
                    after: opportunitiesData?.iONJobs?.pageInfo?.endCursor,
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
          <Loading />
        </>
      );
    }
    return <></>;
  };

  return (
    <section>
      <SelectComponentTwo
        options={opportunityCategories}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        setCategory={setCurrentCategory}
      />
      {opportunitiesLoading || opportunitiesError ? (
        <Loading />
      ) : (
        <>
          <JobLinks data={opportunities} />
          <ShowMoreButton />
        </>
      )}
    </section>
  );
};

export default JobSelect;
