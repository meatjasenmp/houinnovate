import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner } from "../pages/api/__generated__/page";
import { BackgroundColors } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import Button from "./Button";
import { BiPlay } from "@react-icons/all-files/bi/BiPlay";
import { gsap } from "gsap";
import ReactPlayer from "react-player/vimeo";
import styles from "../styles/components/HeroBanner.module.css";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import screenfull from "screenfull";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner;
}

const HeroBanner = ({ blockContent }: ComponentBlocksProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const contentWrapRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoIsFullscreen, setVideoIsFullscreen] = useState(false);
  const [videoParams, setVideoParams] = useState({
    volume: 0,
    muted: true,
  });

  const contentBlockClassName = [
    "animated_content_block",
    styles.content__block,
  ].join(" ");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
      });
    }
  }, []);

  useEffect(() => {
    if (
      contentWrapRef.current &&
      videoRef.current &&
      !videoRef.current.paused
    ) {
      const ctx = gsap.context(() => {
        const targets = gsap.utils.toArray(".animated_content_block");
        const duration = 0.65;
        const hold = 4;
        targets.map((target: any, index) => {
          const tl = gsap.timeline({
            delay: duration * index + hold * index,
            repeat: -1,
            repeatDelay: (targets.length - 1) * (duration + hold) - duration,
            defaults: {
              ease: "none",
              duration: duration,
            },
          });
          tl.from(target, { y: 20, opacity: 0 });
          tl.to(target, { y: -20, opacity: 0 }, "+=" + hold);
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
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const muteVideoAndExitFullScreen = () => {
    setVideoIsFullscreen(false);
    setVideoParams({
      volume: 0,
      muted: true,
    });
  };

  const enableFullScreen = () => {
    setVideoIsFullscreen(true);
    setVideoParams({
      volume: 1,
      muted: false,
    });
  };

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        if (!screenfull.isFullscreen) {
          muteVideoAndExitFullScreen();
        }
      });
    }
  }, []);

  // const handleButtonClick = () => {
  //   if (screenfull.isEnabled && videoWrapRef.current) {
  //     screenfull.request(videoWrapRef.current).then(() => {
  //       enableFullScreen();
  //     });
  //   }
  // };

  const exitFullscreen = () => {
    if (screenfull.isEnabled && videoWrapRef.current) {
      screenfull.exit().then(() => {
        muteVideoAndExitFullScreen();
      });
    }
  };

  if (!blockContent) return null;

  const { videoCta, contentBlocks, videoUrl, videoTest } = blockContent;
  console.log(videoTest?.mediaItemUrl);
  return (
    <section className={styles.hero__banner_section}>
      <div className={styles.hero__banner}>
        <div className={styles.hero__banner_background}>
          <div className={styles.video} ref={videoWrapRef}>
            <div
              className={styles.video__overlay}
              style={{ display: videoIsFullscreen ? "block" : "none" }}
            >
              <button
                className={styles.exit_screen_button}
                onClick={exitFullscreen}
              >
                <IoClose size="2rem" color="#F54932" />
              </button>
            </div>

            {videoTest?.mediaItemUrl && (
              // <ReactPlayer
              //   ref={videoRef}
              //   url={String(videoTest?.mediaItemUrl)}
              //   volume={videoParams.volume}
              //   muted={videoParams.muted}
              //   playing={true}
              //   loop={true}
              //   width="100%"
              //   height="100%"
              // />
              <video className={styles.video} ref={videoRef} muted loop>
                <source
                  src={String(videoTest?.mediaItemUrl)}
                  type="video/mp4"
                />
              </video>
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
