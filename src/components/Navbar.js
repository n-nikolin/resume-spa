// TODO: make navbar visibility toggleable
// by adding and removing element ids or classes

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ui from "../assets/ui";

export default function Navbar({ navbar }) {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  const toggleVisible = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeNavbar = (e) => {
      // console.log(e.path[1].tagName);
      if (e.composedPath()[1] !== btnRef.current) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeNavbar);

    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, []);

  const menuItems = Object.entries(navbar).map(([key, value]) => (
    <li key={key}>
      <a href={"#" + key}>{value}</a>
    </li>
  ));

  return (
    <div className="navbar">
      <button onClick={toggleVisible} ref={btnRef}>
        <img src={ui.hamburgerMenu} alt="hamburger menu icon" />
      </button>
      <ul id={isOpen ? "open" : "closed"}>{menuItems}</ul>
    </div>
  );
}
