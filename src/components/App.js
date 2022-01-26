import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HelloWorld from "./HelloWorld";
import MyClass from "./MyClass";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <li>
            <Link to="/">First Page</Link>
          </li>
          <li>
            <Link to="/classComponent">Second Page</Link>
          </li>
        </div>

        <Routes>
          <Route path="/" exact element={<HelloWorld />}></Route>
          <Route path="/classComponent" exact element={<MyClass />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
