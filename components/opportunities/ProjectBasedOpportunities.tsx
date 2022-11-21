import React, { useEffect, useRef, useState } from "react";
import ContentEditor from "../ContentEditor";
import ShowMoreButton from "../ShowMoreButton";
import CommittedDeployedProgressBar from "../CommittedDeployedProgressBar";
import OpportunityCategorySelect from "./OpportunityCategorySelect";
import OpportunityLink from "./OpportunityLink";
import Modal from "./Modal";
import {
  useOpportunities,
  useOpportunitiesByCategory,
} from "../../api/opportunities/opportunities";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities } from "../../api/__generated__/page";
import { Colors } from "../../styles/helpers";
import { Options } from "../helpers";
import { allProjectOpportunities } from "../../api/opportunities/__generated__/allProjectOpportunities";

interface ProjectBasedOpportunitiesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities;
}

const ProjectBasedOpportunities = ({
  blockContent,
}: ProjectBasedOpportunitiesProps) => {
  const contentWrapper = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [showLoadLoader, setShowLoader] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<
    (string | null)[] | null | undefined
  >();
  const [opportunities, setOpportunities] = useState<
    allProjectOpportunities | undefined
  >();
  const [currentID, setCurrentID] = useState<number | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    data: opportunitiesData,
    loading: opportunitiesLoading,
    error: opportunitiesError,
    fetchMore: fetchMoreOpportunities,
    refetch: refetchOpportunities,
  } = useOpportunities();

  const {
    getOpportunities,
    data: opportunitiesByCategoryData,
    fetchMore: fetchMoreByCategory,
  } = useOpportunitiesByCategory(currentCategory);

  useEffect(() => {
    if (contentWrapper.current) {
      const content = contentWrapper.current;
      const headers = content.querySelectorAll("h3");

      headers.forEach((item) => {
        const headerItem = item as HTMLElement;
        const words = headerItem.innerText.split(" ");

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (i === 0) {
            headerItem.innerHTML = `<span class="underline text-underline-${Colors.BLUE}">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-${Colors.BLUE}">${word}</span>`;
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (opportunitiesData) {
      setOpportunities(opportunitiesData);
    }
  }, [opportunitiesData]);

  const { pageInfo } = opportunitiesData?.projectBasedOpportunities || {};
  const { pageInfo: categoryPageInfo } =
    opportunitiesByCategoryData?.projectBasedOpportunities || {};

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

  const handleLoadMoreOpportunities = () => {
    if (pageInfo?.hasNextPage) {
      setShowLoader(true);
      fetchMoreOpportunities({
        variables: {
          after: pageInfo?.endCursor,
        },
      }).then((data) => {
        setShowLoader(false);
        setOpportunities(data.data);
      });
    }
  };

  const handleLoadMoreByCategory = () => {
    if (categoryPageInfo?.hasNextPage) {
      setShowLoader(true);
      fetchMoreByCategory({
        variables: {
          after: categoryPageInfo?.endCursor,
        },
      }).then((data) => {
        setShowLoader(false);
        setOpportunities(data.data);
      });
    }
  };

  const ShowMore = () => {
    if (currentCategory && String(currentCategory) !== "all") {
      if (categoryPageInfo?.hasNextPage) {
        return (
          <ShowMoreButton onClick={handleLoadMoreByCategory}>
            Show More Opportunities
          </ShowMoreButton>
        );
      }
      return <></>;
    }
    if (pageInfo?.hasNextPage && String(currentCategory) == "all") {
      return (
        <ShowMoreButton onClick={handleLoadMoreOpportunities}>
          Show More Opportunities
        </ShowMoreButton>
      );
    }
    return <></>;
  };

  if (!blockContent) return null;

  const { opportunitiesCreated, opportunitiesCreatedContent, scrollId } =
    blockContent;

  return (
    <>
      <section className="pb-10" id={String(scrollId)}>
        <div className="max-w-[1200px] mx-auto">
          <CommittedDeployedProgressBar
            deployed={opportunitiesCreated?.opportunitiesCreated}
            committed={opportunitiesCreated?.opportunitiesCommitted}
            deployedLabel={opportunitiesCreated?.createdLabel}
            committedLabel={opportunitiesCreated?.committedLabel}
            annotation={opportunitiesCreated?.annotation}
            accent={Colors.BLUE}
          />
          <div className="mb-6" ref={contentWrapper}>
            <ContentEditor content={opportunitiesCreatedContent} />
          </div>
          <OpportunityCategorySelect
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setCategory={setCurrentCategory}
          />
          {opportunitiesLoading || opportunitiesError ? (
            <Loading />
          ) : (
            <>
              <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {opportunities?.projectBasedOpportunities?.edges?.map(
                  (edge, index) => (
                    <OpportunityLink
                      key={index}
                      opportunity={edge}
                      setCurrentID={setCurrentID}
                      setIsOpen={setIsOpen}
                    />
                  )
                )}
              </section>
              <ShowMore />
            </>
          )}
        </div>
      </section>
      <Modal id={currentID} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProjectBasedOpportunities;
