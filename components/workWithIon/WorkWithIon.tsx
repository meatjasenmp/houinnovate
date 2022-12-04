import ContentEditor from "../ContentEditor";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon } from "../../api/__generated__/page";
import styles from "../../styles/components/WorkWithIon.module.css";
import React, { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "../ArrowRightIcon";
import { ModalType, Options } from "../helpers";
import { allOpportunities } from "../../api/jobs/__generated__/allOpportunities";
import {
  useJobOpportunities,
  useJobOpportunitiesByCategory,
} from "../../api/jobs/opportunities";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LoadingSpinner from "../LoadingSpinner";
import ShowMoreButton from "../ShowMoreButton";
import JobCategorySelect from "./JobCategorySelect";
import JobLink from "./JobLink";
import { useRouter } from "next/router";
import Modal from "./Modal";

interface WorkWithIonProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon;
}
const WorkWithIon = ({ blockContent }: WorkWithIonProps) => {
  const router = useRouter();
  const { query } = router;
  const contentWrapper = useRef<HTMLDivElement>(null);
  const { workWithIonContent, cta, scrollId, selectText } = blockContent;

  const [currentID, setCurrentID] = useState<number | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [opportunities, setOpportunities] = useState<
    allOpportunities | undefined
  >();
  const [currentCategory, setCurrentCategory] = useState<
    (string | null)[] | null | undefined
  >();

  useEffect(() => {
    if (!isOpen) {
      document
        ?.querySelector("body")
        ?.classList.remove("ReactModal__Body--open");
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.id && query.modalType === ModalType.JOB) {
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
  } = useJobOpportunities();

  const {
    getOpportunities,
    data: opportunitiesByCategoryData,
    error: opportunitiesByCategoryError,
    loading: opportunitiesByCategoryLoading,
    fetchMore: fetchMoreByCategory,
  } = useJobOpportunitiesByCategory(currentCategory);

  useEffect(() => {
    if (opportunitiesData) {
      setOpportunities(opportunitiesData);
      ScrollTrigger.refresh();
    }
  }, [opportunitiesData]);

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

  const { pageInfo } = opportunitiesData?.iONJobs || {};
  const { pageInfo: categoryPageInfo } =
    opportunitiesByCategoryData?.iONJobs || {};

  const handleLoadMoreOpportunities = () => {
    fetchMoreOpportunities({
      variables: {
        first: 5,
        after: opportunitiesData?.iONJobs?.pageInfo?.endCursor,
      },
    }).catch((err) => {
      console.error(err);
    });
  };

  const handleLoadMoreByCategory = () => {
    fetchMoreByCategory({
      variables: {
        first: 5,
        after: opportunitiesByCategoryData?.iONJobs?.pageInfo?.endCursor,
      },
    }).catch((err) => {
      console.error(err);
    });
  };

  const LoadingContainer = () => {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="w-8 h-8">
          <LoadingSpinner fill="black" />
        </div>
      </div>
    );
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
        </>
      );
    }
    return <></>;
  };

  useEffect(() => {
    if (contentWrapper.current) {
      const content = contentWrapper.current;
      const headers = content.querySelectorAll("h1");

      headers.forEach((item) => {
        const headerItem = item as HTMLElement;
        const words = headerItem.innerText.split(" ");

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (i === 0) {
            headerItem.innerHTML = `<span class="underline text-underline-red">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-red">${word}</span>`;
          }
        }
      });
    }
  }, []);

  if (!workWithIonContent) return null;

  return (
    <>
      <div className="pt-8 pb-16" id={String(scrollId)}>
        <div className="max-w-screen-innovate-lg mx-auto" ref={contentWrapper}>
          <div className="mb-8 innovate-lg:flex innovate-lg:mb-2">
            <div className="max-w-[285px] mr-1 xl:max-w-[335px]">
              <h1>{workWithIonContent}</h1>
            </div>
            <div className={styles.cta}>
              <figure className="w-6 rotate-90 innovate-lg:rotate-0 innovate-lg:mr-3">
                <ArrowRightIcon />
              </figure>
              <ContentEditor content={cta} />
            </div>
          </div>
          <div className="mb-6">
            <p>{selectText}</p>
          </div>
          <section>
            <JobCategorySelect
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
                <section>
                  <div className="mt-2.5 flex justify-end">
                    <p className="text-sm mb-0">
                      {opportunities?.iONJobs?.edges.length}{" "}
                      {opportunities?.iONJobs?.edges.length === 1
                        ? "Result"
                        : "Results"}
                    </p>
                  </div>
                  <div className="max-w-[1170px] mt-6">
                    {opportunities &&
                      opportunities?.iONJobs?.edges.map((job, index) => (
                        <JobLink
                          setIsOpen={setIsOpen}
                          setCurrentID={setCurrentID}
                          key={index}
                          job={job}
                          index={index}
                        />
                      ))}
                  </div>
                </section>
                <div className="mt-6">
                  <ShowMore />
                </div>
              </>
            )}
          </section>
        </div>
      </div>
      <Modal id={currentID} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default WorkWithIon;
