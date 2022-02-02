import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import HelloWorld from "./HelloWorld";
import MyClass from "./MyClass";
import MenuBar from "./AppBar";
import ContentTop from "./ContentTop";
import ContentHolderTimeLine from "./ContentHolderTimeLine";
import Footer from "./Footer";
import ContentGrid from "./ContentGrid";
import CustomizedTimeline from "./reusables/Timeline";
import MyParallax from "./reusables/Parallax";
import Parallax2 from "./reusables/Parallax2";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { HashLink as Linkx } from "react-router-hash-link";

function App() {
  const refTop = useRef(null);
  const refAboutMe = useRef(null);
  const refGrid = useRef(null);
  const refContactMe = useRef(null);

  const executeScroll = (Ref) => {
    switch (Ref) {
      case "My TimeLine":
        return refTop.current.scrollIntoView();
      case "About me":
        return refAboutMe.current.scrollIntoView();
      case "Resume":
        return refGrid.current.scrollIntoView();
      case "Contact Me":
        return refContactMe.current.scrollIntoView();
      default:
    }
  };
  return (
    <div className="App">
      {" "}
      {/* <div ref={myRef}>Element to scroll to</div> */}
      <ParallaxProvider>
        <MenuBar myProp={executeScroll} />
        {/* <button onClick={executeScroll}> Click to scroll </button> */}
        <ContentTop />
        <span ref={refTop}></span>
        <CustomizedTimeline></CustomizedTimeline>{" "}
        {/* <ParallaxProvider>
          <div style={{ height: "500px" }}>
            s<MyParallax></MyParallax>
          </div>
        </ParallaxProvider> */}
        {/* <div style={{ textAlign: "center" }}>About me</div> */}
        <span ref={refAboutMe}></span>
        <Content3 />
        <span ref={refGrid}></span>
        {/* <Content2 /> */}
        <ContentGrid />
        <span ref={refContactMe}></span>
        <ContentHolderTimeLine /> <Footer />
      </ParallaxProvider>
      {/* <Router>
        <div>
          <ul>
            <li>
              <Link onClick={executeScroll} to="/">
                First Page
              </Link>
            </li>
            <li>
              <Link to="/classComponent">Second Page</Link>
            </li>
            <li>
              <Link to="/classComponent#a">Second Page</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" exact element={<HelloWorld />}></Route>
          <Route path="/classComponent" exact element={<MyClass />}></Route>
          <Route path="/classComponent#ss" exact element={<MyClass />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
