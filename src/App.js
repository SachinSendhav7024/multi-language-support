import React from "react";
import { Routes, Route } from "react-router";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import logo from "./assets/languageicon.png";

const App = () => {
  return (
    <>
      <div className="container-fluid main_page pb-4">
        <div className="navbar">
          <img src={logo} alt="languagelogo" className="logo p-4" />
          <Navbar />
          
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
       
      </div>
    </>
  );
};

export default App;
