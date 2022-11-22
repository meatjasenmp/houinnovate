import React from "react";
import ContentEditor from "./ContentEditor";
import {
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases,
  page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases_phasesList_phase,
} from "../api/__generated__/page";
import styles from "../styles/components/Phases.module.css";
import { accentColor, backgroundColorMapping } from "../styles/helpers";

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

const Phase = ({ phase, phaseNumber, backgroundColor }: PhaseProps) => {
  if (!phase) return null;

  const { phaseHeader, phaseText } = phase;

  return (
    <div className="cursor-pointer flex mb-4 last:mb-0">
      <div
        className={`mr-4 text-innovate-${accentColor(backgroundColor)}`}
      >{`0${phaseNumber}.`}</div>
      <div>
        <h5
          className={`font-kraftigBold text-innovate-${accentColor(
            backgroundColor
          )}`}
        >
          {phaseHeader}
        </h5>
        <div>
          <ContentEditor content={phaseText} />
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
    scrollId,
  } = blockContent;

  return (
    <section
      className={`py-16 px-8 full-screen ${backgroundColorMapping(
        backgroundColor
      )}`}
      id={String(scrollId)}
    >
      <div className="max-w-lg flex flex-col innovate-lg:flex-row innovate-lg:max-w-screen-innovate-lg lg:mx-auto">
        <div className="innovate-lg:mr-10 innovate-lg:max-w-lg xl:max-w-2xl xl:flex-grow">
          <ContentEditor content={phasesContent} />
        </div>
        <div
          className={[
            "mt-6 innovate-lg:mt-0 innovate-lg:max-w-lg xl:flex-1",
            styles.phases,
          ].join(" ")}
        >
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
