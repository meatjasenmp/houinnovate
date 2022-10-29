import type { NextPage } from "next";
import ComponentBlocks from "../components/ComponentBlocks";
import { usePage } from "./api/page";
import { useRouter } from "next/router";
import { page_generalSettings, page_page } from "./api/__generated__/page";
import Head from "next/head";
import React, { useEffect } from "react";
import { scroller } from "react-scroll";

const Home: NextPage = () => {
  const getPage = usePage("9");
  const { data, error, loading } = getPage;

  const router = useRouter();
  const { scrollTo } = router.query;

  useEffect(() => {
    scroller.scrollTo(String(scrollTo), {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  }

  const { components } = data?.page as page_page;
  const { title, description } = data?.generalSettings as page_generalSettings;

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentBlocks componentBlocks={components?.componentBlocks} />
    </>
  );
};

export default Home;
