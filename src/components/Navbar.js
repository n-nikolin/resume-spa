// TODO: make navbar visibility toggleable
// by adding and removing element ids or classes

import { useState } from "react";
import hamburgerMenu from "../assets/hamburgerMenu.svg";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisible = (e) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const menuItems = Object.entries(props.navbar).map(([key, value]) => (
    <li key={key}>
      <a href={"#" + key}>{value}</a>
    </li>
  ));

  return (
    <div className="navbar">
      <button onClick={toggleVisible}>
        <img src={hamburgerMenu} alt="hamburger menu icon" />
      </button>
      <ul id="closed">{menuItems}</ul>
    </div>
  );
}
