import ui from "../assets/ui";
import { useState } from "react";
import { useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY > document.getElementById("about-me-container-content")
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div className="btn scroll-to-top">
      {isVisible && (
        <button
          onClick={() => {
            // for some reason behavior: "smooth" doesn't work
            window.scrollTo({ top: 0 });
          }}
        >
          <img src={ui.upArrow} alt="up chevron" />
        </button>
      )}
    </div>
  );
}
