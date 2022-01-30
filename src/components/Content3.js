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
import BehTransparent from "./reusables/BehTransparent.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import "./Content2.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
const Content3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ textAlign: "center" }}>About me</div>
      <div style={{ textAlign: "center", letterSpacing: "-2px" }}>
        ----------------
      </div>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="md"
          sx={{
            fontFamily: "Segoe UI Emoji",
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
                image={BehTransparent}
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
                  Some <span className="BGradiant">Highlights</span> about me
                </Typography>
                <Typography
                  mt={2}
                  align="center"
                  component="div"
                  variant="caption"
                >
                  I am nice an cozy and i am nice, i am very nice and nice nice
                  nice,meow meow meow. and i am very nice also, last but least i
                  am very nice
                </Typography>
                <Typography
                  mt={2}
                  align="center"
                  component="div"
                  variant="caption"
                >
                  i should mention that also that i am very nice, despite that i
                  am very nice
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
                  yes i am nice and cute,also there is many things about me,
                  like:
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
export default Content3;
