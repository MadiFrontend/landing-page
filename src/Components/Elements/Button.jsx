import React from "react";
import { Children } from "react";

function Button(props) {
  return (
    <button
      className={`px-5 py-2 bg-btnColor text-white rounded-3xl  ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
