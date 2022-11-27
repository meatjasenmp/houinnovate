import { backgroundColorMapping, Colors } from "../styles/helpers";

import { Phase } from "./helpers";

const progressBarPercentage = (currentPhase: string | null | undefined) => {
  switch (currentPhase) {
    case Phase.INITIAL:
      return "0%";
    case Phase.PLANNING:
      return "25%";
    case Phase.EXECUTION:
      return "50%";
    case Phase.MONITORING || Phase.ONGOING:
      return "75%";
    default:
      return "100%";
  }
};

const ProgressBarSmall = ({
  currentPhase,
  accent,
  height,
}: {
  currentPhase: string | null | undefined;
  accent: Colors;
  height?: string;
}) => {
  return (
    <div className="bg-innovate-gray-2">
      <div
        className={backgroundColorMapping(accent)}
        style={{
          width: `${progressBarPercentage(currentPhase)}`,
          height: "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBarSmall;
