import React from "react";

export default function ContactMe({contactMe}) {
  return (
    <section className="contact-me" id="contact_me">
      <h2 className="contact-me heading">{contactMe.heading}</h2>
      <form action="submit">
        <legend>
          <h3>{contactMe.legend.heading}</h3>
          <p>{contactMe.legend.legend}</p>
        </legend>
        <div>
          <label htmlFor="">
            {contactMe.label.name}
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {contactMe.label.email}
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {contactMe.label.message}
            <textarea />
          </label>
        </div>
        <div>
        <button type="submit">{contactMe.submit_btn}</button>
        </div>
      </form>
    </section>
  );
}
