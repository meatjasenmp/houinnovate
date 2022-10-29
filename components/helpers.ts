import { Phase } from "./ProgressBar";
import { backgroundColorMapping, Colors } from "../styles/helpers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";

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

export interface Options {
  value?: string | null | undefined;
  label?: string | null | undefined;
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
