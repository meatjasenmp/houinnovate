import styles from "../styles/components/ProgressBar.module.css";
import { backgroundColorMapping, Colors } from "../styles/helpers";

export enum Phase {
  INITIAL = "initial",
  PLANNING = "planning",
  EXECUTION = "execution",
  COMPLETED = "completed",
}

const progressBarPercentage = (currentPhase: string | null | undefined) => {
  switch (currentPhase) {
    case Phase.INITIAL:
      return "25%";
    case Phase.PLANNING:
      return "50%";
    case Phase.EXECUTION:
      return "75%";
    case Phase.COMPLETED:
      return "100%";
    default:
      return "0%";
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
  const progressBarClassName = [
    styles.progress_bar_simple_bar,
    backgroundColorMapping(accent),
  ].join(" ");
  return (
    <div className={styles.progress_bar_simple}>
      <div
        className={progressBarClassName}
        style={{
          width: `${progressBarPercentage(currentPhase)}`,
          height: height || "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
