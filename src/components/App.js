import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import HelloWorld from "./HelloWorld";
import MyClass from "./MyClass";
import MenuBar from "./AppBar";
import ContentTop from "./ContentTop";
import ContentHolderTimeLine from "./ContentHolderTimeLine";
import Footer from "./Footer";
import ContentGrid from "./ContentGrid";

import FlyText from "./FlyText";
import FlyText2 from "./FlyText2";
import FlyText3 from "./FlyText3";
import CustomizedTimeline from "./Timeline";
import MyParallax from "./Parallax";
import Parallax2 from "./Parallax2";

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <ContentTop></ContentTop>
      <ContentGrid></ContentGrid>
      <ParallaxProvider>
        <ContentHolderTimeLine></ContentHolderTimeLine>
      </ParallaxProvider>

      {/* <FlyText2></FlyText2>
      <FlyText3></FlyText3> */}
      {/* <ParallaxProvider>
        <div style={{ height: "500px" }}>
          s<Parallax2></Parallax2>
        </div>
      </ParallaxProvider> */}

      {/* <Body3 /> */}
      {/* <FlyText></FlyText> */}

      <Footer></Footer>
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
