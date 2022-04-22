import React, { useState } from "react";
import ReactDom from "react-dom";
import Message from "./message";
import EventBind from "./eventBind";
import Parent from "./parent";

// const element = <EventBind />;
const element = <Parent />;

ReactDom.render(element, document.getElementById("root"));
