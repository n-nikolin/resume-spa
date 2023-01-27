import React, { useEffect, useRef, useState, forwardRef } from "react";
import "./Navbar.scss";
import ui from "../../assets/ui";
import handleScroll from "../../utils/handleScroll";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const Navbar = forwardRef(
  (
    {
      navbar,
      isChecked,
      setIsChecked,
      aboutMeRef,
      toolsAndSkillsRef,
      myProjectsRef,
      contactMeRef,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef();

    const toggleVisible = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const closeNavbar = (e) => {
        // console.log(e.path[1].tagName);
        // TODO: navbar should stay open when clicking on language switch
        if (e.composedPath()[1] !== btnRef.current) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", closeNavbar);

      return () => {
        document.removeEventListener("click", closeNavbar);
      };
    }, []);

    return (
      <div className="navbar" ref={ref}>
        <LanguageSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
        <button onClick={toggleVisible} ref={btnRef}>
          <img src={ui.hamburgerMenu} alt="hamburger menu icon" />
        </button>
        {/* <NavItems navbar={navbar} isOpen={isOpen} /> */}
        <ul id={isOpen ? "open" : "closed"}>
          <li>
            <p onClick={() => handleScroll(aboutMeRef)}>{navbar.about_me}</p>
          </li>
          <li>
            <p onClick={() => handleScroll(toolsAndSkillsRef)}>
              {navbar.tools_and_skills}
            </p>
          </li>
          <li>
            <p onClick={() => handleScroll(myProjectsRef)}>
              {navbar.my_projects}
            </p>
          </li>
          <li>
            <p onClick={() => handleScroll(contactMeRef)}>
              {navbar.contact_me}
            </p>
          </li>
        </ul>
      </div>
    );
  }
);

export default Navbar;
