import { useState, useEffect } from "react";

function LanguageSwitch(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const changeLanguage = () => {
    if (isChecked === "ru") {
      setIsChecked("en");
    } else if (isChecked === "en") {
      setIsChecked("ru");
    }
    // this is a garbage way of handling this issue
    // need to find another way
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("currentLanguage", JSON.stringify(isChecked));
  }, [isChecked]);

  return (
    <div className="language-switch">
      <input
        type="radio"
        name="selected-language"
        value="ru"
        id="ru"
        onChange={changeLanguage}
        checked={isChecked === "ru"}
      />
      <label htmlFor="ru">ru</label>
      <input
        type="radio"
        name="selected-language"
        value="en"
        id="en"
        onChange={changeLanguage}
        checked={isChecked === "en"}
      />
      <label htmlFor="en">en</label>
    </div>
  );
}

export default LanguageSwitch;
