import React from "react";
import { useHubspotForm } from "next-hubspot";

const NewsLetterSubscribe = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: String(process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID),
    formId: String(process.env.NEXT_PUBLIC_HUBSPOT_NEWS_LETTER_ID),
    target: "#hubspot-form-wrapper",
  });
  return (
    <>
      <div id="hubspot-form-wrapper" />
    </>
  );
};

export default NewsLetterSubscribe;
