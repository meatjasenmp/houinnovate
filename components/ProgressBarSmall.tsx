import { backgroundColorMapping, Colors } from "../styles/helpers";
import { Phase } from "./helpers";

const progressBarPercentage = (currentPhase: string | null | undefined) => {
  switch (currentPhase) {
    case Phase.INITIAL:
      return "0%";
    case Phase.PLANNING:
      return "15%";
    case Phase.ONGOING:
      return "25%";
    case Phase.EXECUTION:
      return "50%";
    case Phase.MONITORING:
      return "75%";
    default:
      return "100%";
  }
};

const ProgressBarSmall = ({
  currentPhase,
  accent,
}: {
  currentPhase: string | null | undefined;
  accent: Colors;
}) => {
  return (
    <div className="bg-innovate-gray-2">
      <div
        className={[
          backgroundColorMapping(accent),
          "progress_bar_animated",
        ].join(" ")}
        style={{
          width: progressBarPercentage(currentPhase),
          height: "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBarSmall;
