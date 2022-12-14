import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import { jobCategories_jobCategories_edges } from "../api/jobs/__generated__/jobCategories";
import { communityInvestmentTypes_communityInvestmentTypes_edges } from "../api/investments/__generated__/communityInvestmentTypes";
import { opportunityTypes_opportunityTypes_edges } from "../api/opportunities/__generated__/opportunityTypes";
import { allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases } from "../api/investments/__generated__/allInvestments";
import { allProjectOpportunities_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases } from "../api/opportunities/__generated__/allProjectOpportunities";

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
export enum ModalType {
  OPPORTUNITY = "opportunity",
  INVESTMENT = "investment",
  JOB = "job",
}

export const useDocumentTitle = (
  title: string,
  prevailOnUnmount: boolean = false
) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = `${title} | ${defaultTitle.current} `;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
};

export const formatPostDate = (date: string | null | undefined) => {
  if (!date) return;
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export enum OpportunityPhases {
  PLANNING = "planning",
  EXECUTION = "execution",
  MONITORING = "monitoring",
  COMPLETION = "completion",
  ONGOING = "ongoing",
}

export enum InvestmentPhases {
  INITIAL = "initial",
  PLANNING = "planning",
  EXECUTION = "execution",
  COMPLETION = "completion",
}

export enum PhaseType {
  OPPORTUNITY = "opportunity",
  INVESTMENT = "investment",
}

export const progressBarPercentage = (
  phases:
    | allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases
    | allProjectOpportunities_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases
    | null
    | undefined
) => {
  if (phases?.phasePercentageType === PhaseType.OPPORTUNITY) {
    switch (phases?.opportunityPhases) {
      case OpportunityPhases.PLANNING:
        return "20%";
      case OpportunityPhases.EXECUTION:
        return "40%";
      case OpportunityPhases.MONITORING:
        return "60%";
      case OpportunityPhases.COMPLETION:
        return "100%";
      case OpportunityPhases.ONGOING:
        return "100%";
    }
  }
  if (phases?.phasePercentageType === PhaseType.INVESTMENT) {
    switch (phases?.investmentPhases) {
      case InvestmentPhases.INITIAL:
        return "25%";
      case InvestmentPhases.PLANNING:
        return "50%";
      case InvestmentPhases.EXECUTION:
        return "75%";
      case InvestmentPhases.COMPLETION:
        return "100%";
    }
  }
};

export const handleScroll = (to: string | null | undefined) => {
  scroller.scrollTo(String(to), {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
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
  control: (provided: any) => ({
    ...provided,
    border: 0,
    borderRadius: 0,
    fontFamily: "Sohne-Kraftig-Bold, sans-serif",
    borderColor: "#000 !important",
    borderBottom: "2px solid #000",
    boxShadow: "none",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#E0E0E0",
    borderRadius: 0,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: "1.5rem",
    "@media (min-width: 990px)": {
      fontSize: "2.5rem",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
    fontSize: "1rem",
    backgroundColor: state.isSelected && "#BEBEBE",
    fontFamily: "Sohne-Kraftig-Bold, sans-serif",
    "@media (min-width: 990px)": {
      fontSize: "2rem",
    },
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
