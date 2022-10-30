import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import ContentEditor from "./ContentEditor";
import HamburgerMenu from "./HamburgerMenu";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import {
  page_siteOptionsPage_siteNavigation,
  page_siteOptionsPage_siteNavigation_navigation_sectionLinks,
  page_siteOptionsPage_siteNavigation_navigation_blockLinks,
  page_siteOptionsPage_annualReport,
} from "../pages/api/__generated__/page";
import styles from "../styles/components/Navigation.module.css";
import { handleScroll } from "./helpers";

interface NavigationProps {
  pageWrapID: string;
  outerContainerID: string;
  navigation: page_siteOptionsPage_siteNavigation | null | undefined;
  annualReport: page_siteOptionsPage_annualReport | null | undefined;
}

interface SectionLinksProps {
  sectionLinks:
    | (page_siteOptionsPage_siteNavigation_navigation_sectionLinks | null)[]
    | null
    | undefined;
}

interface BlockLinkProps {
  blockLinks:
    | (page_siteOptionsPage_siteNavigation_navigation_blockLinks | null)[]
    | undefined
    | null;
}

const handleStateChange = (state: any) => {
  if (state.isOpen) {
    document.body.classList.add("no-scroll");
  }
  if (!state.isOpen) {
    document.body.classList.remove("no-scroll");
  }
};

const AnnualReport = ({
  report,
}: {
  report: page_siteOptionsPage_annualReport | null | undefined;
}) => {
  const { annualReportDownload } = report || {};

  if (annualReportDownload && annualReportDownload.mediaItemUrl) {
    return (
      <div className={styles.annual_report}>
        <a href={annualReportDownload.mediaItemUrl} target="_blank">
          <span>{report?.annualReportTitle}</span>
          <FiDownload />
        </a>
        <div />
      </div>
    );
  }
  return <></>;
};

const SectionLinks = ({ sectionLinks }: SectionLinksProps) => {
  return (
    <div className={styles.section_links}>
      <ul>
        {sectionLinks?.map((link, index) => {
          return (
            <li key={index} className={styles.section_link_list_item}>
              <ScrollLink
                href="#"
                className={styles.section_link}
                to={String(link?.anchorLabel)}
                containerId="page-wrap"
                onClick={() => handleScroll(link?.anchorLabel)}
              >
                {link?.label}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
      <div />
    </div>
  );
};

const HouInnovate = ({
  houInnovate,
}: {
  houInnovate: string | null | undefined;
}) => {
  if (!houInnovate) return null;
  return (
    <div className={styles.hou_innovate}>
      <ContentEditor content={houInnovate} />
    </div>
  );
};

const BlockLinks = ({ blockLinks }: BlockLinkProps) => {
  return (
    <div className={styles.block_links}>
      {blockLinks?.map((link, index) => {
        const { links } = link || {};
        return (
          <div key={index}>
            <h4>{link?.label}</h4>
            <ul>
              {links?.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link?.pageUrl || ""}>
                      <a target="_blank">{link?.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const Navigation = ({
  pageWrapID,
  outerContainerID,
  navigation,
  annualReport,
}: NavigationProps) => {
  const { sectionLinks, houinnovate, blockLinks } =
    navigation?.navigation || {};

  return (
    <Menu
      pageWrapId={pageWrapID}
      outerContainerId={outerContainerID}
      right
      className={styles.site_navigation}
      customBurgerIcon={<HamburgerMenu />}
      onStateChange={handleStateChange}
    >
      <SectionLinks sectionLinks={sectionLinks} />
      <AnnualReport report={annualReport} />
      <HouInnovate houInnovate={houinnovate} />
      <BlockLinks blockLinks={blockLinks} />
    </Menu>
  );
};

export default Navigation;
