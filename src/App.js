import "./App.css";
import Form from "./components/formtext";
import Nav from "./components/navbar";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, changemode] = useState("light");
  // const prevmode=usePrevious(mode)
  const setmode = () => {
    if (mode === "dark") {
      changemode("light");
      document.body.style.backgroundColor = "white";
    } else {
      changemode("dark");
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <Router basename="/React-application">
      <Nav mode={mode} Changemode={setmode}></Nav>
      <Routes>
        <Route exact path="/" element={<Form  mode={mode}/>}  />
        <Route exact path="/React-application/About" element={<About  mode={mode}/>} />
      </Routes>
    </Router>
  );
}

export default App;
