import React, { useState } from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import styles from "../styles/components/OpportunitySignup.module.css";
import { OpportunitySignUpFormProps } from "./jobPosting/JobPosting";
import ContentEditor from "./ContentEditor";
import toast from "react-hot-toast";

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
    const validated =
      email.indexOf("@") > -1 && fname && lname && cname && phone;

    if (validated) {
      onValidated({
        EMAIL: email,
        GNAME: "opportunities",
        CNAME: cname,
        PHONE: phone,
        FNAME: fname,
        LNAME: lname,
      });

      setEmail("");
      setFname("");
      setLname("");
      setCname("");
      setPhone("");

      if (status === "error") {
        toast.error("There was an error subscribing you. please try again.", {
          icon: "🚫",
          id: "opportunity-signup-error",
          position: "top-center",
        });
      }

      if (status === "success") {
        toast.success("You have been subscribed to our newsletter!", {
          icon: "👏",
          id: "opportunity-signup",
          position: "top-center",
        });
      }

      return;
    }

    toast.error("All fields are required", {
      icon: "🚫",
      id: "opportunity-signup-invalid",
      position: "top-center",
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
            value={fname}
          />
          <input
            placeholder="Last Name*"
            className={styles.input}
            type="text"
            onChange={handleLNameChange}
            value={lname}
          />
        </div>
        <div>
          <input
            placeholder="Company Name*"
            className={styles.input}
            type="text"
            onChange={handleCNameChange}
            value={cname}
          />
          <input
            placeholder="Phone Number*"
            className={styles.input}
            type="text"
            onChange={handlePhoneChange}
            value={phone}
          />
        </div>
        <div>
          <input
            placeholder="Email Address*"
            className={styles.input}
            type="email"
            onChange={handleEmailChange}
            value={email}
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
