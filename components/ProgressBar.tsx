import { backgroundColorMapping, Colors } from "../styles/helpers";

export enum Phase {
  PLANNING = "planning",
  EXECUTION = "execution",
  MONITORING = "monitoring",
  COMPLETION = "completion",
  ONGOING = "ongoing",
}

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

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
}: {
  currentPhase: string | null | undefined;
  accent: Colors;
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (progressBarRef.current) {
      const ctx = gsap.context(() => {
        const progressBar = progressBarRef?.current?.querySelector("div");
        const tl = gsap.timeline({
          duration: 0.5,
        });
        if (progressBar) {
          tl.from(progressBar, { width: 0 });
          tl.to(progressBar, { width: progressBarPercentage(currentPhase) });
        }
      }, progressBarRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, [progressBarRef]);

  return (
    <div className="bg-innovate-gray-2" ref={progressBarRef}>
      <div
        className={backgroundColorMapping(accent)}
        style={{
          width: `${progressBarPercentage(currentPhase)}`,
          height: "35px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
