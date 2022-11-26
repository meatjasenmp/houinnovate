import React, { useState } from "react";
import { slide as Menu, State } from "react-burger-menu";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import ContentEditor from "./ContentEditor";
import HamburgerMenu from "./HamburgerMenu";
import DownloadIcon from "./DownloadIcon";
import {
  page_siteOptionsPage_siteNavigation,
  page_siteOptionsPage_siteNavigation_navigation_sectionLinks,
  page_siteOptionsPage_siteNavigation_navigation_blockLinks,
  page_siteOptionsPage_annualReport,
} from "../api/__generated__/page";
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
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

interface BlockLinkProps {
  blockLinks:
    | (page_siteOptionsPage_siteNavigation_navigation_blockLinks | null)[]
    | undefined
    | null;
}

const AnnualReport = ({
  report,
}: {
  report: page_siteOptionsPage_annualReport | null | undefined;
}) => {
  const { annualReportDownload } = report || {};

  if (annualReportDownload && annualReportDownload.mediaItemUrl) {
    return (
      <div className="mt-10 mb-6">
        <a
          href={annualReportDownload.mediaItemUrl}
          target="_blank"
          rel="noreferrer"
          className={[
            "text-white flex items-center duration-300 ease-linear hover:text-innovate-smoke-gray",
            styles.download_link,
          ].join(" ")}
        >
          <span className="mr-4 font-kraftigBold">
            {report?.annualReportTitle}
          </span>
          <figure className="w-4">
            <DownloadIcon color="white" />
          </figure>
        </a>
        <div className="h-1 bg-white mt-6 w-[100px]" />
      </div>
    );
  }
  return <></>;
};

const SectionLinks = ({ sectionLinks, setMenuOpen }: SectionLinksProps) => {
  return (
    <div className="mb-2">
      <ul>
        {sectionLinks?.map((link, index) => {
          return (
            <li key={index} className="mb-10">
              <ScrollLink
                className="text-4xl font-kraftigBold text-white duration-300 ease-linear hover:text-innovate-smoke-gray"
                href="#"
                to={String(link?.anchorLabel)}
                containerId="page-wrap"
                onClick={() => {
                  handleScroll(link?.anchorLabel);
                  setMenuOpen(false);
                }}
              >
                {link?.label}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
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
    <div className={["text-white", styles.hou_innovate].join(" ")}>
      <ContentEditor content={houInnovate} />
    </div>
  );
};

const BlockLinks = ({ blockLinks }: BlockLinkProps) => {
  return (
    <div className="font-body">
      {blockLinks?.map((link, index) => {
        const { links } = link || {};
        return (
          <div className="mb-1 first:mb-12" key={index}>
            <h4 className="font-body text-white text-sm mb-1">{link?.label}</h4>
            <ul>
              {links?.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link?.pageUrl || ""}>
                      <a
                        className="text-innovate-smoke-gray text-sm duration-300 ease-linear hover:text-innovate-red"
                        target="_blank"
                      >
                        {link?.label}
                      </a>
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
  const [menuOpen, setMenuOpen] = useState<undefined | boolean>(undefined);
  const { sectionLinks, houinnovate, blockLinks } =
    navigation?.navigation || {};

  const handleStateChange = (state: State) => {
    if (state.isOpen) {
      document.body.classList.add("no-scroll");
    }
    if (!state.isOpen) {
      document.body.classList.remove("no-scroll");
      setMenuOpen(undefined);
    }
  };

  return (
    <Menu
      pageWrapId={pageWrapID}
      outerContainerId={outerContainerID}
      right
      customBurgerIcon={<HamburgerMenu />}
      onStateChange={handleStateChange}
      isOpen={menuOpen}
    >
      <SectionLinks sectionLinks={sectionLinks} setMenuOpen={setMenuOpen} />
      <AnnualReport report={annualReport} />
      <HouInnovate houInnovate={houinnovate} />
      <BlockLinks blockLinks={blockLinks} />
    </Menu>
  );
};

export default Navigation;
