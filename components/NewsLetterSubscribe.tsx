import React, { useState } from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import styles from "../styles/components/NewsLetter.module.css";
import ArrowRightIcon from "./ArrowRightIcon";

interface FormProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
}

const CustomForm = ({ status, message, onValidated }: FormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
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
    <div className={styles.form_container}>
      <input
        placeholder="Enter your email for updates"
        className={styles.input}
        type="email"
        onChange={handleChange}
      />
      <button
        className={styles.submit_button}
        type="submit"
        onClick={handleSubmit}
      >
        <ArrowRightIcon color="white" />
      </button>
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
