import React from "react";
import ReactDom from "react-dom";

function Control(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <Logout />;
  }
  return <Login />;
}

const element = <Control isLoggedIn={false} />;

ReactDom.render(element, document.getElementById("root"));
