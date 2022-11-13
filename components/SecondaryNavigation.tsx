import { page_siteOptionsPage_siteNavigation } from "../pages/api/__generated__/page";
import styles from "../styles/components/SecondaryNavigation.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleScroll } from "./helpers";

interface SecondaryNavigationProps {
  nav: page_siteOptionsPage_siteNavigation | null | undefined;
}

const SecondaryNavigation = ({ nav }: SecondaryNavigationProps) => {
  const router = useRouter();

  const isHome = router.pathname === "/";

  const navigationStyles = [
    styles.secondary_navigation,
    !isHome && styles.secondary_navigation_page,
  ].join(" ");

  if (!nav) return <></>;

  return (
    <div className={navigationStyles}>
      <ul>
        {nav.navigation?.sectionLinks?.map((link, index) => {
          if (isHome && link?.label !== "Home") {
            return (
              <li key={index} className={styles.section_link_list_item}>
                <ScrollLink
                  href="#"
                  className={styles.section_link}
                  to={String(link?.anchorLabel)}
                  containerId="page-wrap"
                  onClick={() => handleScroll(link?.anchorLabel)}
                  hashSpy={true}
                >
                  {link?.label}
                </ScrollLink>
              </li>
            );
          }
          if (link?.label !== "Home") {
            return (
              <li key={index} className={styles.section_link_list_item}>
                <Link
                  href={{
                    pathname: "/",
                    query: { scrollTo: `${link?.anchorLabel}` },
                  }}
                  className={styles.section_link}
                >
                  {link?.label}
                </Link>
              </li>
            );
          }
        })}
      </ul>
      <div />
    </div>
  );
};

export default SecondaryNavigation;
