import React from "react";
 
const ColorfulMsg = props => {
  return <p style={{ color: props.color}}>{props.children}</p>;
};
 
export default ColorfulMsg;