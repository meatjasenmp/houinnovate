import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import { usePage } from "../pages/api/page";
import {
  page_generalSettings,
  page_page,
} from "../pages/api/__generated__/page";
import SecondaryNavigation from "./SecondaryNavigation";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const getPage = usePage("9");
  const { data, error, loading } = getPage;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  }

  const { title, description } = data?.generalSettings as page_generalSettings;

  return (
    <div className="site" id="outer-container">
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation
        pageWrapID="page-wrap"
        outerContainerID="outer-container"
        navigation={data?.siteOptionsPage?.siteNavigation}
      />
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
  );
};

export default Layout;
