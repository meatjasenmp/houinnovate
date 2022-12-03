import React, { useEffect, useRef } from "react";
import { allProjectOpportunities_projectBasedOpportunities_edges } from "../../api/opportunities/__generated__/allProjectOpportunities";
import ArrowLinkIcon from "../ArrowLinkIcon";
import ProgressBarSmall from "../ProgressBarSmall";
import { Colors } from "../../styles/helpers";
import { ModalType, Phase } from "../helpers";
import { gsap } from "gsap";

interface OpportunityLinkProps {
  opportunity: allProjectOpportunities_projectBasedOpportunities_edges | null;
  setCurrentID: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}

const OpportunityLink = ({
  opportunity,
  setIsOpen,
  setCurrentID,
  index,
}: OpportunityLinkProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const duration = 0.02;
      const hold = 0.01;
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          delay: duration * index + hold * index,
          scrollTrigger: {
            trigger: buttonRef.current,
          },
        });
        tl.to(buttonRef.current, { y: 0, opacity: 1 });
      }, buttonRef.current);

      return () => {
        ctx.revert();
      };
    }
  }, [opportunity]);

  const { title, databaseId, slug, communityAndOpportunityPopUps } =
    opportunity?.node || {};

  const { progress, alphanumericLabel } = communityAndOpportunityPopUps || {};

  const { currentPhase, progressLabel, showProgressLabel } = progress || {};

  const handleClick = () => {
    setCurrentID(databaseId);
    setIsOpen(true);
    history.pushState(
      null,
      "",
      `/?investment=${slug}&modalType=${ModalType.OPPORTUNITY}&id=${databaseId}`
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block translate-y-3 opacity-0 text-left flex flex-col justify-between border duration-300 ease-linear hover:bg-innovate-blue/50 hover:drop-shadow-md hover:border-innovate-smoke-gray hover:text-white ${
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
        <div className="pl-6">
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
        <ProgressBarSmall currentPhase={currentPhase} accent={Colors.BLUE} />
      </div>
    </button>
  );
};

export default OpportunityLink;
