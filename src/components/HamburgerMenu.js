import hamburgerMenu from "../assets/hamburgerMenu.svg";
import { useState } from "react";

export default function HamburgerMenu() {
  const [overlay, setOverlay] = useState(true);

  function openNavMenu() {
    // tweak this to make it not look shit and be less invasive
    setOverlay(!overlay);
    // console.log(overlay);
    const navOverlay = document.getElementById("overlay");

    if (overlay == false) {
      navOverlay.style.display = "none";
    } else {
      navOverlay.style.display = "block";
    }
  }

  return (
    <div>
      <div className="hamburger-menu">
        <button onClick={openNavMenu}>
          <img src={hamburgerMenu} />
        </button>
      </div>
    </div>
  );
}
