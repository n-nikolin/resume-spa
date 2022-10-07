import React from 'react'

export default function Header(props) {
  return (
    <div className='landing-header'>
        <header>
            <h1>{props.header.heading}</h1>
            <h3>{props.header.subheading}</h3>
        </header>
    </div>
  )
}
