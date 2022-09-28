import { page_page_components_componentBlocks_video } from "../pages/api/__generated__/page";

interface VideoBlockProps {
  video: page_page_components_componentBlocks_video | null;
}

const VideoBlock = ({ video }: VideoBlockProps) => {
  return (
    <video width="100%" height="auto">
      {video?.mediaItemUrl && <source src={video.mediaItemUrl} />}
    </video>
  );
};

export default VideoBlock;
