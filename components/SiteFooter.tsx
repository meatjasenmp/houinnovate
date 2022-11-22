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
import ImageAsset from "./ImageAsset";
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
    <div
      className={[
        styles.get_in_touch,
        "mb-16 innovate-lg:w-2/6 innovate-lg:mr-10",
      ].join(" ")}
    >
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
    <div className="mb-16 innovate-lg:mb-0 innovate-lg:w-2/6 innovate-lg:mr-10">
      <figure className="w-13 mb-8">
        <ImageAsset image={ionLogo} width="115" height="61" />
      </figure>
      <ContentEditor content={address} />
      <div className="text-white">
        <div className="bg-white my-6 h-[2px] w-[40%]" />
        <h6 className="mb-4">{socialMedia?.header}</h6>
        <ul>
          {socialMedia?.socialMediaLink?.map((socialMediaLink, index) => (
            <li className="mb-4 last:mb-0 text-sm" key={index}>
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
            {/*<figure className="absolute right-[1rem] bottom-[-0.2rem] w-8">*/}
            {/*  <ArrowLinkIcon color="white" />*/}
            {/*</figure>*/}
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
    <div className="mb-16 last:mb-0 innovate-lg:m-b0 innovate-lg:w-2/6">
      <figure className="w-13 mb-8">
        <ImageAsset image={riceUniversityLogo} width="150" height="97" />
      </figure>
      <ContentEditor content={riceAddress} />
      <div>
        <div className="bg-white my-6 h-[2px] w-[40%]" />
        <h6 className="mb-4">{riceSocialMedia?.riceSocialHeader}</h6>
        <ul>
          {riceSocialMedia?.riceSocialMediaLink?.map(
            (socialMediaLink, index) => (
              <li className="text-sm" key={index}>
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
    <div className="innovate-lg:mt-16">
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
      <div className="max-w-lg innovate-lg:max-w-screen-innovate-lg innovate-lg:mx-auto">
        <header className="mb-14">
          <h1>{header}</h1>
        </header>
        <div className="flex flex-col innovate-lg:flex-row">
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
