import { useState, useEffect } from "react";
import "./App.scss";
import { useLocalStorage } from "./hooks/useLocalStorage";
import textContent from "./assets/textContent.json";
import LanguageSwitch from "./components/LanguageSwitch";
import Navbar from './components/Navbar'
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ToolsAndSkills from "./components/ToolsAndSkills";
import ContactMe from "./components/ContactMe";

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
      <Navbar navbar={currentLanguage.navbar} />
      <Header header={currentLanguage.header} />
      <AboutMe aboutMe={currentLanguage.about_me}/>
      <ToolsAndSkills />
      <MyProjects myProjects={currentLanguage.my_projects}/>
      <ContactMe contactMe={currentLanguage.contact_me} />
    </div>
  );
}

export default App;
