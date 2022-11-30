import React from "react";
import { useHubspotForm } from "next-hubspot";
import ContentEditor from "./ContentEditor";

interface FormProps {
  cta: string | null | undefined;
}

const OpportunitySignUpForm = ({ cta }: FormProps) => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: String(process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID),
    formId: String(process.env.NEXT_PUBLIC_HOTSPOT_JOB_FORM_ID),
    target: "#hubspot-job-form-wrapper",
  });
  return (
    <>
      <div className="max-w-lg">
        <ContentEditor content={cta} />
      </div>
      <div id="hubspot-job-form-wrapper" />
    </>
  );
};

export default OpportunitySignUpForm;
