import {
  useJobOpportunities,
  useJobOpportunitiesByCategory,
} from "../../api/jobs/opportunities";
import React, { useEffect, useState } from "react";
import JobCategorySelect from "./JobCategorySelect";
import { Options } from "../helpers";
import JobLinks from "./JobLinks";
import ShowMoreButton from "../ShowMoreButton";
import { allOpportunities } from "../../api/opportunities/__generated__/allOpportunities";

const JobSelect = () => {
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [showLoadLoader, setShowLoader] = useState<boolean>(false);
  const [opportunities, setOpportunities] = useState<
    allOpportunities | undefined
  >();
  const [currentCategory, setCurrentCategory] = useState<
    (string | null)[] | null | undefined
  >();

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
  } = useJobOpportunitiesByCategory(currentCategory);

  useEffect(() => {
    if (opportunitiesData) {
      setOpportunities(opportunitiesData);
    }
  }, [opportunitiesData]);

  useEffect(() => {
    if (currentCategory && String(currentCategory) !== "all") {
      getOpportunities().then((data) => {
        setOpportunities(data.data);
      });
      return;
    }
    refetchOpportunities().then((data) => {
      setOpportunities(data.data);
    });
  }, [currentCategory]);

  const { pageInfo } = opportunitiesData?.iONJobs || {};
  const { pageInfo: categoryPageInfo } =
    opportunitiesByCategoryData?.iONJobs || {};

  const Loading = () => {
    if (showLoadLoader) {
      return (
        <div>
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

  const ShowMore = () => {
    if (categoryPageInfo?.hasNextPage && String(currentCategory) !== "all") {
      return (
        <>
          <div className="mt-4">
            <ShowMoreButton
              classNames="bg-innovate-red text-white"
              onClick={() => {
                handleLoadMoreByCategory();
              }}
            >
              Show More Jobs
            </ShowMoreButton>
          </div>
          <Loading />
        </>
      );
    }
    if (pageInfo?.hasNextPage && String(currentCategory) == "all") {
      return (
        <>
          <div className="mt-4">
            <ShowMoreButton
              onClick={() => {
                handleLoadMoreOpportunities();
              }}
              classNames="bg-innovate-red text-white"
            >
              Show More Jobs
            </ShowMoreButton>
          </div>
          <Loading />
        </>
      );
    }
    return <></>;
  };

  // TODO: Loading State & Error State

  return (
    <section>
      <JobCategorySelect
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        setCategory={setCurrentCategory}
      />
      {opportunitiesLoading || opportunitiesError ? (
        <Loading />
      ) : (
        <>
          <JobLinks data={opportunities} />
          <div className="mt-6">
            <ShowMore />
          </div>
        </>
      )}
    </section>
  );
};

export default JobSelect;
