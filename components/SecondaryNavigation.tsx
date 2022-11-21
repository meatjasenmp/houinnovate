import { page_siteOptionsPage_siteNavigation } from "../api/__generated__/page";
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

  if (!nav) return <></>;

  return (
    <div className="none absolute top-[6rem] right-[4rem] z-10 innovate-lg:block">
      <ul className="flex">
        {nav.navigation?.sectionLinks?.map((link, index) => {
          if (isHome && link?.label !== "Home") {
            return (
              <li key={index} className={`mr-8 last:mr-0 text-white`}>
                <ScrollLink
                  href="#"
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
              <li key={index} className={`mr-8 last:mr-0 text-black`}>
                <Link
                  href={{
                    pathname: "/",
                    query: { scrollTo: `${link?.anchorLabel}` },
                  }}
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
