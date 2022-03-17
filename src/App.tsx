import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ComponentApp3 from "./ComponentApp3";

const App = () => (
  <div className="container">
    <div>App3</div>
    <ComponentApp3 prop1="propFromApp3"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app")); 