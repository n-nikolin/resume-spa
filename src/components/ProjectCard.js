import React from 'react'
import ProjectCardModal from './ProjectCardModal'

export default function ProjectCard(props) {
  return (
    <div className="project-card">
    <h3>{props.title}</h3>
    <p>{props.shortDescription}</p>
    <ProjectCardModal/>
    </div>
  )
}
