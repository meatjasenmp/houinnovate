import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import ContentEditor from "./ContentEditor";
import HamburgerMenu from "../styles/components/HamburgerMenu";
import {
  navigation,
  navigation_siteOptionsPage_siteNavigation_navigation_blockLinks,
  navigation_siteOptionsPage_siteNavigation_navigation_sectionLinks,
} from "../pages/api/__generated__/navigation";
import styles from "../styles/components/Navigation.module.css";

interface NavigationProps {
  pageWrapID: string;
  outerContainerID: string;
  navigation: navigation | undefined;
}

interface SectionLinksProps {
  sectionLinks:
    | (navigation_siteOptionsPage_siteNavigation_navigation_sectionLinks | null)[]
    | null
    | undefined;
}

interface BlockLinkProps {
  blockLinks:
    | (navigation_siteOptionsPage_siteNavigation_navigation_blockLinks | null)[]
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

const SectionLinks = ({ sectionLinks }: SectionLinksProps) => {
  return (
    <div className={styles.section_links}>
      <ul>
        {sectionLinks?.map((link, index) => {
          return (
            <li key={index} className={styles.section_link_list_item}>
              <Link href={`#${link?.anchorLabel}`} scroll={false}>
                <a className={styles.section_link}>{link?.label}</a>
              </Link>
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
                      <a>{link?.label}</a>
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
    navigation?.siteOptionsPage?.siteNavigation?.navigation || {};

  return (
    <Menu
      pageWrapId={pageWrapID}
      outerContainerId={outerContainerID}
      right
      width={"100%"}
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
