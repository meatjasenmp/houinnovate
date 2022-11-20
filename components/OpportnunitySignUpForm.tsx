import React, { useState } from "react";
import ContentEditor from "./ContentEditor";

interface FormProps {
  cta: string | null | undefined;
}

const OpportunitySignUpForm = ({ cta }: FormProps) => {
  return <ContentEditor content={cta} />;
};

export default OpportunitySignUpForm;
