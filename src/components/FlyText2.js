import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const SvgStyled = styled.div`
  overflow: hidden;
  .section {
    height: 10vh;
  }
  #polygon {
    stroke: yellowgreen;
    stroke-width: 8;
    stroke-linejoin: round;
    fill: black;
  }
  svg {
    height: 280px;
    width: 320px;
    margin: auto;
    overflow: visible;
  }
`;

const FlyText2 = () => (
  <SvgStyled>
    <div />
    <Controller>
      <Scene
        duration={100}
        pin={true}
        reverse={true}
        indicators={true}
        offset={140}
      >
        {(progress, event) => {
          //console.log(event);

          return (
            <div>
              <Tween
                position={{ x: "10px" }}
                duration={11}
                from={{ x: "10%", top: "10%" }}
                to={{ x: "1251px", top: "551px" }}
                paused
                playState={
                  event.type === "enter" && event.scrollDirection === "FORWARD"
                    ? "play"
                    : event.type === "enter" &&
                      event.scrollDirection === "REVERSE"
                    ? "reverse"
                    : null
                }
              >
                <div id="polygon">aaa</div>
              </Tween>{" "}
            </div>
          );
        }}
      </Scene>

      <div className="section" />
    </Controller>
    <div className="section" />
  </SvgStyled>
);

export default FlyText2;
