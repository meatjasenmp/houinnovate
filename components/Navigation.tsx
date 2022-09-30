import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import ContentEditor from "./ContentEditor";
import {
  navigation,
  navigation_siteOptionsPage_siteNavigation_navigation_blockLinks,
  navigation_siteOptionsPage_siteNavigation_navigation_sectionLinks,
} from "../pages/api/__generated__/navigation";
import styles from "./Navigation.module.css";

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

const SectionLinks = ({ sectionLinks }: SectionLinksProps) => {
  return (
    <ul>
      {sectionLinks?.map((link, index) => {
        return (
          <li key={index}>
            <Link href={`#${link?.anchorLabel}`} scroll={false}>
              <a>{link?.label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const HouInnovate = ({
  houInnovate,
}: {
  houInnovate: string | null | undefined;
}) => {
  if (!houInnovate) return null;
  return (
    <div>
      <ContentEditor content={houInnovate} />
    </div>
  );
};

const BlockLinks = ({ blockLinks }: BlockLinkProps) => {
  return (
    <ul>
      {blockLinks?.map((link, index) => {
        const { links } = link || {};
        return (
          <li key={index}>
            <h4>{link?.label}</h4>
            {links?.map((link, index) => {
              return (
                <div key={index}>
                  <Link href={link?.pageUrl || ""}>
                    <a>{link?.label}</a>
                  </Link>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
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
    >
      <SectionLinks sectionLinks={sectionLinks} />
      <HouInnovate houInnovate={houinnovate} />
      <BlockLinks blockLinks={blockLinks} />
    </Menu>
  );
};

export default Navigation;
