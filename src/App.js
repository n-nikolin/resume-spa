import { useState, useEffect } from "react";
import "./App.scss";

import { useLocalStorage } from "./hooks/useLocalStorage";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ToolsAndSkills from "./components/ToolsAndSkills";
import ContactMe from "./components/ContactMe";

import textContent from "./assets/textContent.json";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isChecked] = useLocalStorage("currentLanguage", "ru");
  const [currentLanguage, setCurrentLanguage] = useState(textContent.ru);

  useEffect(()=>{
    document.title=currentLanguage.header.heading
  })
  // would probably be a good idea to try and rewrite this as context
  // and put into separate hook or something like that
  useEffect(() => {
    switch (isChecked) {
      case "ru":
        setCurrentLanguage(textContent.ru);
        break;
      case "en":
        setCurrentLanguage(textContent.en);
        break;
      default:
        setCurrentLanguage(currentLanguage);
    }
  }, [currentLanguage, isChecked]);


  return (
    <div>
      <ScrollToTop />
      <Navbar navbar={currentLanguage.navbar} checked={isChecked} />
      <Header header={currentLanguage.header} />
      <AboutMe aboutMe={currentLanguage.about_me} />
      <ToolsAndSkills
        toolsHeading={currentLanguage.tools_and_skills.tools.heading}
        skillsHeading={currentLanguage.tools_and_skills.skills.heading}
        education={currentLanguage.tools_and_skills.skills.education}
        foreignLanguages={currentLanguage.tools_and_skills.skills.foreign_languages}
      />
      <MyProjects myProjects={currentLanguage.my_projects} />
      <ContactMe contactMe={currentLanguage.contact_me} />
    </div>
  );
}

export default App;
