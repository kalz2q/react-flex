import React from "react";
import cloud from "./cloud.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={cloud} width="64px" height="40px"></img>
        <nav>
          <ul>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
