import React, { useState } from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import styles from "../styles/components/OpportunitySignup.module.css";
import { OpportunitySignUpFormProps } from "./jobPosting/JobPosting";
import ContentEditor from "./ContentEditor";

interface CustomFields extends EmailFormFields {
  GNAME: string;
  CNAME: string;
  PHONE: string;
  FNAME: string;
  LNAME: string;
}

type DefaultFormFields = CustomFields;

interface FormProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (formData: DefaultFormFields) => void;
  cta: string | null | undefined;
}

const CustomForm = ({ status, onValidated, cta }: FormProps) => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [cname, setCname] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    email.indexOf("@") > -1 &&
      fname &&
      lname &&
      cname &&
      phone &&
      onValidated({
        EMAIL: email,
        GNAME: "opportunities",
        CNAME: cname,
        PHONE: phone,
        FNAME: fname,
        LNAME: lname,
      });
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleFNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFname(e.target.value);
  };

  const handleLNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLname(e.target.value);
  };

  const handleCNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCname(e.target.value);
  };

  const handlePhoneChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhone(e.target.value);
  };

  if (status === "error") {
    return (
      <div className="error">An error occurred subscribing to this email</div>
    );
  }

  if (status === "sending") {
    return <div className="sending">Sending...</div>;
  }

  if (status === "success") {
    return (
      <div className="success">
        <p>Thank you for subscribing!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ContentEditor content={cta} />
      <div className={styles.form_container}>
        <div>
          <input
            placeholder="First Name*"
            className={styles.input}
            type="text"
            onChange={handleFNameChange}
          />
          <input
            placeholder="Last Name*"
            className={styles.input}
            type="text"
            onChange={handleLNameChange}
          />
        </div>
        <div>
          <input
            placeholder="Company Name*"
            className={styles.input}
            type="text"
            onChange={handleCNameChange}
          />
          <input
            placeholder="Phone Number*"
            className={styles.input}
            type="text"
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <input
            placeholder="Email Address*"
            className={styles.input}
            type="email"
            onChange={handleEmailChange}
          />
          <button
            className={styles.submit_button}
            type="submit"
            onClick={handleSubmit}
          >
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
};

const OpportunitySignUpForm = ({ cta }: OpportunitySignUpFormProps) => {
  return (
    <MailchimpSubscribe
      url={String(process.env.NEXT_PUBLIC_NEWSLETTER_URL)}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData: EmailFormFields) => subscribe(formData)}
          cta={cta}
        />
      )}
    />
  );
};

export default OpportunitySignUpForm;
