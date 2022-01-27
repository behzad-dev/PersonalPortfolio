import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Body3 from "./Body3";
import MuiTypography from "@mui/material/Typography";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container
        sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
      ></Container>
      <Body3></Body3>
    </Box>
  );
}

export default ProductValues;
