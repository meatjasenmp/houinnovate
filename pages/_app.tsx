import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HubspotProvider } from "next-hubspot";
import Layout from "../components/Layout";
import React from "react";
import { relayStylePagination } from "@apollo/client/utilities";
import { Toaster } from "react-hot-toast";
import ReactModal from "react-modal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        iONJobs: relayStylePagination(),
        communityInvestments: relayStylePagination(),
        projectBasedOpportunities: relayStylePagination(),
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: cache,
});

ReactModal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <HubspotProvider>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </HubspotProvider>
    </ApolloProvider>
  );
}

export default MyApp;
