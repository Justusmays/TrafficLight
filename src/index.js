import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Stoplight } from "./stoplight";

function App() {
  const [light, setLight] = React.useState('')

  return (
    <div className="App">
      <Stoplight light={light} onClick={light => setLight(light)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
