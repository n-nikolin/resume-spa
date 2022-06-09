import React from 'react'

export default function ContactMe(props) {
  return (
    <div className="contact-me-container" id="contact-me">
    <h1>{props.heading}</h1>
    {/* CONTACT FORM COMPONENT */}
    <div className="form-container">
      <form action="submit">
        <legend>
          <h3>{props.legendHeading}</h3>
          <p>{props.legendLegend}</p>
        </legend>
        <label htmlFor="name">
          {props.labelName}
        </label>
        <input type="text" />
        <label htmlFor="email">
          {props.labelEmail}
        </label>
        <input type="text" />
        <label htmlFor="message">
          {props.labelMessage}
        </label>
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
  )
}
