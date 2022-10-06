import ContentEditor from "./ContentEditor";
import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList_phase,
} from "../pages/api/__generated__/page";

import styles from "../styles/components/Phases.module.css";

interface PhasesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases;
}

interface PhaseProps {
  phase:
    | page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList_phase
    | null
    | undefined;
  phaseNumber: number;
}

const Phase = ({ phase, phaseNumber }: PhaseProps) => {
  if (!phase) return null;

  const { phaseHeader, phaseText } = phase;

  const className = [styles.phase, "flex"].join(" ");

  return (
    <div className={className}>
      <div>{`0${phaseNumber}.`}</div>
      <div>
        <h5>{phaseHeader}</h5>
        <ContentEditor content={phaseText} textColor="black" />
      </div>
    </div>
  );
};

const Phases = ({ blockContent }: PhasesProps) => {
  if (!blockContent) return null;
  const { phasesContent, phasesList, accentColor } = blockContent;
  return (
    <section className={styles.phases}>
      <ContentEditor content={phasesContent} textColor="black" />
      <div className={styles.phase_list}>
        {phasesList &&
          phasesList.map((phase, index) => (
            <Phase key={index} phase={phase?.phase} phaseNumber={index + 1} />
          ))}
      </div>
    </section>
  );
};

export default Phases;
