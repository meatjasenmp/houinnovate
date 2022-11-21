import { backgroundColorMapping, Colors } from "../styles/helpers";

export enum Phase {
  PLANNING = "planning",
  EXECUTION = "execution",
  MONITORING = "monitoring",
  COMPLETION = "completion",
  ONGOING = "ongoing",
}

const progressBarPercentage = (
  currentPhase: string | null | undefined,
  percentage: number | null | undefined
) => {
  if (currentPhase !== Phase.COMPLETION) {
    return `${percentage}%`;
  }
  return "100%";
};

const ProgressBar = ({
  currentPhase,
  accent,
  height,
  progressPercentage,
}: {
  currentPhase: string | null | undefined;
  accent: Colors;
  height?: string;
  progressPercentage: number | null | undefined;
}) => {
  return (
    <div className="bg-innovate-gray-2">
      <div
        className={backgroundColorMapping(accent)}
        style={{
          width: `${progressBarPercentage(currentPhase, progressPercentage)}`,
          height: height || "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
