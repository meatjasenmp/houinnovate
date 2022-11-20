import React from "react";
import { useHubspotForm } from "next-hubspot";

const NewsLetterSubscribe = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "7127130",
    formId: "ceccdd00-e9af-48de-a459-bc2f47a65c88",
    target: "#hubspot-form-wrapper",
  });
  console.log(formCreated);
  return (
    <>
      <div id="hubspot-form-wrapper" />
    </>
  );
};

export default NewsLetterSubscribe;
