import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner } from "../api/__generated__/page";
import { BackgroundColors } from "../styles/helpers";
import ContentEditor from "./ContentEditor";
import Button from "./Button";
import { BiPlay } from "@react-icons/all-files/bi/BiPlay";
import { gsap } from "gsap";
import ReactPlayer from "react-player/vimeo";
import styles from "../styles/components/HeroBanner.module.css";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import screenfull from "screenfull";
import ImageBlock from "./ImageBlock";
import VideoComponent from "./VideoComponent";

interface ComponentBlocksProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner;
}

const HeroBanner = ({ blockContent }: ComponentBlocksProps) => {
  const videoRef = useRef<ReactPlayer>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const contentWrapRef = useRef<HTMLDivElement>(null);
  const [videoIsFullscreen, setVideoIsFullscreen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoParams, setVideoParams] = useState({
    volume: 0,
    muted: true,
  });

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

  const handleButtonClick = () => {
    if (screenfull.isEnabled && videoWrapRef.current) {
      screenfull.request(videoWrapRef.current).then(() => {
        enableFullScreen();
      });
      return;
    }
    // setIsOpen(true);
  };

  const exitFullscreen = () => {
    if (screenfull.isEnabled && videoWrapRef.current) {
      screenfull.exit().then(() => {
        muteVideoAndExitFullScreen();
      });
    }
  };

  if (!blockContent) return null;

  const { videoCta, contentBlocks, videoUrl, videoPoster } = blockContent;

  return (
    <>
      <section className={styles.hero__banner_section}>
        <div className={styles.hero__banner}>
          <div className={styles.hero__banner_background}>
            <div className={styles.tint} />
            <div
              className={styles.poster}
              style={{ display: videoPlaying ? "none" : "block" }}
            >
              <ImageBlock
                image={videoPoster}
                priority={true}
                height="590"
                width="1212"
              />
            </div>
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

              {videoUrl && (
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    ref={videoRef}
                    url={String(videoUrl)}
                    volume={videoParams.volume}
                    muted={videoParams.muted}
                    playing={true}
                    loop={true}
                    width="100%"
                    height="100%"
                    playsinline={true}
                    onStart={() => setVideoPlaying(true)}
                  />
                </div>
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
      <VideoComponent isOpen={isOpen} url={String(videoUrl)} />
    </>
  );
};

export default HeroBanner;
