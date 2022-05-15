import "./App.css";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import MyProjects from "../MyProjects/MyProjects";
import ContactMe from "../ContactMe/ContactMe";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className="app-container">
      <LanguageSwitch />
      <ScrollToTopButton />
      <Landing />
      <Navbar />
      <div className="content-sections">
        <AboutMe />
        <MyProjects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
