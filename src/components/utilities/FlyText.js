// @flow
import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
// import { Tween, Timeline, SplitLetters } from "react-gsap";
import {
  Controls,
  PlayState,
  Timeline,
  Tween,
  SplitWords,
  SplitLetters,
} from "react-gsap";

const SplitTextStyled = styled.div`
  overflow: hidden;
  text-align: center;

  .section {
    height: 100vh;
  }
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
  }
  .text,
  .text2 {
    position: relative;
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
  }
`;
const TweenStyled = styled.div`
  .section {
    height: 100vh;
  }

  .tween {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    position: relative;
    left: calc(50% - 50px);
  }

  .stagger {
    width: 50px;
    height: 50px;
    left: 700px;
    background-color: green;
    position: relative;
  }
`;

const FlyText = () => (
  <TweenStyled>
    <div className="section" />
    {/* <Controller>
      <Scene
        duration={100}
        pin={false}
        reverse={true}
        indicators={true}
        offset={140}
      >
        {(progress, event) => {
          //console.log(event);

          return (
            <Timeline
              target={
                <div>
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      background: "#ccc",
                    }}
                  />
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      background: "red",
                    }}
                  />
                </div>
              }
            >
              <Tween
                to={{
                  left: "0px",
                  rotation: -360,
                  width: "200px",
                  height: "200px",
                }}
                ease="Strong.easeOut"
                totalProgress={progress}
                paused
              >
                <div className="tween">Pin Test</div>
              </Tween>
            </Timeline>
          );
        }}
      </Scene>

      <div className="section" />
    </Controller> */}
    {/* <div className="section" /> */}
    <div id="trigger" />
    <Controller>
      {/* <Scene triggerElement="#trigger" duration={300}>
        {(progress) => (
          <Tween
            to={{
              left: "0px",
              rotation: -360,
              width: "200px",
              height: "200px",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <div className="tween">Pin Testxxx</div>
          </Tween>
        )}
      </Scene> */}
      <Scene triggerElement="#trigger" duration={600} pin={false}>
        {(progress) => (
          <Timeline
            totalProgress={progress}
            paused
            target={
              <div className="x">
                <h2>ZZzzzZzzZz</h2>
              </div>
            }
          >
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
            <Tween to={{ x: "0%", y: "100%" }} />
            <Tween to={{ x: "50%", y: "50%" }} />
            <Tween to={{ x: "99%", y: "99%" }} />
          </Timeline>
        )}
      </Scene>
    </Controller>
    <div className="section" />
  </TweenStyled>
);

export default FlyText;
