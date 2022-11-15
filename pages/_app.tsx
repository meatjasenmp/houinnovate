import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";
import React from "react";
import { relayStylePagination } from "@apollo/client/utilities";
import { Toaster } from "react-hot-toast";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        iONJobs: relayStylePagination(),
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
