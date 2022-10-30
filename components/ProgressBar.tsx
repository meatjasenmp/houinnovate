import styles from "../styles/components/ProgressBar.module.css";
import { backgroundColorMapping, Colors } from "../styles/helpers";

export enum Phase {
  INITIAL = "initial",
  PLANNING = "planning",
  EXECUTION = "execution",
  COMPLETED = "completed",
  REPORTING = "reporting",
}

const progressBarPercentage = (
  currentPhase: string | null | undefined,
  percentage: number | null | undefined
) => {
  if (currentPhase !== Phase.COMPLETED) {
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
  const progressBarClassName = [
    styles.progress_bar_simple_bar,
    backgroundColorMapping(accent),
  ].join(" ");
  console.log(currentPhase);
  return (
    <div className={styles.progress_bar_simple}>
      <div
        className={progressBarClassName}
        style={{
          width: `${progressBarPercentage(currentPhase, progressPercentage)}`,
          height: height || "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
