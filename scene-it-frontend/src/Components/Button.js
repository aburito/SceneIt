import React from "react";

const Button = (props) => {
  var color = "";
  if (props.primary) {
    color = "bg-green-600 hover:bg-green-300 active:bg-green-900";
  } else {
    color = "bg-grey-600 hover:bg-grey-300 active:bg-grey-900";
  }

  return (
    <button
      className={`box-content h-8 w-16  px-4 py-.5 ${color} rounded-md shadow-md mx-2 my-2`}
    >
      {props.children}
    </button>
  );
};

export default Button;
