import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Steppers from "./reusables/Stepper";
import TabPanel from "./reusables/myTab";
function ContentGrid() {
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
      </Grid>{" "}
    </div>
  );
}

export default ContentGrid;
