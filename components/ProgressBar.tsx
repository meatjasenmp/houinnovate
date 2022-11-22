import { backgroundColorMapping, Colors } from "../styles/helpers";

export enum Phase {
  PLANNING = "planning",
  EXECUTION = "execution",
  MONITORING = "monitoring",
  COMPLETION = "completion",
  ONGOING = "ongoing",
}

const progressBarPercentage = (currentPhase: string | null | undefined) => {
  switch (currentPhase) {
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

const ProgressBar = ({
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
          height: height || "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
