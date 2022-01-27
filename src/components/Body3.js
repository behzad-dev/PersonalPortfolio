import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Skills from "./reusables/Skills";
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

const Body3 = () => (
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
                {/* <svg id="polygon" viewBox="0 0 5555 444">
                  <path
                    d="M478.608,300.522v-33.39h-66.781V233.74h33.39v-0.001h0.001v-33.391h33.391V66.783h-33.392v-33.39h-33.39V0H0v100.174
			h33.39v322.783H0V512h445.217v-33.39h33.39v-0.001h0.001v-33.391H512V300.522H478.608z M367.304,389.565h-33.391v33.391H144.696
			V322.783h189.217v33.391h33.391V389.565z M367.304,155.826h-33.391v33.391H144.696V89.044h189.217v33.391h33.391V155.826z"
                  />
                </svg> */}
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

export default Body3;
