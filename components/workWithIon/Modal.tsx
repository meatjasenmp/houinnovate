import React from "react";
import { iONJobs } from "../../api/jobs/__generated__/iONJobs";
import useJob from "../../api/jobs/job";
import LoadingSpinner from "../LoadingSpinner";
import ReactModal from "react-modal";
import JobPosting from "./JobPosting";

interface ModalProps {
  id: number | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContent = ({
  data,
  handleClose,
  id,
}: {
  data: iONJobs | undefined;
  handleClose: () => void;
  id: number | undefined;
}) => {
  return <JobPosting data={data} handleClose={handleClose} id={id} />;
};

const LoadingContainer = () => (
  <div className="flex flex-col h-screen items-center justify-center">
    <div className="w-8 h-8">
      <LoadingSpinner fill="#F54932" />
    </div>
  </div>
);

const Modal = ({ id, isOpen, setIsOpen }: ModalProps) => {
  const { data, loading, error } = useJob(String(id) || "");

  const handleClose = () => {
    setIsOpen(false);
    history.pushState(null, "", "/");
  };

  return (
    <ReactModal className="w-full h-full z-[1000] bg-white" isOpen={isOpen}>
      <div className="flex flex-col overflow-y-scroll overflow-x-hidden h-full px-6 pt-6">
        {loading || error ? (
          <LoadingContainer />
        ) : (
          <ModalContent handleClose={handleClose} data={data} id={id} />
        )}
      </div>
    </ReactModal>
  );
};

export default Modal;
