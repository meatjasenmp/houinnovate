import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_HeroBanner } from "../api/__generated__/page";
import ContentEditor from "./ContentEditor";
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
  };

  const handleMobileButtonClick = () => {
    setIsOpen(true);
  };

  const exitFullscreen = () => {
    if (screenfull.isEnabled && videoWrapRef.current) {
      screenfull.exit().then(() => {
        muteVideoAndExitFullScreen();
      });
    }
  };

  if (!blockContent) return null;

  const { videoCta, contentBlocks, videoUrl, videoPoster, videoPosterMobile } =
    blockContent;

  return (
    <>
      <section className="mb-3 overflow-hidden h-full">
        <div className="grid">
          <div
            className={["relative", styles.hero__banner_background].join(" ")}
          >
            <div className="innovate-lg:block hidden">
              <div className="bg-black/[.5] absolute top-0 bottom-0 left-0 right-0 z-[2] h-full w-full" />
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover ${
                  videoPlaying ? "hidden" : "block"
                }`}
              >
                <ImageBlock
                  image={videoPoster}
                  priority={true}
                  height="590"
                  width="1212"
                />
              </div>
            </div>
            <div ref={videoWrapRef}>
              <div
                className={`z-[999999999999] absolute top-0 left-0 right-0 p-5 ${
                  videoIsFullscreen ? "block" : "hidden"
                }`}
              >
                <button
                  className={styles.exit_screen_button}
                  onClick={exitFullscreen}
                >
                  <IoClose size="2rem" color="#F54932" />
                </button>
              </div>

              {videoUrl && (
                <div
                  className={`${
                    screenfull.isEnabled ? "innovate-lg:block" : "hidden"
                  }, player-wrapper`}
                >
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

          <div
            className={[
              "relative h-[800px] innovate-lg:hidden",
              styles.hero__banner_background,
            ].join(" ")}
          >
            <div className="bg-black/[.5] absolute top-0 bottom-0 left-0 right-0 z-[2] h-full w-full" />
            <ImageBlock
              image={videoPoster}
              priority={true}
              height="590"
              width="1212"
            />
          </div>

          <div
            className={[
              styles.content__wrap,
              "mx-4 text-white max-w-[350px] self-center relative sm:pl-12 sm:max-w-lg innovate-lg:max-w-2xl",
            ].join(" ")}
            ref={contentWrapRef}
          >
            <div className="relative grid">
              {contentBlocks &&
                contentBlocks.map((block, index) => (
                  <section className="animated_content_block z-[3]" key={index}>
                    <ContentEditor content={block?.contentBlock} />
                  </section>
                ))}
            </div>
            {videoCta && (
              <>
                <div
                  className={
                    screenfull.isEnabled ? "innovate-lg:block" : "hidden"
                  }
                >
                  <button
                    className="rounded-full py-2 px-4 text-xs text-white flex items-center bg-innovate-red mt-3 relative z-[10] innovate-lg:px-5 innovate-lg:py-3 innovate-lg:text-sm duration-300 ease-linear hover:bg-black"
                    onClick={handleButtonClick}
                  >
                    <span className="mr-1">{videoCta}</span>
                    <span>
                      <BiPlay size="1.25rem" />
                    </span>
                  </button>
                </div>
                <div
                  className={
                    !screenfull.isEnabled
                      ? "block innovate-lg:hidden"
                      : "hidden"
                  }
                >
                  <button
                    className="rounded-full py-2 px-4 text-xs text-white flex items-center bg-innovate-red mt-3 relative z-[10] innovate-lg:px-5 innovate-lg:py-3 innovate-lg:text-sm duration-300 ease-linear hover:bg-black"
                    onClick={handleMobileButtonClick}
                  >
                    <span className="mr-1">{videoCta}</span>
                    <span>
                      <BiPlay size="1.25rem" />
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <VideoComponent
        isOpen={isOpen}
        url={String(videoUrl)}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default HeroBanner;
