import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner } from "../pages/api/__generated__/page";
import { BackgroundColors } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import Button from "./Button";
import { BiPlay } from "@react-icons/all-files/bi/BiPlay";
import { gsap } from "gsap";
import ReactPlayer from "react-player/vimeo";
import styles from "../styles/components/HeroBanner.module.css";
import { useEffect, useRef, useState } from "react";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner;
}

const HeroBanner = ({ blockContent }: ComponentBlocksProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const contentWrapRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const contentBlockClassName = [
    "animated_content_block",
    styles.content__block,
  ].join(" ");

  useEffect(() => {
    if (contentWrapRef.current) {
      const ctx = gsap.context(() => {
        const targets = gsap.utils.toArray(".animated_content_block");
        const duration = 0.65;
        const hold = 4;
        targets.map((target, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            repeat: -1,
            repeatDelay: (targets.length - 1) * (duration + hold) - duration,
            defaults: {
              ease: "none",
              duration: duration,
            },
          });
          tl.from(target as any, { y: 20, opacity: 0 });
          tl.to(target as any, { y: -20, opacity: 0 }, "+=" + hold);
        });
      }, contentWrapRef.current);
      return () => {
        ctx.revert();
      };
    }
  }, []);

  const handleButtonClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        setIsVideoPlaying(false);
      } else {
        setIsVideoPlaying(true);
      }
    }
  };

  if (!blockContent) return null;

  const { video, videoCta, contentBlocks, videoUrl } = blockContent;
  return (
    <section className={styles.hero__banner_section}>
      <div className={styles.hero__banner}>
        <div className={styles.hero__banner_background}>
          <div className={styles.video}>
            {videoUrl && (
              <ReactPlayer
                url={String(videoUrl)}
                volume={0}
                muted={true}
                playing={true}
                loop={true}
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>

        <div className={styles.content__wrap} ref={contentWrapRef}>
          <div className="relative">
            {contentBlocks &&
              contentBlocks.map((block, index) => (
                <section className={contentBlockClassName} key={index}>
                  <ContentEditor content={block?.contentBlock} />
                </section>
              ))}
          </div>
          {videoCta && (
            <Button
              bgColor={BackgroundColors.RED}
              label={videoCta}
              icon={<BiPlay />}
              className={styles.hero__banner_button}
              onClick={handleButtonClick}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
