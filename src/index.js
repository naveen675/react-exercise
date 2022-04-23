import React, { useState } from "react";
import ReactDom from "react-dom";
import Message from "./message";
import EventBind from "./eventBind";
import Parent from "./parent";
import Conditional from "./conditional";
import Form from "./Form";

// const element = <EventBind />;
const element = <Form />;

ReactDom.render(element, document.getElementById("root"));
