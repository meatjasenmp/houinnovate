import { Phase } from "./ProgressBar";
import { backgroundColorMapping, Colors } from "../styles/helpers";
import { Dispatch, SetStateAction, useState } from "react";
import { communityInvestmentsSelect_communityInvestments_edges } from "../pages/api/__generated__/communityInvestmentsSelect";

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

const optionsArray: Options[] = [];

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
