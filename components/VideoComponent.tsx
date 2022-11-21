import React from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player/vimeo";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
ReactModal.setAppElement("#__next");

interface VideoComponentProps {
  url: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoComponent = ({ isOpen, url, setIsOpen }: VideoComponentProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal isOpen={isOpen} className="w-full h-full z-[1000] bg-black">
      <div className="flex flex-col h-full p-6">
        <button className="self-end" onClick={handleClose}>
          <IoClose size="2rem" color="white" />
        </button>
        <ReactPlayer
          url={url}
          loop={true}
          playing={true}
          width="100%"
          height="100%"
          controls={true}
          volume={0.5}
        />
      </div>
    </ReactModal>
  );
};

export default VideoComponent;
