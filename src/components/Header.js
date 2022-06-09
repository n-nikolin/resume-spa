import React from 'react'

export default function Header(props) {
  return (
    <section className="header">
    <header className="greeting-header">
      <h1>{props.heading}</h1>
      <p>{props.subheading}</p>
    </header>
  </section>
  )
}
