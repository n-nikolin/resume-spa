import { useRef } from "react";
import emailjs from "@emailjs/browser";

// read more about useRef hook
// show success popup and refresh page after submit

export default function ContactMe(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_me_form",
        "template_xdlj8wi",
        form.current,
        "uQDUyQr1aSjQGQ3g8"
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
    <div className="contact-me-container" id="contact-me">
      <h1>{props.heading}</h1>
      {/* CONTACT FORM COMPONENT */}
      <div className="form-container">
        <form action="submit" ref={form} onSubmit={sendEmail}>
          <legend>
            <h3>{props.legendHeading}</h3>
            <p>{props.legendLegend}</p>
          </legend>
          <label htmlFor="name">{props.labelName}</label>
          <input type="text" name="from_name" />
          <label htmlFor="email">{props.labelEmail}</label>
          <input type="text" name="from_email" />
          <label htmlFor="message">{props.labelMessage}</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="................"
          ></textarea>
          <button className="submit-btn" type="submit">
            {props.submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
}
