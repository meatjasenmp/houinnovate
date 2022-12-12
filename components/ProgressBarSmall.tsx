import { backgroundColorMapping, Colors } from "../styles/helpers";
import { progressBarPercentage } from "./helpers";
import { allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases } from "../api/investments/__generated__/allInvestments";
import { allProjectOpportunities_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases } from "../api/opportunities/__generated__/allProjectOpportunities";

const ProgressBarSmall = ({
  accent,
  phases,
}: {
  accent: Colors;
  phases:
    | allInvestments_communityInvestments_edges_node_communityAndOpportunityPopUps_progress_phases
    | allProjectOpportunities_projectBasedOpportunities_edges_node_communityAndOpportunityPopUps_progress_phases
    | null
    | undefined;
}) => {
  return (
    <div className="bg-innovate-gray-2">
      <div
        className={[
          backgroundColorMapping(accent),
          "progress_bar_animated",
        ].join(" ")}
        style={{
          width: progressBarPercentage(phases),
          height: "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBarSmall;
