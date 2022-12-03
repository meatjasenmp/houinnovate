import React, { useEffect, useRef, useState } from "react";
import ContentEditor from "../ContentEditor";
import CommittedDeployedProgressBar from "../CommittedDeployedProgressBar";
import ShowMoreButton from "../ShowMoreButton";
import InvestmentCategorySelect from "./InvestmentCategorySelect";
import InvestmentLink from "./InvestmentLink";
import { useRouter } from "next/router";
import Modal from "./Modal";
import {
  useInvestments,
  useInvestmentsByCategory,
} from "../../api/investments/investments";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment } from "../../api/__generated__/page";
import { Colors } from "../../styles/helpers";
import { Options, ModalType } from "../helpers";
import { allInvestments } from "../../api/investments/__generated__/allInvestments";
import LoadingSpinner from "../LoadingSpinner";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface DirectCommunityInvestmentProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_CommunityInvestment;
}

const DirectCommunityInvestment = ({
  blockContent,
}: DirectCommunityInvestmentProps) => {
  const router = useRouter();
  const { query } = router;
  const contentWrapper = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<Options>();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<
    (string | null)[] | null | undefined
  >();
  const [investments, setInvestments] = useState<allInvestments | undefined>();
  const [currentID, setCurrentID] = useState<number | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (query.id && query.modalType === ModalType.INVESTMENT) {
      setCurrentID(Number(query.id));
      setIsOpen(true);
    }
  }, [query.id]);

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
    loading: investmentsByCategoryLoading,
    error: investmentsByCategoryError,
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
  }, [investmentsData]);

  useEffect(() => {
    if (investmentsData) {
      setInvestments(investmentsData);
      ScrollTrigger.refresh();
    }
  }, [investmentsData]);

  useEffect(() => {
    if (currentCategory && String(currentCategory) !== "all") {
      getInvestments().then((data) => {
        setInvestments(data.data);
        ScrollTrigger.refresh();
      });
      return;
    }
    refetchInvestments().then((data) => {
      setInvestments(data.data);
    });
  }, [currentCategory]);

  // const { pageInfo } = investmentsData?.communityInvestments || {};
  // const { pageInfo: categoryPageInfo } =
  //   investmentsByCategoryData?.communityInvestments || {};

  const LoadingContainer = () => {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="w-8 h-8">
          <LoadingSpinner fill="black" />
        </div>
      </div>
    );
  };

  // const handleLoadMoreInvestments = () => {
  //   if (pageInfo?.hasNextPage) {
  //     setShowLoader(true);
  //     fetchMoreInvestments({
  //       variables: {
  //         after: pageInfo?.endCursor,
  //       },
  //     }).then((data) => {
  //       setShowLoader(false);
  //       setInvestments(data.data);
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
  //       setInvestments(data.data);
  //     });
  //   }
  // };
  //
  // const ShowMore = () => {
  //   if (currentCategory && String(currentCategory) !== "all") {
  //     if (categoryPageInfo?.hasNextPage) {
  //       console.log("Direct", categoryPageInfo);
  //       return (
  //         <ShowMoreButton
  //           classNames="bg-innovate-neon text-black"
  //           onClick={handleLoadMoreByCategory}
  //         >
  //           {showLoader && (
  //             <div className="w-4 h-4 mr-4">
  //               <LoadingSpinner fill="black" />
  //             </div>
  //           )}
  //           <div>Show More Investments</div>
  //         </ShowMoreButton>
  //       );
  //     }
  //     return <></>;
  //   }
  //   if (pageInfo?.hasNextPage && String(currentCategory) == "all") {
  //     return (
  //       <ShowMoreButton
  //         classNames="bg-innovate-neon text-black duration-300 ease-linear hover:bg-black hover:text-white"
  //         onClick={handleLoadMoreInvestments}
  //       >
  //         {showLoader && (
  //           <div className="w-4 h-4 mr-4">
  //             <LoadingSpinner fill="black" />
  //           </div>
  //         )}
  //         <div>Show More Investments</div>
  //       </ShowMoreButton>
  //     );
  //   }
  //   return <></>;
  // };

  if (!blockContent) return null;

  const { communityInvestmentContent, deployment, scrollId } = blockContent;

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
          {investmentsLoading ||
          investmentsByCategoryLoading ||
          investmentsError ||
          investmentsByCategoryError ? (
            <LoadingContainer />
          ) : (
            <>
              <div className="mt-2.5 flex justify-end">
                <p className="text-sm mb-0">
                  {investments?.communityInvestments?.edges?.length}{" "}
                  {investments?.communityInvestments?.edges?.length === 1
                    ? "Result"
                    : "Results"}
                </p>
              </div>
              <section className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {investments?.communityInvestments?.edges?.map(
                  (edge, index) => (
                    <InvestmentLink
                      key={index}
                      investment={edge}
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

export default DirectCommunityInvestment;
