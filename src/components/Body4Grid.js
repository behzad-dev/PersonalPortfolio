import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Body3 from "./Body3";
import MuiTypography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ShapeShifter from "./reusables/ShapeShifter";
import Paper from "@mui/material/Paper";

function Body4Grid() {
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
      color: "blue",
      fontFamily: "Roboto",
    },
  };
  return (
    <div style={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={7} style={classes.paper}>
            <ShapeShifter />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={3} style={classes.paper}>
            {" "}
            <ShapeShifter />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
      </Grid>
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

export default Body4Grid;
