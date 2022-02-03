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
  const Page1 = () => {
    return (
      <div>
        <ParallaxProvider>
          {/* <MenuBar myProp={executeScroll} /> */}
          <ContentTop />
          <span ref={refTop}></span>
          <div
            className="BBold BStyle3 BSize_large"
            style={{ textAlign: "center", fontStyle: "oblique" }}
          >
            My Joruney
          </div>{" "}
          <CustomizedTimeline></CustomizedTimeline>{" "}
          <span ref={refAboutMe}></span>
          <Content3 />
          <span ref={refGrid}></span>
          <ContentGrid />x<span ref={refContactMe}></span>
          <ContentHolderTimeLine /> <Footer />{" "}
        </ParallaxProvider>
      </div>
    );
  };
  return (
    <div className="App">
      {" "}
      {/* <div ref={myRef}>Element to scroll to</div> */}
      {/* <ParallaxProvider>
        <MenuBar myProp={executeScroll} />
        <ContentTop />
        <span ref={refTop}></span>
        <CustomizedTimeline></CustomizedTimeline> <span ref={refAboutMe}></span>
        <Content3 />
        <span ref={refGrid}></span>
        <ContentGrid />x<span ref={refContactMe}></span>
        <ContentHolderTimeLine /> <Footer />
      </ParallaxProvider> */}
      <Router>
        <div>
          {/* {" "}
          <ul>
            <li>
              <Link to="/">First Page</Link>
            </li>
            <li>
              <Link to="/classComponent">Second Page</Link>
            </li>
            <li>
              <Link to="/classComponent#a">Second Page</Link>
            </li>
          </ul> */}{" "}
          <MenuBar myProp={executeScroll} />
        </div>

        <Routes>
          <Route path="/" exact element={<Page1 />}></Route>
          <Route path="/classComponent" exact element={<MyClass />}></Route>
          <Route path="/classComponent#ss" exact element={<MyClass />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
