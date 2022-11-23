import React from "react";
import { allInvestments_communityInvestments_edges } from "../../api/investments/__generated__/allInvestments";
import ArrowLinkIcon from "../ArrowLinkIcon";
import ProgressBar, { Phase } from "../ProgressBar";
import { Colors } from "../../styles/helpers";
import { ModalType } from "../helpers";

interface InvestmentLinkProps {
  investment: allInvestments_communityInvestments_edges | null;
  setCurrentID: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InvestmentLink = ({
  investment,
  setIsOpen,
  setCurrentID,
}: InvestmentLinkProps) => {
  const { title, databaseId, slug, communityAndOpportunityPopUps } =
    investment?.node || {};

  const { progress, alphanumericLabel } = communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel } = progress || {};

  const handleClick = () => {
    setCurrentID(databaseId);
    setIsOpen(true);
    history.pushState(
      null,
      "",
      `/?investment=${slug}&modalType=${ModalType.INVESTMENT}&id=${databaseId}`
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`block text-left flex flex-col justify-between ${
        progress?.currentPhase === Phase.COMPLETION
          ? "bg-innovate-neon"
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
        <ProgressBar currentPhase={currentPhase} accent={Colors.NEON} />
      </div>
    </button>
  );
};

export default InvestmentLink;
