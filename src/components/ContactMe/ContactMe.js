import React from "react";

function ContactMe() {
  return (
    <section className="contact-me">
      <h1>CONTACT-ME SECTION</h1>
      <div className="contact-me-container">
        <form action="submit">
          <div className="form-legend">
          <h3>SAMPLE TEXT</h3>
          <legend>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis quasi vel eum quidem cum ad repellendus velit
            cupiditate ipsa voluptas veniam impedit mollitia ratione, eos
            accusantium quod ullam ea neque? Velit veniam molestias quis neque
            nesciunt maiores pariatur incidunt dolores?
          </legend>
          </div>
          <div className="email-field">
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="" id="email" />
          </div>
          <div className="message-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea name="meassage-text" id="message" cols="30" rows="10"></textarea>
          </div>
          <div className="buttons">
            {/* TODO: Play around with the input:file button */}
          {/* <div className="attachment-btn">
            <input type="file" name="" id="" />
          </div> */}
          <div className="submit-btn">
            <input type="submit" value="SUBMIT" />
          </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
