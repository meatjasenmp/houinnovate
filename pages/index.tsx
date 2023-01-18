import type { NextPage } from "next";
import ComponentBlocks from "../components/ComponentBlocks";
import { usePage } from "../api/page";
import { page_generalSettings, page_page } from "../api/__generated__/page";
import { NextSeo } from "next-seo";
import React from "react";

const Home: NextPage = () => {
  const getPage = usePage("9");
  const { data, error, loading } = getPage;

  if (error) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  }

  if (loading) return <></>;

  const { components } = data?.page as page_page;
  const { title, description } = data?.generalSettings as page_generalSettings;

  const siteOpenGraph = {
    title: title || "",
    description: String(description),
    url: process.env.NEXT_PUBLIC_PRODUCTION_URL,
    images: [
      {
        url: "https://iondistrict-admin.rice.edu/wp-content/uploads/2022/11/poster-min.jpg",
        width: 800,
        height: 600,
        alt: "Open Graph Image Alt",
        type: "image/jpeg",
        siteName: title || "",
      },
    ],
  };

  const twitter = {
    handle: "@TheIonHouston",
    site: "@TheIonHouston",
    cardType: "summary_large_image",
  };

  const additionalLinkTags = [
    {
      rel: "icon",
      href: "https://iondistrict-admin.rice.edu/wp-content/uploads/2023/01/favicon.png",
    },
  ];

  return (
    <>
      <NextSeo
        title={title || ""}
        description={description || ""}
        openGraph={siteOpenGraph}
        twitter={twitter}
        additionalLinkTags={additionalLinkTags}
      />
      <ComponentBlocks componentBlocks={components?.componentBlocks} />
    </>
  );
};

export default Home;
