import { accentColor, backgroundColorMapping, Colors } from "../styles/helpers";

import styles from "../styles/components/ProgressBar.module.css";
import ContentEditor from "./ContentEditor";

interface ProgressBarProps {
  deployed: number | null | undefined;
  committed: number | null | undefined;
  deployedLabel: string | null | undefined;
  committedLabel: string | null | undefined;
  annotation: string | null | undefined;
  accent: Colors;
}

const calculatePercentage = (
  deployed: number | null | undefined,
  committed: number | null | undefined
) => {
  if (!deployed || !committed) return 0;
  return (deployed / committed) * 100;
};

const CommittedDeployedProgressBar = ({
  deployed,
  committed,
  deployedLabel,
  committedLabel,
  accent,
  annotation,
}: ProgressBarProps) => {
  const progressBarDeployedClassNames = [
    styles.progress_bar__deployed,
    backgroundColorMapping(accent),
  ].join(" ");

  const labelClassNames = [
    styles.progress_bar__labels,
    `text-innovate-${accentColor(accent)}`,
  ].join(" ");

  return (
    <section className={styles.progress_bar_container}>
      <div className={styles.progress_bar}>
        <div className={labelClassNames}>
          <span>
            ${deployed} Million {deployedLabel}
          </span>
        </div>
        <div
          className={progressBarDeployedClassNames}
          style={{ width: `${calculatePercentage(deployed, committed)}%` }}
        />
        <div
          className={styles.progress_bar__labels}
          style={{ textAlign: "right" }}
        >
          <span>
            ${committed} Million {committedLabel}
          </span>
        </div>
      </div>
      {annotation && (
        <div className={styles.annotation}>
          <ContentEditor content={annotation} />
        </div>
      )}
    </section>
  );
};

export default CommittedDeployedProgressBar;
