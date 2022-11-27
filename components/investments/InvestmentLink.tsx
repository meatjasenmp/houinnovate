import React, { useEffect, useRef } from "react";
import { allInvestments_communityInvestments_edges } from "../../api/investments/__generated__/allInvestments";
import ArrowLinkIcon from "../ArrowLinkIcon";
import ProgressBarSmall from "../ProgressBarSmall";
import { Colors } from "../../styles/helpers";
import { ModalType, Phase } from "../helpers";

import { gsap } from "gsap";

interface InvestmentLinkProps {
  investment: allInvestments_communityInvestments_edges | null;
  setCurrentID: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}

const InvestmentLink = ({
  investment,
  setIsOpen,
  setCurrentID,
  index,
}: InvestmentLinkProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   if (buttonRef.current) {
  //     const duration = 0.1;
  //     const hold = 0.05;
  //     const ctx = gsap.context(() => {
  //       const tl = gsap.timeline({
  //         delay: duration * index + hold * index,
  //         scrollTrigger: {
  //           trigger: buttonRef.current,
  //           markers: true,
  //         },
  //       });
  //       tl.from(buttonRef.current, { y: 20, opacity: 0 });
  //       tl.to(buttonRef.current, { y: 0, opacity: 1 });
  //     }, buttonRef.current);
  //
  //     return () => {
  //       ctx.revert();
  //     };
  //   }
  // }, [investment]);

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
      ref={buttonRef}
      onClick={handleClick}
      className={`block text-left flex flex-col justify-between border duration-300 ease-linear hover:bg-innovate-neon/50 hover:drop-shadow-md hover:border-innovate-smoke-gray ${
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
        <ProgressBarSmall currentPhase={currentPhase} accent={Colors.NEON} />
      </div>
    </button>
  );
};

export default InvestmentLink;
