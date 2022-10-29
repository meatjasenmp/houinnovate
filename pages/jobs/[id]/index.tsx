import { useRouter } from "next/router";
import JobPosting from "../../../components/jobPosting/JobPosting";
import Head from "next/head";
import React from "react";

const OpportunityPage = () => {
  const router = useRouter();
  const { id, pageTitle } = router.query;

  if (!id) return <></>;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JobPosting id={String(id)} />
    </>
  );
};

export default OpportunityPage;
