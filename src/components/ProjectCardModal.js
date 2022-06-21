import React from 'react'
import gitHubLogo from "../assets/GitHub-Mark-64px.png";

export default function ProjectCardModal(props) {
  return (
    <div className='modal-card' id={`expand-${props.id}`}>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href="#!">
            <img src={gitHubLogo} alt="github logo" />
          </a>
        </div>
      </div>
  )
}
