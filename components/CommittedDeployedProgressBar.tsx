import React, { useEffect, useRef } from "react";
import { accentColor, backgroundColorMapping, Colors } from "../styles/helpers";

import styles from "../styles/components/ProgressBar.module.css";
import ContentEditor from "./ContentEditor";

import { gsap } from "gsap";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        const target = sectionRef?.current?.querySelector(
          ".progress_bar_animated"
        );
        const tl = gsap.timeline({
          delay: 0.25,
          scrollTrigger: {
            trigger: target,
          },
        });
        if (target) {
          tl.from(target, { width: 0 });
          tl.to(target, {
            width: `${calculatePercentage(deployed, committed)}%`,
          });
        }
      }, sectionRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, [deployed, committed]);

  return (
    <section className="my-10" ref={sectionRef}>
      <div className="h-[50px] bg-innovate-gray-2 relative flex justify-between items-center">
        <div className={`z-[2] px-4 text-innovate-${accentColor(accent)}`}>
          <span className="block leading-tight font-kraftigBold">
            ${deployed} Million {deployedLabel}
          </span>
        </div>
        <div
          className={`absolute top-0 left-0 h-full progress_bar_animated ${backgroundColorMapping(
            accent
          )}`}
          style={{ width: `${calculatePercentage(deployed, committed)}%` }}
        />
        <div className="z-[2] px-4" style={{ textAlign: "right" }}>
          <span className="block leading-tight font-kraftigBold">
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
