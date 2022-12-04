import React, { useEffect, useRef, useState } from "react";
import ContentEditor from "../ContentEditor";
import ShowMoreButton from "../ShowMoreButton";
import OpportunityCategorySelect from "./OpportunityCategorySelect";
import OpportunityLink from "./OpportunityLink";
import Modal from "./Modal";
import {
  useOpportunities,
  useOpportunitiesByCategory,
} from "../../api/opportunities/opportunities";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities } from "../../api/__generated__/page";
import { Colors } from "../../styles/helpers";
import { ModalType, Options } from "../helpers";
import { allProjectOpportunities } from "../../api/opportunities/__generated__/allProjectOpportunities";
import { useRouter } from "next/router";
import LoadingSpinner from "../LoadingSpinner";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ProjectBasedOpportunitiesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_ProjectBasedOpportunities;
}

const ProjectBasedOpportunities = ({
  blockContent,
}: ProjectBasedOpportunitiesProps) => {
  const router = useRouter();
  const { query } = router;
  const contentWrapper = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<
    (string | null)[] | null | undefined
  >();
  const [opportunities, setOpportunities] = useState<
    allProjectOpportunities | undefined
  >();
  const [currentID, setCurrentID] = useState<number | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      document
        ?.querySelector("body")
        ?.classList.remove("ReactModal__Body--open");
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.id && query.modalType === ModalType.OPPORTUNITY) {
      setCurrentID(Number(query.id));
      setIsOpen(true);
    }
  }, [query.id]);

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
    error: opportunitiesByCategoryError,
    loading: opportunitiesByCategoryLoading,
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
      ScrollTrigger.refresh();
    }
  }, [opportunitiesData]);

  // const { pageInfo } = opportunitiesData?.projectBasedOpportunities || {};
  // const { pageInfo: categoryPageInfo } =
  //   opportunitiesByCategoryData?.projectBasedOpportunities || {};

  const LoadingContainer = () => {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="w-8 h-8">
          <LoadingSpinner fill="black" />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (currentCategory && String(currentCategory) !== "all") {
      getOpportunities().then((data) => {
        setOpportunities(data.data);
        ScrollTrigger.refresh();
      });
      return;
    }
    refetchOpportunities().then((data) => {
      setOpportunities(data.data);
    });
  }, [currentCategory]);

  // const handleLoadMoreOpportunities = () => {
  //   if (pageInfo?.hasNextPage) {
  //     setShowLoader(true);
  //     fetchMoreOpportunities({
  //       variables: {
  //         after: pageInfo?.endCursor,
  //       },
  //     }).then((data) => {
  //       setShowLoader(false);
  //       setOpportunities(data.data);
  //     });
  //   }
  // };
  //
  // const handleLoadMoreByCategory = () => {
  //   if (categoryPageInfo?.hasNextPage) {
  //     setShowLoader(true);
  //     fetchMoreByCategory({
  //       variables: {
  //         after: categoryPageInfo?.endCursor,
  //       },
  //     }).then((data) => {
  //       setShowLoader(false);
  //       setOpportunities(data.data);
  //     });
  //   }
  // };
  //
  // const ShowMore = () => {
  //   if (currentCategory && String(currentCategory) !== "all") {
  //     if (categoryPageInfo?.hasNextPage) {
  //       return (
  //         <ShowMoreButton
  //           classNames="bg-innovate-blue text-white"
  //           onClick={handleLoadMoreByCategory}
  //         >
  //           {showLoader && (
  //             <div className="w-4 h-4 mr-4">
  //               <LoadingSpinner fill="white" />
  //             </div>
  //           )}
  //           <div>Show More Opportunities</div>
  //         </ShowMoreButton>
  //       );
  //     }
  //     return <></>;
  //   }
  //   if (pageInfo?.hasNextPage && String(currentCategory) == "all") {
  //     return (
  //       <ShowMoreButton
  //         classNames="bg-innovate-blue text-white duration-300 ease-linear hover:bg-black"
  //         onClick={handleLoadMoreOpportunities}
  //       >
  //         {showLoader && (
  //           <div className="w-4 h-4 mr-4">
  //             <LoadingSpinner fill="white" />
  //           </div>
  //         )}
  //         <div>Show More Opportunities</div>
  //       </ShowMoreButton>
  //     );
  //   }
  //   return <></>;
  // };

  if (!blockContent) return null;

  const { opportunitiesCreatedContent, scrollId } = blockContent;

  return (
    <>
      <section className="py-10" id={String(scrollId)}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6" ref={contentWrapper}>
            <ContentEditor content={opportunitiesCreatedContent} />
          </div>
          <OpportunityCategorySelect
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setCategory={setCurrentCategory}
          />
          {opportunitiesLoading ||
          opportunitiesByCategoryLoading ||
          opportunitiesError ||
          opportunitiesByCategoryError ? (
            <LoadingContainer />
          ) : (
            <>
              <div className="mt-2.5 flex justify-end">
                <p className="text-sm mb-0">
                  {opportunities?.projectBasedOpportunities?.edges?.length}{" "}
                  {opportunities?.projectBasedOpportunities?.edges?.length === 1
                    ? "Result"
                    : "Results"}
                </p>
              </div>
              <section className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {opportunities?.projectBasedOpportunities?.edges?.map(
                  (edge, index) => (
                    <OpportunityLink
                      key={index}
                      opportunity={edge}
                      setCurrentID={setCurrentID}
                      setIsOpen={setIsOpen}
                      index={index}
                    />
                  )
                )}
              </section>
            </>
          )}
        </div>
      </section>
      <Modal id={currentID} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProjectBasedOpportunities;
