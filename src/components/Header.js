import React from 'react'

export default function Header(props) {
  return (
    <section className='landing-header'>
        <header>
            <h1>{props.header.heading}</h1>
            <h3>{props.header.subheading}</h3>
        </header>
    </section>
  )
}
