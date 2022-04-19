import React, { useState } from "react";
import ReactDom from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Count : {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </>
  );
}

const element = <Counter />;

ReactDom.render(element, document.getElementById("root"));
