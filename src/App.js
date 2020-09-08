import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

import { Route } from "react-router-dom";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
