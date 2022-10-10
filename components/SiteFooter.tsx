import ContentEditor from "./ContentEditor";
import ImageBlock from "./ImageBlock";
import Link from "next/link";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";
import {
  page_siteOptionsPage_siteFooter_footerBlocks,
  page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch,
  page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict,
  page_siteOptionsPage_siteFooter_footerBlocks_SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity,
} from "../pages/api/__generated__/page";

import styles from "../styles/components/SiteFooter.module.css";
import { accentColor } from "../styles/helpers";

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
  const { header, contentBlocks } = blockContent;
  const className = [styles.get_in_touch, styles.footer_column].join(" ");
  return (
    <div className={className}>
      <header className="prose prose-white">
        <h1>{header}</h1>
      </header>
      {contentBlocks?.map((block, index) => (
        <ContentEditor key={index} content={block?.content} />
      ))}
    </div>
  );
};

const IonDistrict = ({ blockContent }: IonDistrictProps) => {
  const { ionLogo, address, socialMedia, ctaLinks } = blockContent;
  return (
    <div className={styles.footer_column}>
      <figure className={styles.logo}>
        <ImageBlock image={ionLogo} width="167" height="89" />
      </figure>
      <ContentEditor content={address} />
      <div className={styles.social_media}>
        <h4>{socialMedia?.header}</h4>
        <ul>
          {socialMedia?.socialMediaLink?.map((socialMediaLink, index) => (
            <li key={index}>
              <Link href={socialMediaLink?.url || ""}>
                <a target="_blank">{socialMediaLink?.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section className={styles.cta_links}>
        {ctaLinks?.map((ctaLink, index) => (
          <div className={styles.cta_link_container} key={index}>
            <ContentEditor content={ctaLink?.cta} />
            <figure className={styles.cta_link_icon}>
              <FiArrowUpRight color="white" size="3rem" />
            </figure>
          </div>
        ))}
      </section>
    </div>
  );
};

const RiceUniversity = ({ blockContent }: RiceUniversityProps) => {
  const { riceUniversityLogo, riceAddress, riceSocialMedia } = blockContent;
  return (
    <div className={styles.footer_column}>
      <figure className={styles.logo}>
        <ImageBlock image={riceUniversityLogo} width="330" height="176" />
      </figure>
      <ContentEditor content={riceAddress} />
      <div className={styles.social_media}>
        <h4>{riceSocialMedia?.riceSocialHeader}</h4>
        <ul>
          {riceSocialMedia?.riceSocialMediaLink?.map(
            (socialMediaLink, index) => (
              <li key={index}>
                <Link href={socialMediaLink?.url || ""}>
                  <a target="_blank">{socialMediaLink?.label}</a>
                </Link>
              </li>
            )
          )}
        </ul>
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

const TermsAndConditions = () => {
  const currentYear = new Date().getFullYear();
  const termsClassName = [
    styles.terms_and_conditions,
    "prose prose-white",
  ].join(" ");
  return (
    <div className={termsClassName}>
      <p>&copy;{currentYear} Rice University. All rights reserved.</p>
    </div>
  );
};

const SiteFooter = ({ footerBlocks }: SiteFooterProps) => {
  const className = [styles.site_footer, "full-screen"].join(" ");
  return (
    <footer className={className}>
      <FooterBlocks footerBlocks={footerBlocks} />
      <TermsAndConditions />
    </footer>
  );
};

export default SiteFooter;
