import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        background: "linear-gradient(to right, #fa709a 0%, #fee140 100%);",
      }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        {" "}
        <CustomizedTimeline></CustomizedTimeline>{" "}
      </Container>

      {/* <Body3></Body3> */}
    </Box>
  );
}

export default ContentHolderTimeLine;
