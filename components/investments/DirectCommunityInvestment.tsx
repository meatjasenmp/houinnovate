import React, { useEffect, useRef, useState } from "react";
import ContentEditor from "../ContentEditor";
import CommittedDeployedProgressBar from "../CommittedDeployedProgressBar";
import ShowMoreButton from "../ShowMoreButton";
import InvestmentCategorySelect from "./InvestmentCategorySelect";
import InvestmentLink from "./InvestmentLink";
import Modal from "./Modal";
import {
  useInvestments,
  useInvestmentsByCategory,
} from "../../api/investments/investments";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment } from "../../api/__generated__/page";
import { Colors } from "../../styles/helpers";
import { Options } from "../helpers";
import { allInvestments } from "../../api/investments/__generated__/allInvestments";

interface DirectCommunityInvestmentProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment;
}

const DirectCommunityInvestment = ({
  blockContent,
}: DirectCommunityInvestmentProps) => {
  const contentWrapper = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [showLoadLoader, setShowLoader] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<
    (string | null)[] | null | undefined
  >();
  const [investments, setInvestments] = useState<allInvestments | undefined>();
  const [currentID, setCurrentID] = useState<number | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    data: investmentsData,
    loading: investmentsLoading,
    error: investmentsError,
    fetchMore: fetchMoreInvestments,
    refetch: refetchInvestments,
  } = useInvestments();

  const {
    getInvestments,
    data: investmentsByCategoryData,
    fetchMore: fetchMoreByCategory,
  } = useInvestmentsByCategory(currentCategory);

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
            headerItem.innerHTML = `<span class="underline text-underline-${Colors.NEON}">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-${Colors.NEON}">${word}</span>`;
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (investmentsData) {
      setInvestments(investmentsData);
    }
  }, [investmentsData]);

  useEffect(() => {
    if (currentCategory && String(currentCategory) !== "all") {
      getInvestments().then((data) => {
        setInvestments(data.data);
      });
      return;
    }
    refetchInvestments().then((data) => {
      setInvestments(data.data);
    });
  }, [currentCategory]);

  const { pageInfo } = investmentsData?.communityInvestments || {};
  const { pageInfo: categoryPageInfo } =
    investmentsByCategoryData?.communityInvestments || {};

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

  const handleLoadMoreInvestments = () => {
    if (pageInfo?.hasNextPage) {
      setShowLoader(true);
      fetchMoreInvestments({
        variables: {
          after: pageInfo?.endCursor,
        },
      }).then((data) => {
        setShowLoader(false);
        setInvestments(data.data);
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
        setInvestments(data.data);
      });
    }
  };

  const ShowMore = () => {
    if (currentCategory && String(currentCategory) !== "all") {
      if (categoryPageInfo?.hasNextPage) {
        return (
          <ShowMoreButton onClick={handleLoadMoreByCategory}>
            Show More Investments
          </ShowMoreButton>
        );
      }
      return <></>;
    }
    if (pageInfo?.hasNextPage && String(currentCategory) == "all") {
      return (
        <ShowMoreButton onClick={handleLoadMoreInvestments}>
          Show More Investments
        </ShowMoreButton>
      );
    }
    return <></>;
  };

  if (!blockContent) return null;

  const { communityInvestmentContent, deployment, scrollId } = blockContent;

  // TODO: Loading State & Error State

  return (
    <>
      <section className="pb-10" id={String(scrollId)}>
        <div className="max-w-[1200px] mx-auto">
          <CommittedDeployedProgressBar
            deployed={deployment?.deployed}
            committed={deployment?.committed}
            deployedLabel={deployment?.deployedLabel}
            committedLabel={deployment?.investmentCommittedLabel}
            accent={Colors.NEON}
            annotation={deployment?.annotation}
          />
          <div className="mb-6" ref={contentWrapper}>
            <ContentEditor content={communityInvestmentContent} />
          </div>
          <InvestmentCategorySelect
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setCategory={setCurrentCategory}
          />
          {investmentsLoading || investmentsError ? (
            <Loading />
          ) : (
            <>
              <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {investments?.communityInvestments?.edges?.map(
                  (edge, index) => (
                    <InvestmentLink
                      key={index}
                      investment={edge}
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

export default DirectCommunityInvestment;
