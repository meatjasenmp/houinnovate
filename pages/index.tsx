import type { NextPage } from "next";
import Head from "next/head";
import ComponentBlocks from "../components/ComponentBlocks";
import Navigation from "../components/Navigation";
import SecondaryNavigation from "../components/SecondaryNavigation";
import SiteFooter from "../components/SiteFooter";
import { usePage } from "./api/page";
import { page_generalSettings, page_page } from "./api/__generated__/page";

const Home: NextPage = () => {
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
  const { components } = data?.page as page_page;

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
        <ComponentBlocks componentBlocks={components?.componentBlocks} />
      </main>

      <SiteFooter
        footerBlocks={data?.siteOptionsPage?.siteFooter?.footerBlocks}
      />
    </div>
  );
};

export default Home;
