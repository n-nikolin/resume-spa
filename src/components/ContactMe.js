import { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function ContactMe({ contactMe }) {
  const form = useRef();
  // const serviceID = process.env.REACT_APP_SERVICE_ID

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-me" id="contact_me">
      <h2 className="contact-me heading">{contactMe.heading}</h2>
      <form ref={form} onSubmit={sendEmail}>
        <legend>
          
          <h3>{contactMe.legend.heading}</h3>
          <p>{contactMe.legend.legend}</p>
        </legend>
        <div>
          <label htmlFor="">
            {contactMe.label.name}
            <input name="user_name" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {contactMe.label.email}
            <input name="email" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {contactMe.label.message}
            <textarea name="message" />
          </label>
        </div>
        <div>
          <button type="submit">{contactMe.submit_btn}</button>
        </div>
      </form>
    </section>
  );
}
