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
  const [selectOptions, setSelectOptions] = useState<Options[]>();
  const [opportunities, setOpportunities] = useState<
    allOpportunities | undefined
  >();
  const [currentCategory, setCurrentCategory] = useState<
    string | null | undefined
  >();

  const { data: categoriesData, loading, error } = useJobCategories();
  const {
    data: opportunitiesData,
    loading: opportunitiesLoading,
    error: opportunitiesError,
    fetchMore: fetchMoreOpportunities,
    refetch: refetchOpportunities,
  } = useJobOpportunities();

  const {
    getOpportunities,
    data: opportunitiesByCategoryData,
    fetchMore: fetchMoreByCategory,
  } = useJobOpportunitiesByCategory(String(currentCategory));

  const opportunityCategories: Options[] = [];

  const setCategories = (data: jobCategories) => {
    data?.jobCategories?.edges?.forEach((edge) => {
      if (edge?.node) {
        const { iONJobs } = edge.node;
        if (iONJobs?.nodes?.length && iONJobs.nodes.length > 0) {
          const { name, slug } = edge.node;
          opportunityCategories.push({
            value: slug,
            label: name,
          });
        }
      }
    });
    return opportunityCategories;
  };

  useEffect(() => {
    if (categoriesData) {
      opportunityCategories.push({ value: "all", label: "All Opportunities" });
      setSelectOptions(setCategories(categoriesData));
    }
  }, [categoriesData]);

  useEffect(() => {
    if (opportunitiesData) {
      setOpportunities(opportunitiesData);
    }
  }, [opportunitiesData]);

  useEffect(() => {
    if (currentCategory && currentCategory !== "all") {
      getOpportunities().then((data) => {
        setOpportunities(data.data);
      });
      return;
    }
    refetchOpportunities().then((data) => {
      setOpportunities(data.data);
    });
  }, [currentCategory]);

  if (loading || error) return <></>;

  const { pageInfo } = opportunitiesData?.iONJobs || {};
  const { pageInfo: categoryPageInfo } =
    opportunitiesByCategoryData?.iONJobs || {};

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

  const handleLoadMoreOpportunities = () => {
    setShowLoader(true);
    fetchMoreOpportunities({
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
  };

  const handleLoadMoreByCategory = () => {
    setShowLoader(true);
    fetchMoreByCategory({
      variables: {
        first: 5,
        after: opportunitiesByCategoryData?.iONJobs?.pageInfo?.endCursor,
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
  };

  const ShowMoreButton = () => {
    if (categoryPageInfo?.hasNextPage && currentCategory !== "all") {
      return (
        <>
          <div className={styles.show_more}>
            <button
              className={styles.showMoreButton}
              onClick={() => {
                handleLoadMoreByCategory();
              }}
            >
              Show More
            </button>
          </div>
          <Loading />
        </>
      );
    }
    if (pageInfo?.hasNextPage) {
      return (
        <>
          <div className={styles.show_more}>
            <button
              className={styles.showMoreButton}
              onClick={() => {
                handleLoadMoreOpportunities();
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
        options={selectOptions}
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
