import React, { useState, useEffect, forwardRef } from "react";
import "./ScrollToTop.scss";
import ui from "../../assets/ui";

const handleScroll = (ref) => {
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const ScrollToTop = forwardRef(({ headerRef }, ref) => {
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
    <div className="btn scroll-to-top" ref={ref}>
      {isVisible && (
        <button onClick={() => handleScroll(headerRef)}>
          <img src={ui.upArrow} alt="up chevron" />
        </button>
      )}
    </div>
  );
});

export default ScrollToTop;
