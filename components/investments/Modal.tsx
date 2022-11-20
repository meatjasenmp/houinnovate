import React from "react";
import ReactModal from "react-modal";
import ProgressBar, { Phase } from "../ProgressBar";
import LoadingSpinner from "../LoadingSpinner";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useInvestment } from "../../api/investments/investment";
import ContentEditor from "../ContentEditor";
import { Colors } from "../../styles/helpers";

interface ModalProps {
  id: number | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContainer = () => (
  <div className="flex flex-col h-full items-center justify-center">
    <LoadingSpinner fill="#DCE63C" />
  </div>
);

const Modal = ({ id, isOpen, setIsOpen }: ModalProps) => {
  const { data, loading } = useInvestment(String(id));
  const { communityInvestment } = data || {};
  const { progress, alphanumericLabel, contentBlocks, dataFields } =
    communityInvestment?.communityAndOpportunityPopUps || {};

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal className="w-full h-full z-[1000] bg-white" isOpen={isOpen}>
      <div
        className={`flex flex-col overflow-y-scroll overflow-x-hidden h-full px-6 pt-6 ${
          progress?.currentPhase === Phase.COMPLETED
            ? "bg-innovate-neon"
            : "bg-white"
        }`}
      >
        <button className="self-end" onClick={handleClose}>
          <IoClose size="2rem" />
        </button>

        {loading && <LoadingContainer />}

        {!loading && (
          <div className="flex flex-col max-w-screen-xl mt-8 w-full h-full mx-auto">
            <div className="innovate-lg:flex">
              <aside className="innovate-lg:mr-16 innovate-lg:w-2/5">
                {alphanumericLabel && <h5>{alphanumericLabel}.</h5>}
                {communityInvestment?.title && (
                  <h1>{communityInvestment?.title}</h1>
                )}
                {progress?.showProgressLabel && progress?.progressLabel && (
                  <div className="my-6">
                    <span>Funding: {progress?.progressLabel}</span>
                  </div>
                )}
                {dataFields?.map((dataField, index) => (
                  <div className="my-6" key={index}>
                    <span>
                      {dataField?.dataField?.labelField}:{" "}
                      {dataField?.dataField?.contentField}
                    </span>
                  </div>
                ))}
              </aside>
              <div className="innovate-lg:w-4/5">
                {contentBlocks?.map((contentBlock, index) => (
                  <div className="last:mb-6" key={index}>
                    <ContentEditor content={contentBlock?.content} />
                    <div
                      className={`h-[4px] my-6 ${
                        index === 0 && contentBlocks.length > 1
                          ? "block"
                          : "hidden"
                      } ${
                        progress?.currentPhase === Phase.COMPLETED
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
                  {progress?.currentPhase !== Phase.COMPLETED && "Phase"}
                </h3>
              )}
              {progress?.currentPhase !== Phase.COMPLETED && (
                <div className="full-screen">
                  <ProgressBar
                    currentPhase={progress?.currentPhase}
                    progressPercentage={progress?.progressPercentage}
                    accent={Colors.NEON}
                    height="35px"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default Modal;