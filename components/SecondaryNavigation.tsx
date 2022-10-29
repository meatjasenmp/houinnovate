import { page_siteOptionsPage_siteNavigation } from "../pages/api/__generated__/page";
import styles from "../styles/components/SecondaryNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

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

export default SecondaryNavigation;
