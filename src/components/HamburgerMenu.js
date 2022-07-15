import hamburgerMenu from "../assets/hamburgerMenu.svg";
import { useState, useEffect, useRef } from "react";

export default function HamburgerMenu(props) {
  const [overlay, setOverlay] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const closeNavbar = (e) => {
      if (e.composedPath()[1] !== navbarRef.current) {
        setOverlay(false);
      }
    };

    document.body.addEventListener("click", closeNavbar);
    return () => {
      document.body.removeEventListener("click", closeNavbar);
    };
  }, []);

  return (
    <div>
      <div className="hamburger-menu">
        <button ref={navbarRef} onClick={() => setOverlay((prev) => !prev)}>
          <img src={hamburgerMenu} alt="a hamburger menu icon" />
        </button>
      </div>
      <div className={"navbar " + (overlay ? "open" : "closed")}>
        <ul>
          <li>
            <a href="#about-me">abt-me</a>
          </li>
          <li>
            <a href="#my-projects">projects</a>
          </li>
          <li>
            <a href="#contact-me">contact-me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
