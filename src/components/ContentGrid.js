import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import MuiTypography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ShapeShifter from "./reusables/ShapeShifter";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import { CardActionArea } from "@mui/material";
import Steppers from "./reusables/Stepper";
import TabPanel from "./myTab";
function ContentGrid() {
  const WavePart = styled("div")(({}) => ({
    color: "red",
    zIndex: "0",
  }));
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "50vh",
    backgroundColor: "khaki",
  }));
  var cardStyle = {
    display: "block",
    width: "30vw",
    transitionDuration: "0.3s",
    height: "45vh",
  };
  const classes = {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "black",
      fontFamily: "Roboto",
      height: "100%",
    },
  };
  return (
    <div style={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={7} style={classes.paper}>
            <Typography variant="h4" component="div">
              {"     All the great ideas come alive "}
            </Typography>
            <Divider variant="middle"></Divider>
            <Typography variant="h5" component="div">
              {"Yes they will!"}
            </Typography>
            <Steppers></Steppers>
            <Typography variant="h5" component="div"></Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={12} style={classes.paper}>
            {" "}
            <TabPanel></TabPanel>
            {/* <ShapeShifter /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
      </Grid>{" "}
      <WavePart sx={{ backgroundColor: "white" }}>
        <div className="custom-shape-divider-bottom-1643280713">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stop-color="#fee140" />
                <stop offset="70%" stop-color="#fa709a" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill2"
            ></path>
          </svg>
          {/* <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stop-color="#fee140" />
                <stop offset="100%" stop-color="#fa709a" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            />
          </svg> */}
        </div>{" "}
      </WavePart>
    </div>

    // <div style={classes.root}>
    //   <Grid container xs={12} sm={12} md={12}>
    //     <Grid Item item xs={2}>
    //       <Item>xs=4</Item>
    //     </Grid>{" "}
    //     <Grid item xs={4}>
    //       <Item>
    //         {" "}
    //         <Box
    //           sx={{
    //             display: "flex",
    //             flexWrap: "wrap",
    //             "& > :not(style)": {
    //               m: 1,
    //               width: "100%",
    //               height: "100%",
    //             },
    //           }}
    //         >
    //           <Paper style={cardStyle} elevation={3}>
    //             <ShapeShifter />
    //           </Paper>
    //         </Box>
    //       </Item>
    //     </Grid>{" "}
    //     <Grid item xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>{" "}
    //     <Grid item xs={2}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}

export default ContentGrid;
