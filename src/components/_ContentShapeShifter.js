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

const _ContentShapeShifter = () => (
  <SvgStyled>
    <div />
    <Controller>
      <Scene
        duration={100}
        pin={false}
        reverse={true}
        indicators={false}
        offset={140}
      >
        {(progress, event) => {
          //console.log(event);

          return (
            <svg>
              <Tween
                position={{ x: "10px" }}
                duration={1}
                from={{ x: "10%", top: "10%" }}
                to={{ x: "1251px", top: "551px" }}
                to={{
                  attr: {
                    points:
                      "264,115 183,103 150,30 116,103 36,115 93,172 80,249 150,215 219,249 208,171",
                  },
                  fill: "red",
                  ease: "Circ.easeInOut",
                }}
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
                <polygon
                  id="polygon"
                  points="240,220 240,182 240,145 240,70 155,70 112,70 70,70 70,145 70,220 155,220"
                />
              </Tween>
            </svg>
          );
        }}
      </Scene>

      <div className="section" />
    </Controller>
    <div className="section" />
  </SvgStyled>
);

export default _ContentShapeShifter;
