import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ContactForm from "./ContactForm";
import MuiTypography from "@mui/material/Typography";
import CustomizedTimeline from "./reusables/Timeline";
import Parallax2 from "./reusables/Parallax2";
import { Parallax } from "react-scroll-parallax";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ContentHolderTimeLine() {
  return (
    <div>
      {" "}
      <div className="custom-shape-divider-bottom-1643280713">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#fee140" />
              <stop offset="70%" stopColor="#fa709a" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill2"
          ></path>
        </svg>
      </div>{" "}
      <Box
        component="section"
        sx={{
          display: "flex",
          overflow: "hidden",
          background: "linear-gradient(to right, #fa709a 0%, #fee140 100%);",
        }}
      >
        <ParallaxProvider>
          {" "}
          <ContactForm></ContactForm>
        </ParallaxProvider>

        {/* <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        {" "} */}
        {/* <CustomizedTimeline></CustomizedTimeline>  */}
        {/* </Container> */}
        {/* <Body3></Body3> */}
      </Box>
    </div>
  );
}

export default ContentHolderTimeLine;
