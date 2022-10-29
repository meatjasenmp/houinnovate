import { page_siteOptionsPage_siteNavigation } from "../pages/api/__generated__/page";
import styles from "../styles/components/SecondaryNavigation.module.css";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useRouter } from "next/router";
import { handleScroll } from "./helpers";

interface SecondaryNavigationProps {
  nav: page_siteOptionsPage_siteNavigation | null | undefined;
}

const SecondaryNavigation = ({ nav }: SecondaryNavigationProps) => {
  const router = useRouter();
  const navigationStyles = [
    styles.secondary_navigation,
    router.asPath !== "/" && styles.secondary_navigation_page,
  ].join(" ");

  if (!nav) return <></>;

  return (
    <div className={navigationStyles}>
      <ul>
        {nav.navigation?.sectionLinks?.map((link, index) => {
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

export default SecondaryNavigation;
