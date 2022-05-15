import React from "react";

function LanguageSwitch() {
  return (
    <div className="language-switch">
      <input
        type="radio"
        name="selected-language"
        id="en"
        defaultChecked="true"
      />
      <label htmlFor="en">EN</label>
      <input type="radio" name="selected-language" id="ru" />
      <label htmlFor="ru">RU</label>
    </div>
  );
}

export default LanguageSwitch;
