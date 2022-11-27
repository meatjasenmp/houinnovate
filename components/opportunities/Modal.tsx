import React, { useLayoutEffect, useRef } from "react";
import ReactModal from "react-modal";
import ProgressBar from "../ProgressBar";
import LoadingSpinner from "../LoadingSpinner";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useOpportunity } from "../../api/opportunities/opportunity";
import ContentEditor from "../ContentEditor";
import { Phase } from "../helpers";
import { Colors } from "../../styles/helpers";
import { projectBasedOpportunity } from "../../api/opportunities/__generated__/projectBasedOpportunity";
import { gsap } from "gsap";

interface ModalProps {
  id: number | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContainer = () => (
  <div className="flex flex-col h-full items-center justify-center">
    <div className="w-8 h-8">
      <LoadingSpinner fill="#1F2CA8" />
    </div>
  </div>
);

const ModalContent = ({
  data,
}: {
  data: projectBasedOpportunity | undefined;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { projectBasedOpportunity } = data || {};
  const { progress, alphanumericLabel, contentBlocks, dataFields } =
    projectBasedOpportunity?.communityAndOpportunityPopUps || {};

  useLayoutEffect(() => {
    if (contentRef.current) {
      const ctx = gsap.context(() => {
        const aside = contentRef?.current?.querySelector("aside");
        const contentWrap = contentRef?.current?.querySelector(".content_wrap");
        const targets = [aside, contentWrap];
        const duration = 0.1;
        const hold = 0.05;
        targets.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
          });
          tl.from(target, { y: 20, opacity: 0 });
          tl.to(target, { y: 0, opacity: 1 });
        });
      }, contentRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, []);

  return (
    <div
      className="flex flex-col max-w-screen-2xl mt-8 w-full h-full mx-auto px-4"
      ref={contentRef}
    >
      <div className="innovate-lg:flex">
        <aside className="innovate-lg:mr-16 innovate-lg:w-1/2">
          {alphanumericLabel && <h5>{alphanumericLabel}.</h5>}
          {projectBasedOpportunity?.title && (
            <h1 className="innovate-lg: text-4xl xl:text-6xl">
              {projectBasedOpportunity?.title}
            </h1>
          )}
          {progress?.showProgressLabel && progress?.progressLabel && (
            <div className="my-6">
              <span className="text-sm">
                Funding: {progress?.progressLabel}
              </span>
            </div>
          )}
          {dataFields && dataFields.length > 0 && (
            <div className="my-6">
              {dataFields?.map((dataField, index) => (
                <div className="mb-2 last:mb-0" key={index}>
                  <span className="text-sm">
                    {dataField?.dataField?.labelField}:{" "}
                    {dataField?.dataField?.contentField}
                  </span>
                </div>
              ))}
            </div>
          )}
        </aside>
        <div className="innovate-lg:w-4/5 content_wrap">
          {contentBlocks?.map((contentBlock, index) => (
            <div className="modal_content last:mb-6" key={index}>
              <ContentEditor content={contentBlock?.content} />
              <div
                className={`h-[4px] my-6 ${
                  index === 0 && contentBlocks.length > 1 ? "block" : "hidden"
                } ${
                  progress?.currentPhase === Phase.COMPLETION
                    ? "bg-white"
                    : "bg-black"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        {progress?.currentPhase && (
          <h3 className="capitalize">
            {progress?.currentPhase}{" "}
            {progress?.currentPhase !== Phase.COMPLETION && "Phase"}
          </h3>
        )}
        {progress?.currentPhase !== Phase.COMPLETION && (
          <div className="full-screen">
            <ProgressBar
              currentPhase={progress?.currentPhase}
              accent={Colors.BLUE}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Modal = ({ id, isOpen, setIsOpen }: ModalProps) => {
  const { data, loading } = useOpportunity(String(id));
  const { projectBasedOpportunity } = data || {};
  const { progress } =
    projectBasedOpportunity?.communityAndOpportunityPopUps || {};

  const handleClose = () => {
    setIsOpen(false);
    history.pushState(null, "", "/");
  };

  return (
    <ReactModal className="w-full h-full z-[1000] bg-white" isOpen={isOpen}>
      <div
        className={`flex flex-col overflow-y-scroll overflow-x-hidden h-full px-6 pt-6 ${
          progress?.currentPhase === Phase.COMPLETION
            ? "bg-innovate-blue"
            : "bg-white"
        }`}
      >
        <button className="self-end" onClick={handleClose}>
          <IoClose size="2rem" />
        </button>

        {loading && <LoadingContainer />}

        {!loading && <ModalContent data={data} />}
      </div>
    </ReactModal>
  );
};

export default Modal;
