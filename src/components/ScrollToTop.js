import upArrow from "../assets/arrow_up.svg";
import { useState } from "react";
import { useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.getElementById('about-me-container-content')) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (

    <div className="btn scroll-to-top">
      {isVisible && <button
        onClick={() => {
          window.scrollTo({ top: 0, behaviour: "auto" });
        }}
      >
        <img src={upArrow} alt="up chevron" />
      </button>}
    </div>
  );
}
