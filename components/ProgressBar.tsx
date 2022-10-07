import { backgroundColorMapping, Colors } from "../styles/helpers";

import styles from "../styles/components/ProgressBar.module.css";

interface ProgressBarProps {
  deployed: number | null | undefined;
  committed: number | null | undefined;
  deployedLabel: string | null | undefined;
  committedLabel: string | null | undefined;
  accent: Colors;
}

const calculatePercentage = (
  deployed: number | null | undefined,
  committed: number | null | undefined
) => {
  if (!deployed || !committed) return 0;
  return (deployed / committed) * 100;
};

const ProgressBar = ({
  deployed,
  committed,
  deployedLabel,
  committedLabel,
  accent,
}: ProgressBarProps) => {
  const progressBarDeployedClassNames = [
    styles.progress_bar__deployed,
    backgroundColorMapping(accent),
  ].join(" ");

  return (
    <div className={styles.progress_bar}>
      <div className={styles.progress_bar__labels}>
        <span>${deployed} Million</span>
        <span>{deployedLabel}</span>
      </div>
      <div
        className={progressBarDeployedClassNames}
        style={{ width: `${calculatePercentage(deployed, committed)}%` }}
      />
      <div className={styles.progress_bar__labels}>
        <span>${committed} Million</span>
        <span>{committedLabel}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
