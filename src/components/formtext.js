//This component has a text box and converts the letter inside the textbox in uppercase on pressing a buttonDFF
import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Form(props) {
  const [text, settext] = useState("Enter your text here".trim());
  const [words, setwords] = useState(" ");
  //function for converting all lower case letters into uppercase
  function Touppercase() {
    let textarea = document.getElementById("exampleFormControlTextarea1");
    let uppercaseletters = textarea.value;
    settext(uppercaseletters.toUpperCase());
  }
  //This function counts the total numbers uppercase and lowercase letter and much more
  //It tells the summary of the text written
  function Summary() {
    let textarea = document.getElementById("exampleFormControlTextarea1");
    let words = 0;
    let summary = textarea.value;
    let upperCaseletters = 0;
    let lowerCaseletters = 0;
    let specialchracters = 0;
    let emptyspaces = 0;
    for (let i = 0; i < summary.length; i++) {
      let uppercaseletter = summary[i].toUpperCase();
      let lowerletter = summary[i].toLowerCase();
      if (!isNaN(summary[i]) && summary[i] !== " ") {
        words++;
      } else if (summary[i] !== " " && !/[a-zA-Z0-9]/.test(summary[i])) {
        // Check if the character is not a letter or digit
        specialchracters++;
      } else if (lowerletter === summary[i] && summary[i] !== " ") {
        lowerCaseletters++;
      } else if (uppercaseletter === summary[i] && summary[i] !== " ") {
        upperCaseletters++;
      } else {
        emptyspaces++;
      }
    }
    setwords(
      `Total numbers in your text are ${words}, total number of uppercase letters are ${upperCaseletters}, \n total number of lowercase letters are ${lowerCaseletters}, total number of special chracters ${specialchracters}, total number of empty space ${emptyspaces} and total words in your text are ${
        summary.split(" ").filter((Element)=>{return Element.length!==0}).length
      }`
    );
  }
  //   function onchange() {
  //     let textarea = document.getElementById("exampleFormControlTextarea1");
  //     settext(textarea.value);
  //   }
  //Another way of writing this function
  const onchange = (event) => {
    settext(event.target.value);
  };
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control mt-1"
          value={text}
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={onchange}
        ></textarea>

        <button className="btn btn-primary mt-1" onClick={Touppercase}>
          Convert to Uppercase
        </button>

        <button className="btn btn-secondary ms-2 mt-1" onClick={Summary}>
          Present word summary
        </button>
      </div>

      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1 className="mt-1">Your text summary</h1>
        <p>{words}</p>
      </div>
      <div className="form-check form-switch"></div>
    </>
  );
}
Form.propype = {
  title: PropTypes.string,
};
Form.defaultProps = {
  title: "Enter text",
};
