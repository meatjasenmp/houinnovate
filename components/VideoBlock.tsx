import { page_page_components_componentBlocks_video } from "../pages/api/__generated__/page";
import styles from "../styles/components/VideoBlock.module.css";
interface VideoBlockProps {
  video: page_page_components_componentBlocks_video | null;
}

const VideoBlock = ({ video }: VideoBlockProps) => {
  return (
    <video className={styles.video}>
      {video?.mediaItemUrl && <source src={video.mediaItemUrl} />}
    </video>
  );
};

export default VideoBlock;
