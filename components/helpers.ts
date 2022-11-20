import { Phase } from "./ProgressBar";
import { backgroundColorMapping, Colors } from "../styles/helpers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import { jobCategories_jobCategories_edges } from "../api/jobs/__generated__/jobCategories";
import { communityInvestmentTypes_communityInvestmentTypes_edges } from "../api/investments/__generated__/communityInvestmentTypes";
import { opportunityTypes_opportunityTypes_edges } from "../api/opportunities/__generated__/opportunityTypes";

export enum Components {
  HERO_BANNER = "Page_Components_ComponentBlocks_HeroBanner",
  BOX_LINKS = "Page_Components_ComponentBlocks_BoxLinks",
  CONTENT_BLOCK = "Page_Components_ComponentBlocks_ContentBlock",
  CONTENT_BLOCK_STYLIZED = "Page_Components_ComponentBlocks_ContentBlockStylizedList",
  PHASES = "Page_Components_ComponentBlocks_Phases",
  WORK_WITH_ION = "Page_Components_ComponentBlocks_WorkWithIon",
  PROJECT_BASED_OPPORTUNITIES = "Page_Components_ComponentBlocks_ProjectBasedOpportunities",
  DIRECT_COMMUNITY_INVESTMENT = "Page_Components_ComponentBlocks_CommunityInvestment",
}

export enum PopUpTypes {
  INVESTMENT = "investment",
  OPPORTUNITY = "opportunity",
}

export const completedBackground = (
  currentPhase: string | null | undefined,
  popUpType: string | null | undefined
) => {
  if (popUpType === PopUpTypes.INVESTMENT) {
    if (currentPhase === Phase.COMPLETED) {
      return backgroundColorMapping(Colors.NEON);
    }
    return backgroundColorMapping(Colors.WHITE);
  }

  if (popUpType === PopUpTypes.OPPORTUNITY) {
    if (currentPhase === Phase.COMPLETED) {
      return backgroundColorMapping(Colors.BLUE);
    }
    return backgroundColorMapping(Colors.WHITE);
  }
};

export const phaseCompletedOpacity = (
  currentPhase: string | null | undefined
) => {
  if (currentPhase === Phase.COMPLETED) {
    return 0.15;
  }
  return 1;
};

export interface PopUpProps {
  id: string;
  currentID: string;
  setCurrentInvestmentID: Dispatch<SetStateAction<string | null | undefined>>;
}

export const optionSelectItems = (options: Options[]) => {
  const selectItems = new Set();

  return options.filter((element) => {
    const isDuplicate = selectItems.has(element.label);

    selectItems.add(element.label);

    return !isDuplicate;
  });
};

export const formatPostDate = (date: string | null | undefined) => {
  if (!date) return;
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const handleScroll = (to: string | null | undefined) => {
  scroller.scrollTo(String(to), {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

export const useScrollToSection = (section: string | null | undefined) => {
  const router = useRouter();
  const { scrollTo } = router.query;

  useEffect(() => {
    if (scrollTo && scrollTo === section) {
      scroller.scrollTo(String(scrollTo), {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, []);
};

export interface Options {
  value?: (string | null)[] | null | undefined;
  label?: string | null | undefined;
}

export interface SelectComponentProps {
  selectedOption: Options | null | undefined;
  setSelectedOption: Dispatch<SetStateAction<Options | undefined>>;
  setCategory: Dispatch<SetStateAction<(string | null)[] | null | undefined>>;
}

export const selectStyles = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#000",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: 0,
    borderRadius: 0,
    fontFamily: "Sohne-Kraftig-Bold, sans-serif",
    borderColor: "#000 !important",
    borderBottom: "2px solid #000",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#E0E0E0",
    borderRadius: 0,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: "2.5rem",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
    fontSize: "2rem",
    backgroundColor: state.isSelected && "#BEBEBE",
    fontFamily: "Sohne-Kraftig-Bold, sans-serif",
  }),
};

export const setCategories = (
  data:
    | ((opportunityTypes_opportunityTypes_edges | null)[] | null | undefined)
    | ((jobCategories_jobCategories_edges | null)[] | null | undefined)
    | (communityInvestmentTypes_communityInvestmentTypes_edges | null)[]
    | null
    | undefined,
  setSelectedOption: Dispatch<SetStateAction<Options | undefined>>,
  setCategory: Dispatch<SetStateAction<(string | null)[] | null | undefined>>,
  defaultOptionLabel: string
) => {
  const categories: Options[] = [];
  categories.push({ value: ["all"], label: defaultOptionLabel });
  data?.forEach((item) => {
    if (item?.node) {
      const { pages } = item.node;
      if (pages?.nodes?.length && pages.nodes.length > 0) {
        const { name, slug } = item.node;
        categories.push({
          value: [slug],
          label: name,
        });
      }
    }
  });
  setSelectedOption(categories[0]);
  setCategory(categories[0]?.value);
  return categories;
};
