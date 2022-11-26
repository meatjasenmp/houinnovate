import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HubspotProvider } from "next-hubspot";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import { relayStylePagination } from "@apollo/client/utilities";
import { Toaster } from "react-hot-toast";
import ReactModal from "react-modal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <HubspotProvider>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Layout>
              <Toaster />
              <Component {...pageProps} />
            </Layout>
          </div>
        </div>
      </HubspotProvider>
    </ApolloProvider>
  );
}

export default MyApp;
