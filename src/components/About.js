import React from "react";
export default function About(props) {
  return (
    <>
    <div className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } mx-2`}> <h1 >This is about section</h1></div> 
    </>
  );
}
