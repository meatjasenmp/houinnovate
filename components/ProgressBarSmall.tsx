import { backgroundColorMapping, Colors } from "../styles/helpers";
import { progressBarPercentage } from "./helpers";

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
