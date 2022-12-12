import { backgroundColorMapping, Colors } from "../styles/helpers";
import { progressBarPercentage } from "./helpers";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases } from "../api/investments/__generated__/allInvestments";
import { allProjectOpportunities_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases } from "../api/opportunities/__generated__/allProjectOpportunities";

const ProgressBar = ({
  phases,
  accent,
}: {
  phases:
    | allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases
    | allProjectOpportunities_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases
    | null
    | undefined;
  accent: Colors;
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      const ctx = gsap.context(() => {
        const progressBar = progressBarRef?.current?.querySelector("div");
        const tl = gsap.timeline({
          duration: 0.5,
        });
        if (progressBar) {
          tl.from(progressBar, { width: 0 });
          tl.to(progressBar, { width: progressBarPercentage(phases) });
        }
      }, progressBarRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, [progressBarRef]);

  return (
    <div className="bg-innovate-gray-2" ref={progressBarRef}>
      <div
        className={backgroundColorMapping(accent)}
        style={{
          width: `${progressBarPercentage(phases)}`,
          height: "35px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
