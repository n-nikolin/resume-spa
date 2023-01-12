import React from "react";
import { useEffect, useRef, useState } from "react";
import ui from "../assets/ui";
import LanguageSwitch from "./LanguageSwitch";
import NavItems from "./NavItems";

const Navbar = ({ navbar, isChecked, setIsChecked }) => {
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
    <div className="navbar">
      <LanguageSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
      <button onClick={toggleVisible} ref={btnRef}>
        <img src={ui.hamburgerMenu} alt="hamburger menu icon" />
      </button>
      <NavItems navbar={navbar} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
