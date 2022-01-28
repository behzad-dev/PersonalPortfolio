import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const FlyText3 = () => (
  <div style={{ backgroundColor: "green" }}>
    {/* <div id="trigger" /> */}
    <Controller>
      <Scene
        indicators={true}
        triggerElement="#trigger"
        duration={450}
        pin={true}
      >
        {/* <div id="trigger">s</div> */}
        {(progress) => (
          <Timeline
            totalProgress={progress}
            paused
            target={
              <div
                style={{ backgroundColor: "red" }}
                id="trigger"
                className="x"
              >
                <h2>ZZzzzZzzZz</h2>
              </div>
            }
          >
            {" "}
            {/* <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} /> */}
            {/* <Tween to={{ rotation: 51 }} />
            <Tween to={{ rotation: 121 }} /> */}
            {/* <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} /> */}
            {/* <Tween to={{ x: "55", y: "201" }} /> */}
            {/* <Tween to={{ x: "12", y: "555" }} /> */}
            <Tween to={{ x: "50%", y: "50%" }} />
            <Tween to={{ x: "99%", y: "99%" }} />{" "}
            <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} />
          </Timeline>
        )}
      </Scene>
    </Controller>
    {/* <div style={{ height: "100vh" }} className="section" />
    <div style={{ height: "100vh" }} className="section" /> */}
  </div>
);

export default FlyText3;
