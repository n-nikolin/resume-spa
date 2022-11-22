import { useState, useEffect } from "react";
import textContent from "../assets/textContent.json";

export function useCurrentLanguage(isChecked, defaultValue) {
    const [currentValue, setCurrentValue] = useState(defaultValue);

    useEffect(() => {
        switch (isChecked) {
            case "ru":
                setCurrentValue(textContent.ru);
                break;
            case "en":
                setCurrentValue(textContent.en);
                break;
            default:
                setCurrentValue(currentValue);
        }
    }, [currentValue, isChecked]);

    return currentValue
}