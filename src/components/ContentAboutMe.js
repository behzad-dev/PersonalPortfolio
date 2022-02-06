import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
// import BehTransparent from "./reusables/BehTransparent.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import "./Content2.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: [
      //todo: here it made the text be blury
      "Quicksand",
      // "sans-serif",
      // "-apple-system",
      // "BlinkMacSystemFont",
      // '"Segoe UI"',
      // "Roboto",
      // '"Helvetica Neue"',
      // "Arial",
      // "sans-serif",
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(","),
  },
});
const ContentAboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <div style={{ textAlign: "center" }}>About me</div>
      <div style={{ textAlign: "center", letterSpacing: "-2px" }}>
        ----------------
      </div>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="md"
          sx={{
            fontWeight: "200",
            color: "black",
            // fontFamily: "Segoe UI Emoji",
          }}
        >
          <Paper data-aos="fade" elevation={24} sx={{ margin: "50px" }}>
            {/* <img src={BehTransparent}></img> */}
            <Card sx={{ display: "flex" }}>
              {" "}
              <CardMedia
                component="img"
                sx={{
                  width: "50vh",

                  display: "flex",
                  flexDirection: "column",
                }}
                // image={BehTransparent}
              />
              <Box
                sx={{
                  height: "100%",
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {" "}
                <Typography mt={2} align="center" component="div" variant="h5">
                  fun facts <span className="BGradiant"> about me</span> that
                  you might know!
                </Typography>
                <Typography
                  mt={2}
                  align="center"
                  component="div"
                  variant="caption"
                >
                  I am an energetic person with lots of motivation and exited
                  about future.coming here to Germany alone was the biggest
                  challenge for me and a great step towards the future that I
                  envision .
                </Typography>
                <Typography
                  mt={2}
                  align="center"
                  component="div"
                  variant="caption"
                >
                  I am looking forward to gain new experience. and be faced with
                  new challenges.
                </Typography>
                <br></br>
                <Typography
                  className="changecolor3"
                  mt={2}
                  align="left"
                  component="div"
                  variant="h5"
                >
                  more
                </Typography>
                <Typography
                  className="changecolor"
                  mt={0}
                  align="center"
                  component="div"
                  variant="h5"
                >
                  about
                </Typography>
                <Typography
                  className="changecolor2"
                  mt={0}
                  align="right"
                  component="div"
                  variant="h5"
                >
                  me?
                </Typography>
                <Typography
                  mt={1}
                  align="left"
                  component="div"
                  variant="overline"
                >
                  My passion for programming will help me solve all problems I
                  will be faced with.
                </Typography>
                <Typography
                  mt={1}
                  align="left"
                  component="div"
                  variant="overline"
                >
                  Like i am nice
                </Typography>
              </Box>{" "}
            </Card>
          </Paper>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default ContentAboutMe;
