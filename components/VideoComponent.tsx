import React from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player/vimeo";
ReactModal.setAppElement("#__next");

const customStyles = {
  content: {
    backgroundColor: "black",
  },
};

const VideoComponent = ({ isOpen, url }: { isOpen: boolean; url: string }) => {
  console.log(isOpen);
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <ReactPlayer
        url={url}
        loop={true}
        playing={true}
        width="100%"
        height="100%"
        controls={true}
        volume={0.5}
      />
    </ReactModal>
  );
};

export default VideoComponent;
