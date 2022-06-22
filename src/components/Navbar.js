function Navbar(props) {
  return (
    <div className="navbar" id="overlay">
    <ul>
      <li>
        <a href="#about-me">{props.aboutMe}</a>
      </li>
      <li>
        <a href="#my-projects">{props.myProjects}</a>
      </li>
      <li>
        <a href="#contact-me">{props.contactMe}</a>
      </li>
    </ul>
  </div>
  )
}

export default Navbar