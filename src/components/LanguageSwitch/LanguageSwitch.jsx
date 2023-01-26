import React from "react";
import './LanguageSwitch.scss'


const LanguageSwitch = ({ isChecked, setIsChecked }) => {
  const handleChange = (e) => {
    setIsChecked(e.target.value);
  };

  return (
    <div className="language-switch">
      <input
        type="radio"
        name="selected-language"
        value="ru"
        id="ru"
        onChange={handleChange}
        checked={isChecked === "ru"}
      />
      <label htmlFor="ru">ru</label>
      <input
        type="radio"
        name="selected-language"
        value="en"
        id="en"
        onChange={handleChange}
        checked={isChecked === "en"}
      />
      <label htmlFor="en">en</label>
    </div>
  );
}

export default LanguageSwitch;
