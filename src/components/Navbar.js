import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ui from "../assets/ui";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar({ navbar, isChecked, setIsChecked }) {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  const toggleVisible = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (key) => {
    // TODO: try adding animations and making it smooth
    document
      .getElementById(key)
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
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

  const menuItems = Object.entries(navbar).map(([key, value]) => (
    <li key={key}>
      <p onClick={() => handleScroll(key)}>{value}</p>
    </li>
  ));

  return (
    <div className="navbar">
      <LanguageSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
      <button onClick={toggleVisible} ref={btnRef}>
        <img src={ui.hamburgerMenu} alt="hamburger menu icon" />
      </button>
      <ul id={isOpen ? "open" : "closed"}>{menuItems}</ul>
    </div>
  );
}
