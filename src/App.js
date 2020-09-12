import React, { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
      <i
        className="far fa-lightbulb fa-2x icon-toggle"
        style={{ color: darkMode ? "#999999" : "#fdab00" }}
        onClick={() => setDarkMode(!darkMode)}
      ></i>
      <Navbar color={darkMode ? "dark-mode mode" : "light-mode mode"} />
      <MainPage
        color={darkMode ? "dark-mode mode" : "light-mode mode"}
        id="aboutMe"
      />
      <AboutMe color={darkMode ? "dark-mode mode" : "light-mode mode"} />
      <MyWork
        id="myWork"
        color={darkMode ? "dark-mode mode" : "light-mode mode"}
      />
      <ContactMe
        id="contactMe"
        color={darkMode ? "dark-mode mode" : "light-mode mode"}
      />
    </div>
  );
}

export default App;
