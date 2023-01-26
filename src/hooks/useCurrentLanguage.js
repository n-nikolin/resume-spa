import React, { useState, useEffect } from "react";
import textContent from "../assets/textContent.json";

const useCurrentLanguage = (checked) => {
  const [currentValue, setCurrentValue] = useState(textContent.ru);

  useEffect(() => {
    switch (checked) {
      case "ru":
        setCurrentValue(textContent.ru);
        break;
      case "en":
        setCurrentValue(textContent.en);
        break;
      default:
        setCurrentValue(currentValue);
    }
  }, [currentValue, checked]);

  return currentValue;
};

export default useCurrentLanguage;
