import React, { useEffect, useRef } from "react";
import { allProjectOpportunities_projectBasedOpportunities_edges } from "../../api/opportunities/__generated__/allProjectOpportunities";
import ArrowLinkIcon from "../ArrowLinkIcon";
import ProgressBar, { Phase } from "../ProgressBar";
import { Colors } from "../../styles/helpers";
import { ModalType } from "../helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  gsap.registerPlugin(ScrollTrigger);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const duration = 0.1;
      const hold = 0.05;
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          delay: duration * index + hold * index,
          scrollTrigger: {
            trigger: buttonRef.current,
          },
        });
        tl.from(buttonRef.current, { y: 20, opacity: 0 });
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
        <ProgressBar currentPhase={currentPhase} accent={Colors.BLUE} />
      </div>
    </button>
  );
};

export default OpportunityLink;
