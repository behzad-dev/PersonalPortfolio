import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import BehTransparent from "./reusables/BehTransparent.png";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { RatingFeedBack } from "./reusables/Rating";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useEffect, useState, useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import "./reusables/BText.css";
import "aos/dist/aos.css";
import { Create_data, Fetch_data } from "../actions/index";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Aos from "aos";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const background = {
  image:
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
  translateY: [0, 88],
  opacity: [0.1, 0.1],
  scale: [1.05, 2, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
};
const headline = {
  translateY: [0, 30],
  scale: [1, 1.05, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className="test">
      <h1 className="BBold BStyle2 BSize_large">Contact Me</h1>
    </div>
  ),
};
const theme = createTheme({
  typography: {
    fontFamily: ['"Segoe UI"'].join(","),
  },
});
const ContactForm = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Content, setContent] = useState("");
  const [Like, setLike] = useState("");
  const valueRef = useRef();

  const handleCallbackLike = (childData) => {
    setLike(childData);
  };
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  const handleSend = () => {
    dispatch(Create_data(Name, Email, Content, Like));
  };
  return (
    <ParallaxBanner layers={[]}>
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
          {" "}
          <div
            className="BBold BStyle2 BSize_large"
            style={{ textAlign: "center", fontStyle: "oblique" }}
          >
            Contact Form
          </div>{" "}
          <div>
            <Paper
              data-aos="zoom-in-up"
              className="BStyle5 "
              elevation={12}
              sx={{
                width: "100%",
                height: "100%",
                margin: "5px",
                minHeight: "25vh",
              }}
            >
              {/* <img src={BehTransparent}></img> */}
              <Box
                sx={{
                  height: "100%",
                  margin: "20px",
                  display: "flex",
                  flexDirection: "row",

                  "& .MuiTextField-root": { m: 3, width: "25ch" },
                }}
              >
                {" "}
                <TextField
                  onChange={(event) => setName(event.target.value)}
                  label="Name"
                  id="outlined-size-normal"
                  defaultValue="What should I call you?"
                />
                <TextField
                  onChange={(event) => setEmail(event.target.value)}
                  label="e-Mail"
                  id="outlined-size-normal"
                  defaultValue="How I can contact you?"
                />{" "}
                <RatingFeedBack
                  parentCallback={handleCallbackLike}
                  name="simple-controlled"
                />
              </Box>
              <Box
                fullWidth
                sx={{
                  margin: "20px",
                  display: "flex",
                  flexDirection: "row",

                  "& .MuiTextField-root": { mb: 5 },
                }}
              >
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <TextField
                    onChange={(event) => setContent(event.target.value)}
                    id="outlined-multiline-static"
                    label="Tell me"
                    multiline
                    rows={6}
                    defaultValue="Sup?"
                  />{" "}
                  <Button
                    onClick={() => {
                      handleSend();
                    }}
                    variant="outlined"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </FormControl>
              </Box>{" "}
            </Paper>
          </div>
        </ThemeProvider>
      </Container>
    </ParallaxBanner>
  );
};
export default connect(null, { Create_data, Fetch_data })(ContactForm);
