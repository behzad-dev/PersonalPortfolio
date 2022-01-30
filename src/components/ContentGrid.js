import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Steppers from "./reusables/Stepper";
import TabPanel from "./reusables/myTab";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
function ContentGrid() {
  useEffect(() => {
    Aos.init({ duration: 555, easing: "ease-in-sine" });
  }, []);
  const Animate = "zoom-in";
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
      // backgroundColor: "red",
      // background: "linear-gradient(#e66465, #9198e5)",
      backgroundImage: " linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    },
  };
  return (
    <div style={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={5}>
          <Paper data-aos="fade-right" elevation={7} style={classes.paper}>
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
        <Grid data-aos="fade-left" item xs={12} sm={5}>
          <Paper elevation={12} style={classes.paper}>
            {" "}
            <TabPanel></TabPanel>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
      </Grid>{" "}
    </div>
  );
}

export default ContentGrid;
