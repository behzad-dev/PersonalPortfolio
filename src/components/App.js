import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HelloWorld from "./HelloWorld";
import MyClass from "./MyClass";
import MenuBar from "./AppBar";
import ProductHeroLayout from "./Body";
import ProductValues from "./Body2";
import Body3 from "./Body3";
import Body4Grid from "./Body4Grid";
import Skills from "./reusables/Skills";
function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <ProductHeroLayout></ProductHeroLayout>
      {/* <Skills></Skills> */} <Body4Grid></Body4Grid>
      <ProductValues></ProductValues>
      {/* <Body3 /> */}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">First Page</Link>
            </li>
            <li>
              <Link to="/classComponent">Second Page</Link>
            </li>
          </ul>
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
