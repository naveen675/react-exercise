import React, { useState } from "react";
import ReactDom from "react-dom";
import Message from "./message";
import EventBind from "./EventBind";

function Counter() {}

const element = <EventBind />;

ReactDom.render(element, document.getElementById("root"));
