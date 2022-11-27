import React, { useEffect } from "react";
import Navigation from "./Navigation";
import { usePage } from "../api/page";
import SecondaryNavigation from "./SecondaryNavigation";
import SiteFooter from "./SiteFooter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const getPage = usePage("9");
  const { data, error, loading } = getPage;

  // useEffect(() => {
  //   if (data) {
  //     const ctx = gsap.context(() => {
  //       ScrollSmoother.create({
  //         smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //         effects: true, // looks for data-speed and data-lag attributes on elements
  //         smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  //       });
  //     });
  //     return () => {
  //       ctx.revert();
  //     };
  //   }
  // }, [data]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div className="site" id="outer-container">
      <Navigation
        pageWrapID="page-wrap"
        outerContainerID="outer-container"
        navigation={data?.siteOptionsPage?.siteNavigation}
        annualReport={data?.siteOptionsPage?.annualReport}
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main
            className="min-h-screen flex flex-1 justify-between flex-col p-4 font-body"
            id="page-wrap"
          >
            <SecondaryNavigation nav={data?.siteOptionsPage?.siteNavigation} />
            {children}
          </main>
          <SiteFooter
            footerBlocks={data?.siteOptionsPage?.siteFooter?.footerBlocks}
            header={data?.siteOptionsPage?.siteFooter?.footerHeader}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
