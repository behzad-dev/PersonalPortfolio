import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import HelloWorld from "./HelloWorld";
import MyClass from "./MyClass";
import MenuBar from "./AppBar";
import ContentTop from "./ContentTop";
import ContentContactMe from "./ContentContactMe";
import Footer from "./Footer";
import ContentGrid from "./ContentGrid";
import TimelineComponent from "./reusables/TimelineComponent";
import MyParallax from "./reusables/Parallax";
import Parallax2 from "./reusables/Parallax2";
import Content2 from "./Content2";
import ContentAboutMe from "./ContentAboutMe";
import { HashLink as Linkx } from "react-router-hash-link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  const theme = createTheme({
    typography: {
      fontFamily: ["Quicksand", "sans-serif"].join(","),
    },
  });
  const Page1 = () => {
    return (
      <div
        className="BStyle9"
        // style={{ backgroundColor: "black" }}
      >
        <ParallaxProvider>
          <ThemeProvider theme={theme}>
            {/* <MenuBar myProp={executeScroll} /> */}
            <ContentTop />
            <span ref={refTop}></span>
            <div
              className="BBold  BSize_large"
              style={{
                textAlign: "center",
                fontStyle: "",
                // background: "black",
              }}
            >
              My Joruney Begins in Tehran, 1991
              <br />a short brief story from my journey
            </div>{" "}
            <TimelineComponent></TimelineComponent>{" "}
            <span ref={refAboutMe}></span>
            <ContentAboutMe />
            <span ref={refGrid}></span>
            <ContentGrid />
            <span ref={refContactMe}></span>
            <ContentContactMe /> <Footer />{" "}
          </ThemeProvider>
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
