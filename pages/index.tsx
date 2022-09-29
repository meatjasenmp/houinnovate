import type { NextPage } from "next";
import Head from "next/head";
import ComponentBlocks from "../components/ComponentBlocks";
import { usePage } from "./api/page";
import { useNavigation } from "./api/navigation";
import { page_generalSettings, page_page } from "./api/__generated__/page";

const Home: NextPage = () => {
  const getPage = usePage("9");
  const getNavigation = useNavigation();
  const { data, error, loading } = getPage;
  const {
    data: navigationData,
    error: navigationError,
    loading: navigationLoading,
  } = getNavigation;

  if (loading || navigationLoading) {
    return <div>Loading...</div>;
  }

  if (error || navigationError) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (navigationError) {
      return <div>Error: {navigationError.message}</div>;
    }
  }

  const { title, description } = data?.generalSettings as page_generalSettings;
  const { components } = data?.page as page_page;

  return (
    <div className="p-4">
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-1 justify-between flex-col">
        <ComponentBlocks componentBlocks={components?.componentBlocks} />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
