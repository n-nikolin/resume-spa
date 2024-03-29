// add error popup

import React, { useRef, useState } from "react";
import { forwardRef } from "react";
import "./ContactMe.scss";
import usePopup from "../../hooks/usePopup";
import emailjs from "@emailjs/browser";

const ContactMe = forwardRef(({ contactMe }, ref) => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = usePopup(false);
  const [isSending, setIsSending] = useState(false);
  const [messageForm, setMessageForm] = useState({
    user_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setMessageForm({
      ...messageForm,
      [e.target.name]: e.target.value,
    });
  };

  // TODO: separate function concerns
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_ID
        )
        .then((result) => {
          console.log(result.text);
          setIsMessageSent(true);
          setMessageForm({
            user_name: "",
            email: "",
            message: "",
          });
          setIsSending(false);
        });
    } catch (error) {
      console.log(error.text);
      alert("message not sent");
      setIsSending(false);
    }
  };

  return (
    <section className="contact-me" id="contact_me" ref={ref}>
      <h2 className="contact-me heading">{contactMe.heading}</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        sending={isSending.toString()}
        className={isSending ? "disabled" : null}
      >
        <legend>
          <h3>{contactMe.legend.heading}</h3>
          <p>{contactMe.legend.legend}</p>
        </legend>
        <div>
          <label htmlFor="">
            {contactMe.label.name}
            <input
              type="text"
              name="user_name"
              value={messageForm.user_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {contactMe.label.email}
            <input
              name="email"
              type="text"
              value={messageForm.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {contactMe.label.message}
            <textarea
              name="message"
              value={messageForm.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">{contactMe.submit_btn}</button>
        </div>
      </form>
      {isSending && (
        <div className="success-popup content">
          <div className="loader"></div>
        </div>
      )}
      {isMessageSent && (
        <div className="success-popup content">
          <h3>{contactMe.success_popup}</h3>
        </div>
      )}
    </section>
  );
});

export default ContactMe;
