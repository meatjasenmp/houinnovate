import React, { useState } from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import styles from "../styles/components/NewsLetter.module.css";
import ArrowRightIcon from "./ArrowRightIcon";
import toast from "react-hot-toast";

interface CustomFields extends EmailFormFields {
  GNAME: string;
}

interface FormProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (formData: EmailFormFields & CustomFields) => void;
}

const CustomForm = ({ status, onValidated }: FormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.indexOf("@") > -1) {
      onValidated({ EMAIL: email, GNAME: "newsletter" });
      setEmail("");

      if (status === "error") {
        toast.error("There was an error subscribing you. please try again.", {
          icon: "🚫",
          id: "newsletter-signup-error",
          position: "bottom-center",
        });
      }

      if (status === "success") {
        toast.success("You have been subscribed to our newsletter!", {
          icon: "👏",
          id: "newsletter-signup-success",
          position: "bottom-center",
        });
      }

      return;
    }
    toast.error("Please enter a valid email address", {
      icon: "🚫",
      id: "newsletter-signup-invalid",
      position: "bottom-center",
    });
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className={styles.form_container}>
        <input
          placeholder="Enter your email for updates"
          className={styles.input}
          type="email"
          onChange={handleChange}
          value={email}
          disabled={status === "sending"}
        />
        <button
          className={styles.submit_button}
          type="submit"
          onClick={handleSubmit}
          disabled={status === "sending"}
        >
          <ArrowRightIcon color="white" />
        </button>
      </div>
    </div>
  );
};

const NewsLetterSubscribe = () => {
  return (
    <MailchimpSubscribe
      url={String(process.env.NEXT_PUBLIC_NEWSLETTER_URL)}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData: EmailFormFields) => subscribe(formData)}
        />
      )}
    />
  );
};

export default NewsLetterSubscribe;
