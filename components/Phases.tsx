import ContentEditor from "./ContentEditor";
import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList_phase,
} from "../pages/api/__generated__/page";

import styles from "../styles/components/Phases.module.css";
import {
  accentColor,
  backgroundColorMapping,
  Colors,
  textColorMapping,
} from "../styles/helpers";
import React from "react";

interface PhasesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases;
}

interface PhaseProps {
  phase:
    | page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList_phase
    | null
    | undefined;
  phaseNumber: number;
  backgroundColor: string | null;
}

const handlePhaseClick = (e: React.MouseEvent<HTMLElement>) => {
  const currentPhase = e.currentTarget.nextSibling as HTMLElement;

  if (!currentPhase.classList.contains("hidden")) {
    currentPhase.classList.add("hidden");
    return;
  }

  const phases = document.querySelectorAll(`.${styles.phase} .phase__content`);
  phases.forEach((phase) => {
    phase.classList.add("hidden");
  });

  currentPhase?.classList.remove("hidden");
};

const Phase = ({ phase, phaseNumber, backgroundColor }: PhaseProps) => {
  if (!phase) return null;

  const { phaseHeader, phaseText } = phase;

  const phaseClassName = [styles.phase, "flex"].join(" ");
  const textColor =
    backgroundColor === Colors.NEON ? "text-black" : "text-white";

  return (
    <div className={phaseClassName}>
      <div className={textColor}>{`0${phaseNumber}.`}</div>
      <div>
        <h5 className={textColor} onClick={handlePhaseClick}>
          {phaseHeader}
        </h5>
        <div className="hidden phase__content">
          <ContentEditor
            content={phaseText}
            textColor={accentColor(backgroundColor)}
          />
        </div>
      </div>
    </div>
  );
};

const Phases = ({ blockContent }: PhasesProps) => {
  if (!blockContent) return null;
  const {
    phasesContent,
    phasesList,
    accentColor: backgroundColor,
  } = blockContent;
  const phaseClassName = [
    styles.phases,
    backgroundColorMapping(backgroundColor),
    "full-screen",
  ].join(" ");

  return (
    <section className={phaseClassName}>
      <div className={styles.phase_container}>
        <ContentEditor
          content={phasesContent}
          textColor={accentColor(backgroundColor)}
        />
        <div className={styles.phase_list}>
          {phasesList &&
            phasesList.map((phase, index) => (
              <Phase
                key={index}
                phase={phase?.phase}
                phaseNumber={index + 1}
                backgroundColor={backgroundColor}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;
