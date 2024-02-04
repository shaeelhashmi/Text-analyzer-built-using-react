//A simple idea of a dark mode
import React, { useState } from "react";

export default function Darkmode() {
    const [backgroundStyle, setbackground] = useState({
        color: "white",
        backgroundColor: "black",
      });
  const enablemode = () => {
    if (backgroundStyle.color === "black") {
      setbackground({color:"white", backgroundColor:"black"});
    } else {
      setbackground({color:"black", backgroundColor:"white"});
    }
  };
  return (
    <>
    <div style={backgroundStyle} className="container">
      <button className="btn btn-primary" onClick={enablemode}>
        Enable dark mode
      </button>
    </div>
    </>
  );
}
