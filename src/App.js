import { useState, useEffect } from "react";
import "./App.scss";
// import LanguageSwitch from "./components/LanguageSwitch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import textContent from "./assets/textContent.json";
import LanguageSwitch from "./components/LanguageSwitch";

function App() {
  const [isChecked, setIsChecked] = useLocalStorage("currentLanguage", "ru");
  const [currentLanguage, setCurrentLanguage] = useState(textContent.ru);

  
  useEffect(() => {
    localStorage.setItem("currentLanguage", JSON.stringify(isChecked))
    isChecked==='ru'
      ? setCurrentLanguage(textContent.ru)
      : setCurrentLanguage(textContent.en);
  }, [isChecked]);


  return (
    <div>
      <LanguageSwitch checked={isChecked}/>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
      <h1>{currentLanguage.header.heading}</h1>
    </div>
  );
}

export default App;
