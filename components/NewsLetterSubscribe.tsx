import React from "react";
import { useHubspotForm } from "next-hubspot";

const NewsLetterSubscribe = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "7127130",
    formId: "ceccdd00-e9af-48de-a459-bc2f47a65c88",
    target: "#hubspot-form-wrapper",
  });
  return (
    <>
      <p>hello world</p>
      <div id="hubspot-form-wrapper" />
    </>
  );
};

export default NewsLetterSubscribe;

// <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
// <script>
//   hbspt.forms.create({
//   region: "na1",
//   portalId: "7127130",
//   formId: "ceccdd00-e9af-48de-a459-bc2f47a65c88"
// });
// </script>
