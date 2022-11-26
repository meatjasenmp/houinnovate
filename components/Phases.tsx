import React, { useState, useEffect, useRef } from "react";
import ContentEditor from "./ContentEditor";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases } from "../api/__generated__/page";
import styles from "../styles/components/Phases.module.css";
import { accentColor, backgroundColorMapping } from "../styles/helpers";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface PhasesProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_Phases;
}

interface Phase {
  title: string;
  description: string;
  phaseNumber: number;
  backgroundColor: string | null;
}

const PhaseList = ({
  phases,
  scrollId,
}: {
  phases: Phase[];
  scrollId: string | null;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  const [activePhase, setActivePhase] = useState<number | null>(null);

  useEffect(() => {
    if (divRef.current) {
      const ctx = gsap.context(() => {
        const targets = gsap.utils.toArray(".phase_animated");
        const duration = 0.1;
        const hold = 0.05;
        targets.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            scrollTrigger: {
              trigger: target,
            },
          });
          tl.from(target, { y: 20, opacity: 0 });
          tl.to(target, { y: 0, opacity: 0.25 });
        });
      }, divRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, [phases]);

  const handlePhaseClick = (phaseNumber: number) => {
    setActivePhase(phaseNumber);
  };

  return (
    <div className="flex flex-col" ref={divRef}>
      {phases.map((phase, index) => {
        return (
          <div
            key={index}
            className={`cursor-pointer phase_animated flex mb-4 last:mb-0 duration-300 ease-linear ${
              activePhase === index ? "!opacity-100" : "opacity-25"
            }`}
            onClick={() => handlePhaseClick(index)}
          >
            <div
              className={`mr-4 text-innovate-${accentColor(
                phase.backgroundColor
              )}`}
            >{`0${phase.phaseNumber}.`}</div>
            <div>
              <h5
                className={`font-kraftigBold text-[1rem] text-innovate-${accentColor(
                  phase.backgroundColor
                )}`}
              >
                {phase.title}
              </h5>
              <div
                className={`duration-300 ease-linear ${
                  activePhase === index ? "h-auto opacity-100" : "h-0 opacity-0"
                }`}
              >
                <ContentEditor content={phase.description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Phases = ({ blockContent }: PhasesProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const [phases, setPhases] = useState<Phase[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phasesList) {
      const phases = phasesList.map((phase, index) => {
        return {
          title: phase?.phase?.phaseHeader || "",
          description: phase?.phase?.phaseText || "",
          phaseNumber: index + 1,
          backgroundColor: backgroundColor,
        };
      });
      setPhases(phases);
    }
  }, [blockContent]);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        const articleTargets = sectionRef.current?.querySelectorAll("h1, p");
        const targets = [...(articleTargets || [])];
        const duration = 0.1;
        const hold = 0.05;
        targets.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            scrollTrigger: {
              trigger: target,
            },
          });
          tl.from(target, { y: 20, opacity: 0 });
          tl.to(target, { y: 0, opacity: 1 });
        });
      }, sectionRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, []);

  if (!blockContent) return null;
  const {
    phasesContent,
    phasesList,
    accentColor: backgroundColor,
    scrollId,
  } = blockContent;

  return (
    <section
      ref={sectionRef}
      className={`py-16 px-8 full-screen ${scrollId} ${backgroundColorMapping(
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
          {phases && <PhaseList phases={phases} scrollId={scrollId} />}
        </div>
      </div>
    </section>
  );
};

export default Phases;
