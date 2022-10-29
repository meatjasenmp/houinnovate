import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { Link as ScrollLink, scroller } from "react-scroll";
import ContentEditor from "./ContentEditor";
import HamburgerMenu from "./HamburgerMenu";
import {
  page_siteOptionsPage_siteNavigation,
  page_siteOptionsPage_siteNavigation_navigation_sectionLinks,
  page_siteOptionsPage_siteNavigation_navigation_blockLinks,
} from "../pages/api/__generated__/page";
import styles from "../styles/components/Navigation.module.css";

interface NavigationProps {
  pageWrapID: string;
  outerContainerID: string;
  navigation: page_siteOptionsPage_siteNavigation | null | undefined;
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

const handleScroll = (to: string | null | undefined) => {
  scroller.scrollTo(String(to), {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const SectionLinks = ({ sectionLinks }: SectionLinksProps) => {
  return (
    <div className={styles.section_links}>
      <ul>
        {sectionLinks?.map((link, index) => {
          return (
            <li key={index} className={styles.section_link_list_item}>
              <ScrollLink
                href={`#${link?.anchorLabel}`}
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
}: NavigationProps) => {
  const { sectionLinks, houinnovate, blockLinks } =
    navigation?.navigation || {};

  return (
    <Menu
      pageWrapId={pageWrapID}
      outerContainerId={outerContainerID}
      right
      width={"400px"}
      className={styles.site_navigation}
      customBurgerIcon={<HamburgerMenu />}
      onStateChange={handleStateChange}
    >
      <SectionLinks sectionLinks={sectionLinks} />
      <HouInnovate houInnovate={houinnovate} />
      <BlockLinks blockLinks={blockLinks} />
    </Menu>
  );
};

export default Navigation;
