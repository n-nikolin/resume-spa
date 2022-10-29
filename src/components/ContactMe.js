// TODO: try to clear form when message has been sent
// TODO: add animetion while waiting for response

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe({ contactMe }) {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
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
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(setIsSending(true))
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsMessageSent(false);
    }, 2500);
    return () => {
      clearTimeout(timeId);
    };
  });

  return (
    <section className="contact-me" id="contact_me">
      <h2 className="contact-me heading">{contactMe.heading}</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        sending={isSending.toString()}
        className={isSending === true ? "disabled" : null}
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
      {isSending && <div className="success-popup content loader"></div>}
      {isMessageSent && (
        <div className="success-popup content">
          <h3>{contactMe.success_popup}</h3>
        </div>
      )}
    </section>
  );
}
