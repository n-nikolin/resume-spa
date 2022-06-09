import upArrow from "../assets/arrow_up.svg";


export default function ScrollToTop() {
  return (
    <div className="btn scroll-to-top">
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behaviour: "auto" });
      }}
    >
      <img src={upArrow} alt="up chevron" />
    </button>
  </div>
  )
}
