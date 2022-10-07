import { backgroundColorMapping, Colors } from "../styles/helpers";

import styles from "../styles/components/ProgressBar.module.css";

interface ProgressBarProps {
  deployed: number | null | undefined;
  committed: number | null | undefined;
  deployedLabel: string | null | undefined;
  committedLabel: string | null | undefined;
  accent: Colors;
}

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
      <div className={progressBarDeployedClassNames} />
    </div>
  );
};

export default ProgressBar;
