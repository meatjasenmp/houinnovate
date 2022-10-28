import type { NextPage } from "next";
import ComponentBlocks from "../components/ComponentBlocks";
import { usePage } from "./api/page";
import { page_page } from "./api/__generated__/page";

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

  const { components } = data?.page as page_page;

  return <ComponentBlocks componentBlocks={components?.componentBlocks} />;
};

export default Home;
