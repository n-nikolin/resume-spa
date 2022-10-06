import { useState, useEffect } from "react";
import "./App.scss";
import { useLocalStorage } from "./hooks/useLocalStorage";
import textContent from "./assets/textContent.json";
import LanguageSwitch from "./components/LanguageSwitch";
import Navbar from './components/Navbar'

function App() {
  const [isChecked] = useLocalStorage("currentLanguage", "ru");
  const [currentLanguage, setCurrentLanguage] = useState(textContent.ru);

  // would probably be a good idea to try and rewrite this as context
  // and put into separate hook or something like that
  useEffect(() => {
    // localStorage.setItem("currentLanguage", JSON.stringify(isChecked));
    switch (isChecked) {
      case "ru":
        setCurrentLanguage(textContent.ru);
        break
      case "en":
        setCurrentLanguage(textContent.en);
        break
      default:
        setCurrentLanguage(currentLanguage)
    }
  }, [currentLanguage, isChecked]);

  return (
    <div>
      <LanguageSwitch checked={isChecked} />
      <Navbar navbar={currentLanguage.navbar}/>
      <h1>{currentLanguage.header.heading}</h1>
    </div>
  );
}

export default App;
