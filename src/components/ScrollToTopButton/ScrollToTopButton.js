import { useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        style={{ display: visible ? "" : "none" }}
      >
        SCROLL TO TOP
      </button>
    </div>
  );
}

export default ScrollToTopButton;
