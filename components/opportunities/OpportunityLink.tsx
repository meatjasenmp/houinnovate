import React from "react";
import { allProjectOpportunities_projectBasedOpportunities_edges } from "../../api/opportunities/__generated__/allProjectOpportunities";
import ArrowLinkIcon from "../ArrowLinkIcon";
import ProgressBar, { Phase } from "../ProgressBar";
import { Colors } from "../../styles/helpers";

interface OpportunityLinkProps {
  opportunity: allProjectOpportunities_projectBasedOpportunities_edges | null;
  setCurrentID: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpportunityLink = ({
  opportunity,
  setIsOpen,
  setCurrentID,
}: OpportunityLinkProps) => {
  const { title, databaseId, communityAndOpportunityPopUps } =
    opportunity?.node || {};

  const { progress, alphanumericLabel } = communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel, progressPercentage } =
    progress || {};

  const handleClick = () => {
    setCurrentID(databaseId);
    setIsOpen(true);
  };

  return (
    <button
      onClick={handleClick}
      className={`block text-left flex flex-col justify-between ${
        progress?.currentPhase === Phase.COMPLETION
          ? "bg-innovate-blue"
          : "bg-innovate-gray"
      }`}
    >
      <div className="p-6">
        {alphanumericLabel && <span>{alphanumericLabel}.</span>}
        {title && <h2 className="text-2xl mb-0">{title}</h2>}
        {showProgressLabel && progressLabel && <p>{progressLabel}</p>}
      </div>
      <div className="mt-auto w-full">
        <div className="px-6">
          <figure className="flex items-center justify-between">
            <span className="capitalize font-kraftigBold text-xl">
              {currentPhase} Phase
            </span>
            <figure className="w-12 h-12">
              <ArrowLinkIcon
                color={
                  progress?.currentPhase === Phase.COMPLETION
                    ? "white"
                    : "black"
                }
              />
            </figure>
          </figure>
        </div>
        <ProgressBar
          currentPhase={currentPhase}
          progressPercentage={progressPercentage}
          accent={Colors.BLUE}
        />
      </div>
    </button>
  );
};

export default OpportunityLink;
