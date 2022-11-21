import ContentEditor from "./ContentEditor";
import Link from "next/link";
import UpArrowIcon from "./UpArrowIcon";
import ArrowLinkIcon from "./ArrowLinkIcon";
import { animateScroll } from "react-scroll";
import NewsLetterSubscribe from "./NewsLetterSubscribe";
import {
  page_siteOptionsPage_siteFooter_footerBlocks,
  page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch,
  page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict,
  page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity,
} from "../api/__generated__/page";

import styles from "../styles/components/SiteFooter.module.css";
import ImageAsset from "../styles/components/ImageAsset";
import { useScrollToSection } from "./helpers";

enum FooterComponents {
  GET_IN_TOUCH = "SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch",
  ION_DISTRICT = "SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict",
  RICE_UNIVERSITY = "SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity",
}

interface SiteFooterProps {
  footerBlocks:
    | (page_siteOptionsPage_siteFooter_footerBlocks | null)[]
    | null
    | undefined;
  header?: string | null | undefined;
}

interface GetInTouchProps {
  blockContent: page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch;
}

interface IonDistrictProps {
  blockContent: page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict;
}

interface RiceUniversityProps {
  blockContent: page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity;
}

const GetInTouch = ({ blockContent }: GetInTouchProps) => {
  const { contentBlocks } = blockContent;
  return (
    <div className={[styles.get_in_touch, "mb-16"].join(" ")}>
      {contentBlocks?.map((block, index) => (
        <ContentEditor key={index} content={block?.content} />
      ))}
    </div>
  );
};

const IonDistrict = ({ blockContent }: IonDistrictProps) => {
  const { ionLogo, address, socialMedia, ctaLinks, newsletterCta } =
    blockContent;
  return (
    <div className="pb-16 last:pb-0">
      <figure className="w-13 mb-8">
        <ImageAsset image={ionLogo} width="115" height="61" />
      </figure>
      <ContentEditor content={address} />
      <div className="text-white font-kraftigBold">
        <div className="bg-white my-6 h-[2px] w-[40%]" />
        <h4>{socialMedia?.header}</h4>
        <ul>
          {socialMedia?.socialMediaLink?.map((socialMediaLink, index) => (
            <li className="mb-4 last:mb-0" key={index}>
              <Link href={socialMediaLink?.url || ""}>
                <a
                  className="text-innovate-smoke-gray font-body"
                  target="_blank"
                >
                  {socialMediaLink?.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-white my-6 h-[2px] w-[40%]" />
      </div>
      <section className="mt-10 mb-8 last:mb-0">
        {ctaLinks?.map((ctaLink, index) => (
          <div
            className={[styles.cta_link_container, "relative"].join(" ")}
            key={index}
          >
            <ContentEditor content={ctaLink?.cta} />
            <figure className="absolute right-[2rem] bottom-[-0.3rem] w-8">
              <ArrowLinkIcon color="white" />
            </figure>
          </div>
        ))}
      </section>
      <section className="mt-8">
        <article className={[styles.newsletter_cta, "mb-6"].join(" ")}>
          <ContentEditor content={newsletterCta} />
        </article>
        <NewsLetterSubscribe />
      </section>
    </div>
  );
};

const RiceUniversity = ({ blockContent }: RiceUniversityProps) => {
  const { riceUniversityLogo, riceAddress, riceSocialMedia } = blockContent;
  return (
    <div className="mb-16 last:mb-0">
      <figure className="w-13 mb-8">
        <ImageAsset image={riceUniversityLogo} width="150" height="97" />
      </figure>
      <ContentEditor content={riceAddress} />
      <div>
        <div className="bg-white my-6 h-[2px] w-[40%]" />
        <h4 className="font-body">{riceSocialMedia?.riceSocialHeader}</h4>
        <ul>
          {riceSocialMedia?.riceSocialMediaLink?.map(
            (socialMediaLink, index) => (
              <li key={index}>
                <Link href={socialMediaLink?.url || ""}>
                  <a className="text-innovate-smoke-gray" target="_blank">
                    {socialMediaLink?.label}
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="bg-white my-6 h-[2px] w-[40%]" />
      </div>
    </div>
  );
};

const FooterBlocks = ({ footerBlocks }: SiteFooterProps) => {
  return (
    <>
      {footerBlocks?.map((footerBlock, index) => {
        if (footerBlock) {
          switch (footerBlock.__typename as string) {
            case FooterComponents.GET_IN_TOUCH:
              const getInTouchBlock =
                footerBlock as page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch;
              return <GetInTouch key={index} blockContent={getInTouchBlock} />;
            case FooterComponents.ION_DISTRICT:
              const ionBlock =
                footerBlock as page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict;
              return <IonDistrict key={index} blockContent={ionBlock} />;
            case FooterComponents.RICE_UNIVERSITY:
              const riceBlock =
                footerBlock as page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity;
              return <RiceUniversity key={index} blockContent={riceBlock} />;
          }
        }
      })}
    </>
  );
};

const BackToTop = () => {
  return (
    <button
      className="w-8 absolute right-[1rem] bottom-[2rem] "
      onClick={() => animateScroll.scrollToTop()}
    >
      <UpArrowIcon color="white" />
    </button>
  );
};

const TermsAndConditions = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p className="text-xs text-innovate-smoke-gray">
        &copy;{currentYear} Rice University. All rights reserved.
      </p>
    </div>
  );
};

const SiteFooter = ({ footerBlocks, header }: SiteFooterProps) => {
  useScrollToSection("contacts");

  return (
    <footer className="py-16 px-8 full-screen bg-innovate-black" id="contacts">
      <div className="max-w=[990px] mx-auto">
        <header className="mb-14">
          <h1>{header}</h1>
        </header>
        <div className="flex flex-col">
          <FooterBlocks footerBlocks={footerBlocks} />
        </div>
      </div>
      <div>
        <TermsAndConditions />
      </div>
      <BackToTop />
    </footer>
  );
};

export default SiteFooter;
