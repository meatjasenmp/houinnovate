import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import {
  navigation,
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

export default function Navigation({
  pageWrapID,
  outerContainerID,
  navigation,
}: NavigationProps) {
  const { sectionLinks } =
    navigation?.siteOptionsPage?.siteNavigation?.navigation || {};

  return (
    <Menu
      pageWrapId={pageWrapID}
      outerContainerId={outerContainerID}
      right
      width={"100%"}
    >
      <SectionLinks sectionLinks={sectionLinks} />
    </Menu>
  );
}
