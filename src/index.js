import React, { useState } from "react";
import ReactDom from "react-dom";
import Message from "./message";
import EventBind from "./eventBind";
import Parent from "./parent";
import Conditional from "./conditional";

// const element = <EventBind />;
const element = <Conditional />;

ReactDom.render(element, document.getElementById("root"));
