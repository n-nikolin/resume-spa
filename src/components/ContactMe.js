import React from "react";

export default function ContactMe(props) {
  return (
    <div className="contact-me" id="contact_me">
      <h2 className="contact-me heading">{props.contactMe.heading}</h2>
      <form action="submit">
        <legend>
          <h3>{props.contactMe.legend.heading}</h3>
          <p>{props.contactMe.legend.legend}</p>
        </legend>
          <label htmlFor="">{props.contactMe.label.name}
            <input type="text" />
          </label>
          <label htmlFor="">{props.contactMe.label.email}
            <input type="text" />
          </label>
          <label htmlFor="">{props.contactMe.label.message}
            <textarea />
          </label>
          <button type="submit">{props.contactMe.submit_btn}</button>
      </form>
    </div>
  );
}
